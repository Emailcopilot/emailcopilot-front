"use client";

import { useState, useEffect } from "react";
import { Archive, Loader2, Plus, Send, X } from "lucide-react";
import { toast } from "sonner";
import { copilotsApi } from "@/lib/api";
import { useRouter } from "next/navigation";
import CopilotTable, {
  type Copilot,
} from "@/components/layout/features/copilots/CopilotTable";
import CopilotCardsList from "@/components/layout/features/copilots/CopilotCardsList";
import CopilotToolbar from "@/components/ui/copilots/CopilotToolBar";
import TemplatesPagination from "@/components/ui/templates/Pagination";
import { useRowsPerPage } from "@/lib/hooks";
import DashboardHeader from "@/components/layout/DashboardHeader";
import CopilotLimitDialog from "@/components/ui/limits/CopilotLimitDialog";
import { copilotQuota, currentPlanId, higherTiers } from "@/lib/limits";
import { useBilling, billingKeys } from "@/lib/useBilling";
import { useQueryClient } from "@tanstack/react-query";
import { sortCopilotsArchivedLast } from "@/lib/sort-copilots";

export default function CopilotsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { limits, plans, refetchLimits } = useBilling();
  const quota = copilotQuota(limits);
  const [limitDialogOpen, setLimitDialogOpen] = useState(false);
  const [copilots, setCopilots] = useState<Copilot[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  // Bulk selection (list view): check rows, then archive them in one go.
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());
  const [confirmArchive, setConfirmArchive] = useState(false);
  const [archiving, setArchiving] = useState(false);

  // Pagination state — same responsive rows-per-page as the templates table
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = useRowsPerPage(20);

  useEffect(() => {
    fetchCopilots();
  }, []);

  // Deep link from the wizard's own guard (/dashboard/copilots?limit=copilots).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("limit") !== "copilots") return;
    setLimitDialogOpen(true);
    window.history.replaceState(null, "", "/dashboard/copilots");
  }, []);

  async function fetchCopilots() {
    try {
      setLoading(true);
      const res = await copilotsApi.getAll();
      console.log("Fetched copilots from copilot page :", res.data);
      setCopilots(res.data);
      // Creating, deleting or archiving a copilot changes the plan usage.
      queryClient.invalidateQueries({ queryKey: billingKeys.limits() });
      if (res.data.length === 0) {
        router.push("/dashboard/copilots/new");
      }
    } catch {
      setCopilots([]);
    } finally {
      setLoading(false);
    }
  }

  const planId = currentPlanId(limits);
  const tiers = higherTiers(plans, planId);

  async function handleCreate() {
    if (quota?.atLimit) {
      setLimitDialogOpen(true);
      return;
    }

    // Re-check right before entering the wizard so a stale cached count (e.g.
    // right after creating the last allowed copilot) never lets the user fill
    // the whole wizard only to fail on save. Fail open if the check fails.
    try {
      const fresh = await refetchLimits();
      if (copilotQuota(fresh.data)?.atLimit) {
        setLimitDialogOpen(true);
        return;
      }
    } catch {
      // Ignore and continue — the backend still enforces the limit.
    }

    router.push("/dashboard/copilots/new");
  }

  // Filter copilots based on status and search
  const filtered = copilots.filter((c) => {
    const matchesStatus =
      status === "all" || c.status.toLowerCase() === status.toLowerCase();
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Archive priority applies before pagination; keep newest-updated order within each group.
  const sorted = sortCopilotsArchivedLast(filtered, (a, b) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  // Calculate pagination
  const totalItems = sorted.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = sorted.slice(startIndex, endIndex);

  // Reset page when filters change, and when the viewport-derived page
  // size changes (otherwise a resize leaves a stale page offset)
  useEffect(() => {
    setCurrentPage(1);
  }, [status, search, perPage]);

  // Only rows you can see stay selected.
  useEffect(() => {
    setSelectedIds(new Set());
    setConfirmArchive(false);
  }, [status, search, safeCurrentPage, perPage, viewMode]);

  async function handleBulkArchive() {
    const ids = [...selectedIds];
    if (ids.length === 0) return;
    setArchiving(true);
    const results = await Promise.allSettled(
      ids.map((id) => copilotsApi.updateStatus(id, "archived")),
    );
    const failedIds = ids.filter((_, i) => results[i].status === "rejected");
    const archived = ids.length - failedIds.length;
    if (archived > 0)
      toast.success(
        `${archived} copilot${archived === 1 ? "" : "s"} archived.`,
      );
    if (failedIds.length > 0)
      toast.error(
        `${failedIds.length} copilot${failedIds.length === 1 ? "" : "s"} could not be archived. Please try again.`,
      );
    // Keep the ones that failed selected so the user can retry.
    setSelectedIds(new Set(failedIds));
    setConfirmArchive(false);
    setArchiving(false);
    fetchCopilots();
  }

  return (
    <div data-setup-feedback-copilots aria-busy={loading} className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 py-4 sm:py-5 [@media(min-height:1081px)]:flex [@media(min-height:1081px)]:min-h-full [@media(min-height:1081px)]:flex-col">
      {/* Header */}
      <DashboardHeader
        title="Copilots"
        description="Manage your automated outreach campaigns."
        actionLabel="Create New Copilot"
        onAction={handleCreate}
      />


      {/* Toolbar */}
      <div className="w-full p-2 border border-[#E2E8F0] mb-3 bg-white rounded-lg">
        <CopilotToolbar
          search={search}
          onSearchChange={setSearch}
          status={status}
          onStatusChange={setStatus}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      {/* Content */}
      <div className="min-h-0 [@media(min-height:1081px)]:flex [@media(min-height:1081px)]:flex-1 [@media(min-height:1081px)]:flex-col">
        {loading ? (
          <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
            Loading...
          </div>
        ) : copilots.length === 0 ? (
          <div className="  p-14 text-center ">
            <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Send size={22} className="text-gray-500" />
            </div>
            <h2 className="font-bold text-gray-900 mb-2">No copilots yet</h2>
            <p className="text-sm text-gray-500 mb-5 max-w-xs mx-auto">
              Build your first copilot to start sending personalized emails at
              scale.
            </p>
            <button
              type="button"
              onClick={handleCreate}
              className="inline-flex items-center gap-2 btn-cta text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              <Plus size={15} /> Create New Copilot
            </button>
          </div>
        ) : paginatedData.length === 0 ? (
          <div className="  p-10 text-center ">
            <p className="text-sm text-gray-500">
              No copilots match your filter.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          <div className="min-h-105 overflow-y-auto [@media(min-height:1081px)]:flex-1 [@media(max-height:1080px)]:max-h-[calc(100dvh-270px)]">
            <CopilotCardsList
              copilots={paginatedData}
              onRefresh={fetchCopilots}
            />
          </div>
        ) : (
          <>
            {/* Phones: the wide table doesn't fit, show cards instead. */}
            <div className="md:hidden">
              <CopilotCardsList
                copilots={paginatedData}
                onRefresh={fetchCopilots}
              />
            </div>
            <div className="hidden md:contents">
              <CopilotTable
                copilots={paginatedData}
                onRefresh={fetchCopilots}
                selectedIds={selectedIds}
                onSelectionChange={(ids) => {
                  setSelectedIds(ids);
                  setConfirmArchive(false);
                }}
              />
            </div>
          </>
        )}
      </div>

      {/* Pagination */}
      {totalItems > 0 && (
        <div className="mt-4">
          <TemplatesPagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}

      {/* Bulk action bar — floats at the bottom while rows are selected */}
      {viewMode === "list" && selectedIds.size > 0 && (
        <div
          role="toolbar"
          aria-label="Bulk actions"
          className="fixed bottom-6 left-1/2 z-60 flex -translate-x-1/2 items-center gap-3 rounded-xl bg-gray-900 py-2 pl-4 pr-2 text-sm text-white shadow-2xl"
        >
          {confirmArchive ? (
            <>
              <span className="whitespace-nowrap">
                Archive {selectedIds.size} copilot
                {selectedIds.size === 1 ? "" : "s"}? They stop sending.
              </span>
              <button
                type="button"
                onClick={() => setConfirmArchive(false)}
                disabled={archiving}
                className="rounded-lg px-3 py-1.5 font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleBulkArchive}
                disabled={archiving}
                className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 font-medium text-gray-900 transition-colors hover:bg-gray-100 disabled:opacity-70"
              >
                {archiving ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Archive size={14} />
                )}
                {archiving ? "Archiving..." : "Archive"}
              </button>
            </>
          ) : (
            <>
              <span className="whitespace-nowrap font-medium">
                {selectedIds.size} selected
              </span>
              <span className="h-5 w-px bg-white/20" />
              <button
                type="button"
                onClick={() => setConfirmArchive(true)}
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium transition-colors hover:bg-white/10"
              >
                <Archive size={14} /> Archive
              </button>
              <button
                type="button"
                onClick={() => setSelectedIds(new Set())}
                aria-label="Clear selection"
                className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
              </button>
            </>
          )}
        </div>
      )}

      <CopilotLimitDialog
        open={limitDialogOpen}
        currentPlanId={planId}
        used={quota?.used ?? 0}
        max={quota?.max ?? 0}
        tiers={tiers}
        onClose={() => setLimitDialogOpen(false)}
      />
    </div>
  );
}
