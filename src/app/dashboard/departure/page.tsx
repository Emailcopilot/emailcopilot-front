"use client";

import { Suspense, useState, useEffect, useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Users, Search } from "lucide-react";
import { leadsApi } from "@/lib/api";
import type { Lead, PaginatedMeta } from "@/lib/types";
import LeadStatus from "@/components/ui/departure/LeadStatus";
import LeadMenu, { getHiddenLeadIds } from "@/components/ui/departure/LeadMenu";
import { Pagination } from "@/components/ui/Pagination";
import EmailPreviewCard from "@/components/ui/EmialPreview";
import { CopilotsPopup } from "@/components/ui/CopilotsPopup";
import { templatesApi } from "@/lib/api";
import axios from "axios";
import { formatDateTime } from "@/lib/helpers";
import { useDebounce, useRowsPerPage } from "@/lib/hooks";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import CopilotToolbar, {
  type StatusOption,
  type ViewMode,
} from "@/components/ui/copilots/CopilotToolBar";

/** Lead status filter. "excluded" = suppressed leads (any status). */
const LEAD_STATUS_OPTIONS: StatusOption[] = [
  { value: "all", label: "All status", dotClassName: "bg-blue-500" },
  { value: "new", label: "New", dotClassName: "bg-blue-500" },
  { value: "sent", label: "Sent", dotClassName: "bg-emerald-500" },
  { value: "replied", label: "Replied", dotClassName: "bg-violet-500" },
  { value: "skipped", label: "Skipped", dotClassName: "bg-slate-400" },
  { value: "failed", label: "Failed", dotClassName: "bg-rose-500" },
  { value: "excluded", label: "Excluded", dotClassName: "bg-orange-500" },
];

// The API ignores ?status= (Freedcamp "Status Filters"), so for a status
// filter we load every lead (limit max 100 per page) and filter here.
// Switch this to a normal paged request once the back-end filters.
const API_STATUS_FILTER = false;

function matchesStatus(lead: Lead, status: string) {
  if (status === "all") return true;
  if (status === "excluded") return !!lead.suppressed;
  return !lead.suppressed && (lead.status || "sent") === status;
}

const MOCK_META: PaginatedMeta = {
  total: 50,
  page: 1,
  limit: 50,
  totalPages: 2,
};

const TOOLTIP_MARGIN = 8; // gap between trigger and tooltip, px
const TOOLTIP_MAX_WIDTH = 160; // matches max-w-40 (40 * 4px)
const VIEWPORT_PADDING = 8; // keep tooltip this far from screen edges

type TooltipPlacement = "top" | "bottom";

/**
 * Computes where the tooltip bubble should render based on the trigger's
 * current position in the viewport:
 * - Flips to "bottom" placement when there isn't enough room above the
 *   trigger (e.g. rows near the top of a scrolled/sticky-header table).
 * - Clamps horizontal position so the bubble never spills off-screen.
 */
function computeTooltipPosition(
  triggerEl: HTMLElement,
  tooltipEl: HTMLElement | null,
): { top: number; left: number; placement: TooltipPlacement } {
  const rect = triggerEl.getBoundingClientRect();
  const tooltipHeight = tooltipEl?.offsetHeight ?? 32;
  const tooltipWidth = tooltipEl?.offsetWidth ?? TOOLTIP_MAX_WIDTH;

  const spaceAbove = rect.top;
  const placement: TooltipPlacement =
    spaceAbove < tooltipHeight + TOOLTIP_MARGIN ? "bottom" : "top";

  const top =
    placement === "top"
      ? rect.top - tooltipHeight - TOOLTIP_MARGIN
      : rect.bottom + TOOLTIP_MARGIN;

  let left = rect.left + rect.width / 2 - tooltipWidth / 2;
  left = Math.max(
    VIEWPORT_PADDING,
    Math.min(left, window.innerWidth - tooltipWidth - VIEWPORT_PADDING),
  );

  return { top, left, placement };
}

function Tooltip({
  text,
  children,
}: {
  text: string | null | undefined;
  children: React.ReactNode;
}) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{
    top: number;
    left: number;
    placement: TooltipPlacement;
  }>({ top: 0, left: 0, placement: "top" });

  const updatePosition = () => {
    if (!triggerRef.current) return;
    setCoords(computeTooltipPosition(triggerRef.current, tooltipRef.current));
  };

  // Recompute once the tooltip is in the DOM and measurable (its real
  // width/height aren't known until after it renders).
  useLayoutEffect(() => {
    if (visible) updatePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!text) return <>{children}</>;

  return (
    <div
      ref={triggerRef}
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible &&
        createPortal(
          <div
            ref={tooltipRef}
            role="tooltip"
            style={{ position: "fixed", top: coords.top, left: coords.left }}
            className="min-w-30 max-w-40 pointer-events-none border border-gray-100
                       px-3 py-1.5 rounded-md bg-white text-gray-600 text-[10px]
                       text-center shadow-md whitespace-normal wrap-break-word capitalize
                       z-9999"
          >
            {text}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 ${
                coords.placement === "top"
                  ? "top-full -mt-1"
                  : "bottom-full -mb-1"
              }`}
            />
          </div>,
          document.body,
        )}
    </div>
  );
}

function LeadsPageContent() {
  const { t } = useI18n();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [meta, setMeta] = useState<PaginatedMeta>(MOCK_META);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const autoPerPage = useRowsPerPage(8);
  const [manualLimit, setManualLimit] = useState<number | null>(null);
  const effectiveLimit = manualLimit ?? autoPerPage;
  const [copilotId, setCopilotId] = useState<number | null>(null);
  const [copilotName, setCopilotName] = useState<string | null>("All Copilots");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [loadingAll, setLoadingAll] = useState(false);
  // All leads for one copilot + search, kept while only the status changes.
  const allLeadsCacheRef = useRef<{ key: string; leads: Lead[] } | null>(null);
  const [activeLeadId, setActiveLeadId] = useState<number | null>(null);
  const [templateData, setTemplateData] = useState<{
    subject?: string;
    body?: string;
  } | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const requestSeqRef = useRef(0);

  const handleShowPreview = async (lead: Lead) => {
    setActiveLeadId(lead.id);
    setTemplateData(null);

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    if (lead.templateId) {
      try {
        const res = await templatesApi.getById(lead.templateId, {
          signal: abortController.signal,
        });
        const data = res.data?.data || res.data;
        setTemplateData({
          subject: data?.subject,
          body: data?.body,
        });
      } catch (error: any) {
        if (
          axios.isCancel(error) ||
          error.name === "CanceledError" ||
          error.name === "AbortError"
        ) {
          console.log("Fetch aborted");
        } else {
          console.error("Failed to fetch template:", error);
        }
      }
    }
  };

  const handleClosePreview = () => {
    setActiveLeadId(null);
    setTemplateData(null);
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  const debouncedSearchTerm = useDebounce(search, 300);
  useEffect(() => {
    const paramId = searchParams.get("copilotId");
    const paramName = searchParams.get("name");
    console.log("Search params:", {
      copilotId: paramId,
      copilotName: paramName,
    });

    if (paramId && paramName) {
      setCopilotId(Number(paramId));
      setCopilotName(paramName);
    } else {
      setCopilotId(null);
    }
    setPage(1);
  }, [searchParams]);

  async function fetchAllLeads(
    targetCopilotId: number | null,
    trimmedSearch: string,
    seq: number,
  ): Promise<Lead[] | null> {
    const key = `${targetCopilotId ?? "all"}|${trimmedSearch}`;
    if (allLeadsCacheRef.current?.key === key)
      return allLeadsCacheRef.current.leads;
    setLoadingAll(true);
    const params = {
      limit: 100,
      ...(trimmedSearch ? { search: trimmedSearch } : {}),
      ...(targetCopilotId != null ? { copilotId: targetCopilotId } : {}),
    };
    const first = await leadsApi.getAll({ ...params, page: 1 });
    if (seq !== requestSeqRef.current) return null;
    let all: Lead[] = [...first.data.data];
    const totalPages: number = first.data.meta?.totalPages ?? 1;
    // 10 pages at a time keeps it fast without flooding the API.
    for (let start = 2; start <= totalPages; start += 10) {
      const pages = Array.from(
        { length: Math.min(10, totalPages - start + 1) },
        (_, i) => start + i,
      );
      const results = await Promise.all(
        pages.map((p) => leadsApi.getAll({ ...params, page: p })),
      );
      if (seq !== requestSeqRef.current) return null;
      results.forEach((r) => (all = all.concat(r.data.data)));
    }
    allLeadsCacheRef.current = { key, leads: all };
    return all;
  }

  async function fetchLeads(
    targetPage: number,
    targetLimit: number,
    targetCopilotId: number | null,
    targetSearch: string,
    targetStatus: string,
  ) {
    // Sequence guard: as-you-type search fires overlapping requests and only
    // the newest response may update the table.
    const seq = ++requestSeqRef.current;
    try {
      setLoading(true);

      const trimmedSearch = targetSearch.trim();
      const hidden = getHiddenLeadIds();

      if (targetStatus !== "all" && !API_STATUS_FILTER) {
        const all = await fetchAllLeads(targetCopilotId, trimmedSearch, seq);
        if (!all || seq !== requestSeqRef.current) return;
        const filtered = all.filter(
          (lead) => !hidden.has(lead.id) && matchesStatus(lead, targetStatus),
        );
        const totalPages = Math.max(1, Math.ceil(filtered.length / targetLimit));
        const safePage = Math.min(targetPage, totalPages);
        setLeads(
          filtered.slice((safePage - 1) * targetLimit, safePage * targetLimit),
        );
        setMeta({
          total: filtered.length,
          page: safePage,
          limit: targetLimit,
          totalPages,
        });
        return;
      }

      const res = await leadsApi.getAll({
        page: targetPage,
        limit: targetLimit,
        ...(trimmedSearch ? { search: trimmedSearch } : {}),
        ...(targetCopilotId != null ? { copilotId: targetCopilotId } : {}),
        ...(targetStatus !== "all" ? { status: targetStatus } : {}),
      });
      if (seq !== requestSeqRef.current) return;
      setLeads(res.data.data.filter((lead: Lead) => !hidden.has(lead.id)));
      setMeta(res.data.meta);
    } catch {
      if (seq === requestSeqRef.current) {
        console.error("Failed to fetch leads");
      }
    } finally {
      if (seq === requestSeqRef.current) {
        setLoading(false);
        setLoadingAll(false);
      }
    }
  }

  useEffect(() => {
    fetchLeads(page, effectiveLimit, copilotId, debouncedSearchTerm, statusFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, effectiveLimit, copilotId, debouncedSearchTerm, statusFilter]);

  // When the viewport-derived size changes and the user hasn't picked a
  // manual size, restart from page 1 so the new size applies from the top.
  // A manual selection always wins over the automatic size.
  useEffect(() => {
    if (manualLimit == null) {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPerPage]);

  // normalize URL to ensure it has a protocol (http or https)
  const normalizeUrl = (url: string) => {
    if (!url) return "#";

    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };

  const handleLimitChange = (newLimit: number) => {
    setManualLimit(newLimit);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteLead = (id: number) => {
    allLeadsCacheRef.current = null;
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const handleSuppressionChange = (id: number, suppressed: boolean) => {
    allLeadsCacheRef.current = null;
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, suppressed } : lead)),
    );
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatusChange = (value: string) => {
    setStatusFilter(value);
    setPage(1);
  };

  const statusLabel =
    LEAD_STATUS_OPTIONS.find((o) => o.value === statusFilter)?.label ?? "";

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 py-4 sm:py-5 [@media(min-height:1081px)]:flex [@media(min-height:1081px)]:min-h-full [@media(min-height:1081px)]:flex-col">
      <DashboardHeader
        title="Departure"
        description="Recipients who have been emailed by your copilots."
        actionLabel="Select Copilot"
        onAction={() => setIsSidebarOpen(true)}
      />

      {/* Search stays mounted through loading and empty states so typing
          keeps focus and a no-results query can always be cleared. */}
      <div className="w-full p-2 border border-[#E2E8F0] mb-3 bg-white rounded-lg">
        <CopilotToolbar
          search={search}
          onSearchChange={handleSearchChange}
          status={statusFilter}
          onStatusChange={handleStatusChange}
          statusOptions={LEAD_STATUS_OPTIONS}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchPlaceholder="Search company, email, website or phone..."
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center gap-2 h-48 text-gray-400">
          {loadingAll && <Loader2 size={18} className="animate-spin" />}
          {loadingAll
            ? t("Loading all leads to filter by status…")
            : t("Loading...")}
        </div>
      ) : leads.length === 0 && statusFilter !== "all" && !search.trim() ? (
        <div className="bg-white border border-[#E2E8F0] rounded-lg flex flex-col items-center justify-center py-12 px-6 text-center">
          <h2 className="font-semibold text-sm text-gray-900 mb-1">
            {t("No results found")}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {t('No leads with status "{status}".', { status: t(statusLabel) })}
          </p>
          <button
            onClick={() => handleStatusChange("all")}
            className="px-4 py-2 border border-[#E2E8F0] rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {t("Show all")}
          </button>
        </div>
      ) : leads.length === 0 && search.trim() ? (
        <div className="bg-white border border-[#E2E8F0] rounded-lg flex flex-col items-center justify-center py-12 px-6 text-center">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <h2 className="font-semibold text-sm text-gray-900 mb-1">
            {t("No results found")}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            {t('No leads match "{query}". Try a different search term.', {
              query: search.trim(),
            })}
          </p>
          <button
            onClick={() => handleSearchChange("")}
            className="px-4 py-2 border border-[#E2E8F0] rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {t("Clear search")}
          </button>
        </div>
      ) : leads.length === 0 ? (
        <div className=" min-h-120 flex flex-col items-center justify-center p-12 text-center ">
          <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users size={20} className="text-primary" />
          </div>
          <h2 className="font-bold text-gray-900 mb-2">{t("No leads yet")}</h2>
          <p className="text-sm text-gray-500 mb-5">
            {t("Leads will appear here once your copilots start sending emails.")}
          </p>
        </div>
      ) : (
        <>
          {/* Mobile / tablet: one card per lead (the wide table only fits from lg). */}
          <div
            className={
              viewMode === "grid"
                ? "lg:grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-4 bg-white lg:bg-transparent border border-[#E2E8F0] lg:border-0 rounded-lg overflow-hidden lg:overflow-visible mb-6"
                : "lg:hidden bg-white border border-[#E2E8F0] rounded-lg overflow-hidden mb-6"
            }
          >
            {leads.map((lead, index) => {
              const status = lead.suppressed
                ? "suppressed"
                : lead.status || "sent";
              return (
                <div
                  key={lead.id + index}
                  className={`px-4 py-4 border-b last:border-b-0 border-[#E2E8F0] ${
                    viewMode === "grid"
                      ? "lg:bg-white lg:border lg:last:border-b lg:rounded-lg"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold truncate text-sm text-[#0F172A] mb-1">
                        {lead.companyName || "—"}
                      </div>
                      {lead.email && (
                        <a
                          href={`mailto:${lead.email}`}
                          className="block truncate text-xs text-blue-500"
                        >
                          {lead.email}
                        </a>
                      )}
                      {(lead.website || lead.phone) && (
                        <div className="mt-0.5 truncate text-xs text-[#59637C]">
                          {[lead.website, lead.phone]
                            .filter(Boolean)
                            .join(" · ")}
                        </div>
                      )}
                      <div className="mt-0.5 truncate text-xs text-[#59637C]">
                        {lead.copilotName || t("Unknown Copilot")}
                        {lead.sentAt && <> · {formatDateTime(lead.sentAt)}</>}
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <LeadStatus status={status} isSmall />
                        <button
                          type="button"
                          onClick={() => handleShowPreview(lead)}
                          className="rounded-md px-2 py-1 text-[10px] font-medium"
                          style={{ backgroundColor: "#F5F7FF", color: "#2563EB" }}
                        >
                          {t("Show email")}
                        </button>
                      </div>
                    </div>
                    <LeadMenu
                      lead={lead}
                      onDeleted={handleDeleteLead}
                      onSuppressionChange={handleSuppressionChange}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className={viewMode === "grid" ? "hidden" : "hidden lg:contents"}>
          <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden mb-6 [@media(min-height:1081px)]:flex [@media(min-height:1081px)]:flex-1 [@media(min-height:1081px)]:flex-col">
            <div className="overflow-auto max-h-[calc(100dvh-320px)]">
              <table className="w-full text-sm min-w-225">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-white">
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      Copilot
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Company")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Address")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Website")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Email")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Phone")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 bg-white text-[#94A3B8] px-6 py-3">
                      {t("Target Audience")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Sent at")}
                    </th>
                    <th className="sticky top-0 z-30 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5 text-[#94A3B8] px-6 py-3">
                      {t("Template")}
                    </th>
                    <th className="sticky top-0 right-22 z-40 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-left text-xs leading-5  text-[#94A3B8] px-6 py-3">
                      {t("Status")}
                    </th>
                    <th className="sticky top-0 right-0 z-40 w-22 min-w-22 bg-white shadow-[inset_0_-1px_0_#E2E8F0] font-normal text-center text-xs leading-5 text-[#94A3B8] px-5 py-3">
                      {t("Actions")}
                    </th>
                  </tr>
                </thead>
                <tbody className="max-h-75 overflow-y-auto">
                  {leads.map((lead, index) => (
                    <tr
                      key={lead.id + index}
                      className="group/row border-b text-sm border-[#E2E8F0] hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <Tooltip text={lead.copilotName || t("Unknown Copilot")}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`/dashboard/copilots#${lead.copilotName?.replace(" ", "-") || "unknown-copilot"}`}
                              className="font-semibold whitespace-nowrap text-sm text-[#0F172A]"
                            >
                              {lead.copilotName || t("Unknown Copilot")}
                            </a>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <Tooltip text={lead.companyName}>
                            <div className="line-clamp-2 max-w-48 text-sm text-[#0F172A]">
                              {lead.companyName}
                            </div>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-6 py-5  ">
                        <div className=" text-gray-400 hover:text-blue-500  gap-2 hover:bg-blue-50 rounded-lg transition-colors inline-flex items-center ">
                          {lead.address ? (
                            <Tooltip text={lead.address}>
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lead.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="line-clamp-2 max-w-48 text-sm text-[#0F172A]"
                              >
                                {lead.address}
                              </a>
                            </Tooltip>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5 ">
                        <div className="flex items-center gap-3">
                          <Tooltip text={lead?.website}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={normalizeUrl(lead.website || "#")}
                              className="line-clamp-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
                            >
                              {lead.website}
                            </a>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-6 py-5 relative">
                        <a
                          href={`mailto:${lead.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-500 hover:text-blue-600 group transition-colors"
                        >
                          <Tooltip text={lead.email}>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`mailto:${lead.email}`}
                              className="line-clamp-2 underline decoration-blue-200 underline-offset-4 transition-colors group-hover:decoration-blue-400"
                            >
                              {lead.email}
                            </a>
                          </Tooltip>
                        </a>
                      </td>

                      <td className="px-6 py-5  text-gray-600">
                        <div className="flex items-center gap-2 group relative ">
                          {lead.phone ? (
                            <>
                              <Tooltip text={lead.phone}>
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`https://wa.me/${lead.phone.replace("+", "")}`}
                                  className="whitespace-nowrap text-sm text-[#0F172A]"
                                >
                                  {lead.phone}
                                </a>
                              </Tooltip>
                            </>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-5  text-gray-600">
                        <div className="flex items-center gap-2">
                          {lead.sourceQuery ? (
                            <>
                              <Tooltip text={lead.sourceQuery}>
                                <a
                                  href={`/dashboard/target-audiences#${lead.sourceQuery.replace(" ", "-")}`}
                                  className="whitespace-nowrap text-sm text-[#0F172A]"
                                >
                                  {lead.sourceQuery}
                                </a>
                              </Tooltip>
                            </>
                          ) : (
                            <span className="text-gray-500">-</span>
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <Tooltip
                            text={
                              lead.sentAt
                                ? formatDateTime(lead.sentAt)
                                : t("Unknown")
                            }
                          >
                            <div className="whitespace-nowrap text-sm text-[#0F172A]">
                              {lead.sentAt
                                ? formatDateTime(lead.sentAt)
                                : t("Unknown")}
                            </div>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-6 py-5 relative">
                        <div
                          className=" text-gray-400   gap-2  rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer"
                          onClick={() => handleShowPreview(lead)}
                        >
                          <div
                            className="inline-flex items-center justify-center rounded-md px-3 py-2 text-[12px] font-medium capitalize transition-colors hover:brightness-95"
                            style={{
                              backgroundColor: "#F5F7FF",
                              color: "#2563EB",
                            }}
                          >
                            {t("show")}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 sticky right-22 z-20 bg-white group-hover/row:bg-gray-50 shadow-[inset_0_-1px_0_#E2E8F0] align-middle transition-colors">
                        <div className="flex items-center gap-2 ">
                          <Tooltip
                            text={
                              lead.suppressed
                                ? t("Excluded")
                                : t(
                                    lead.status.charAt(0).toUpperCase() +
                                      lead.status.slice(1) || "Sent",
                                  )
                            }
                          >
                            <LeadStatus
                              status={
                                lead.suppressed
                                  ? "suppressed"
                                  : lead.status || "sent"
                              }
                            />
                          </Tooltip>
                        </div>
                      </td>
                      <td className="px-5 py-5 sticky w-22 min-w-22 align-middle right-0 z-20 bg-white group-hover/row:bg-gray-50 shadow-[inset_0_-1px_0_#E2E8F0] transition-colors">
                        <div className="flex items-center justify-center">
                          <LeadMenu
                            lead={lead}
                            onDeleted={handleDeleteLead}
                            onSuppressionChange={handleSuppressionChange}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>

          {meta && (
            <Pagination
              meta={meta}
              currentPage={page}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          )}
        </>
      )}

      {activeLeadId && (
        <EmailPreviewCard
          subject={
            templateData?.subject ||
            (templateData === null ? t("Loading...") : undefined)
          }
          body={
            templateData?.body ||
            (templateData === null ? t("Loading...") : undefined)
          }
          onClose={handleClosePreview}
        />
      )}

      <CopilotsPopup
        isOpen={isSidebarOpen}
        onClose={(selectedId, selectedName) => {
          setIsSidebarOpen(false);
          if (selectedId) {
            setCopilotId(selectedId);
            setPage(1);
          }
          if (selectedName) {
            setCopilotName(selectedName + " Copilot");
          }
        }}
      />
    </div>
  );
}

export default function LeadsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-8 px-4 w-full mx-auto flex items-center justify-center min-h-100">
          <div className="flex items-center gap-3 text-gray-500">
            <Loader2 size={20} className="animate-spin" />
            <span>Loading...</span>
          </div>
        </div>
      }
    >
      <LeadsPageContent />
    </Suspense>
  );
}
