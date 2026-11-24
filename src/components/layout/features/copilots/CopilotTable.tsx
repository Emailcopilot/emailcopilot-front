import React from "react";
import {
  CheckCircle2,
  X,
  Clock,
  MoreVertical,
  CircleAlert,
} from "lucide-react";
import CopilotMenu from "@/components/ui/copilots/CopilotMenu";
import { useRouter } from "next/navigation";
import { useCopilotStore, type Step } from "../../../../store/copilotStore";
import { handleCardProp } from "@/components/ui/copilots/CopilotCard";
import CopilotStatus from "@/components/ui/CopilotStatus";
import type { CopilotStatusType } from "@/store/copilotStore";
import { createPortal } from "react-dom";
import { useI18n } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Types — trimmed to the fields this component actually reads.       */
/* Extend these (or pass your real types) as your API grows.          */
/* ------------------------------------------------------------------ */

export interface EmailAccountRef {
  id: number;
  email: string;
  sendName?: string;
  [key: string]: unknown;
}

export interface TargetAudienceRef {
  id: number;
  name: string;
  resultsCount?: number;
  [key: string]: unknown;
}

export interface EmailTemplateRef {
  id: number;
  name: string;
  subject?: string;
  [key: string]: unknown;
}

export interface FlightScheduleRef {
  id: number;
  name: string;
  sendLimit: number;
  sendLimitActive?: boolean;
  [key: string]: unknown;
}

export interface Copilot {
  id: number;
  name: string;
  description: string;
  status: CopilotStatusType;
  createdAt: string;
  updatedAt: string;
  userId: number;
  emailAccountId: number | null;
  emailAccount?: EmailAccountRef | null;
  targetAudienceId: number | null;
  targetAudience?: TargetAudienceRef | null;
  templateId: number | null;
  template?: EmailTemplateRef | null;
  flightScheduleId: number | null;
  flightSchedule?: FlightScheduleRef | null;
  emailsSent: number;
  emailsOpened: number;
  emailsReplied: number;
  lastRunAt: string | null;
  lastJobId: string | null;
  lastError: string | null;
}

/* ------------------------------------------------------------------ */
/* Workflow step model                                                 */
/* ------------------------------------------------------------------ */

export type WorkflowStepState = "done" | "blocked" | "pending";

export interface WorkflowStep {
  key: string;
  title: string;
  state: WorkflowStepState;
  label: string;
}

export interface OverallStatus {
  label: string;
  variant: "active" | "running" | "completed" | "paused" | "draft" | "archived";
}

export function defaultComputeSteps(copilot: Copilot): WorkflowStep[] {
  return [
    {
      key: "setup",
      title: "Setup",
      state: copilot.name ? "done" : "blocked",
      label: copilot.name ? "Configured" : "Incomplete",
    },
    {
      key: "email-account",
      title: "Email Account",
      state: copilot.emailAccountId ? "done" : "blocked",
      label: copilot.emailAccountId ? "Selected" : "Not selected",
    },
    {
      key: "target-audience",
      title: "Target Audience",
      state: copilot.targetAudienceId ? "done" : "blocked",
      label: copilot.targetAudienceId ? "Selected" : "Not selected",
    },
    {
      key: "email-templates",
      title: "Email Templates",
      state: copilot.templateId ? "done" : "blocked",
      label: copilot.templateId ? "Selected" : "Not selected",
    },
    {
      key: "flight-schedule",
      title: "Flight Schedule",
      state: copilot.flightScheduleId ? "done" : "blocked",
      label: copilot.flightScheduleId ? "Selected" : "Not selected",
    },
    {
      key: "take-off",
      title: "Take-off",
      ...(() => {
        switch (copilot.status) {
          case "completed":
            return { state: "done" as const, label: "Completed" };
          case "active":
            return { state: "done" as const, label: "Scheduled" };
          case "running":
            return { state: "done" as const, label: "In Flight" };

          case "paused":
            return { state: "blocked" as const, label: "Paused" };
          case "archived":
            return { state: "blocked" as const, label: "Archived" };
          case "draft":
            return { state: "pending" as const, label: "Draft" };
          default:
            return { state: "pending" as const, label: "Pending" };
        }
      })(),
    },
  ];
}

const displayedStatus: Record<string, string> = {
  active: "Scheduled",
  running: "In Flight",
  completed: "Completed",
  paused: "Paused",
  draft: "Draft",
  archived: "Archived",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-[12px] font-medium capitalize whitespace-nowrap ${handleCardProp(status).badgeClass}`}
    >
      {displayedStatus[status] || status}
    </span>
  );
}

function StepIcon({ state }: { state: WorkflowStepState }) {
  if (state === "done")
    return <CheckCircle2 size={13} className="text-emerald-500" />;
  if (state === "blocked")
    return <CircleAlert size={13} className="text-rose-500" />;
  return <Clock size={13} className="text-amber-500" />;
}

/** Short labels so all six steps fit on one row inside the table card. */
const SHORT_STEP_TITLES: Record<string, string> = {
  "Email Account": "Account",
  "Target Audience": "Audience",
  "Email Templates": "Template",
  "Flight Schedule": "Schedule",
};

function StepColumn({
  step,
  index,
  copilotId,
  readOnly = false,
}: {
  step: WorkflowStep;
  index: number;
  copilotId: string | number;
  readOnly?: boolean;
}) {
  const router = useRouter();
  const { t } = useI18n();
  const { setStep } = useCopilotStore();
  return (
    <div
      onClick={() => {
        const targetStep = (index + 1) as Step;
        setStep(targetStep);
        const demoSuffix = readOnly ? `&step=${targetStep}&demo=true` : "";
        router.push(`/dashboard/copilots/new?edit=${copilotId}${demoSuffix}`);
      }}
      title={`${index + 1}. ${t(step.title)}: ${t(step.label)}`}
      className="flex cursor-pointer items-center gap-1.5 group hover:bg-primary/5 border border-gray-100 hover:border-primary rounded-lg px-2 py-1"
    >
      <StepIcon state={step.state} />
      <span className="text-[12px] font-medium group-hover:text-primary text-gray-700 whitespace-nowrap">
        {t(SHORT_STEP_TITLES[step.title] ?? step.title)}
      </span>
    </div>
  );
}

function WorkflowStepper({
  steps,
  copilotId,
  readOnly = false,
}: {
  steps: WorkflowStep[];
  copilotId: string | number;
  readOnly?: boolean;
}) {
  return (
    // One row: the icon shows each step's state, details are in the tooltip.
    <div className="flex items-center gap-1">
      {steps.map((step, index) => (
        <StepColumn
          key={step.key}
          step={step}
          index={index}
          copilotId={copilotId}
          readOnly={readOnly}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export interface CopilotTableProps {
  copilots: Copilot[];
  /** Override the default per-step logic (e.g. to match your real business rules). */
  computeSteps?: (copilot: Copilot) => WorkflowStep[];
  /** Override the default overall-status badge logic. */
  computeStatus?: (copilot: Copilot) => OverallStatus;
  /** Called when the row's actions (···) button is clicked. */
  onActionsClick?: (copilot: Copilot) => void;
  /** Called when menu actions require a refresh (e.g., delete, archive, status change). */
  onRefresh?: () => void;
  readOnly?: boolean;
  /** Ids of the checked rows. When given together with onSelectionChange, a checkbox column is shown. */
  selectedIds?: Set<number>;
  onSelectionChange?: (ids: Set<number>) => void;
  className?: string;
}

function CopilotTable({
  copilots = [],
  computeSteps = defaultComputeSteps,

  onActionsClick,
  onRefresh,
  readOnly = false,
  selectedIds,
  onSelectionChange,
  className = "",
}: CopilotTableProps) {
  const { t } = useI18n();
  const selectable = !!selectedIds && !!onSelectionChange;
  // Archived copilots can't be archived again, so they can't be selected.
  const selectableIds = copilots
    .filter((c) => c.status !== "archived")
    .map((c) => c.id);
  const allSelected =
    selectable &&
    selectableIds.length > 0 &&
    selectableIds.every((id) => selectedIds.has(id));
  const someSelected =
    selectable && !allSelected && selectableIds.some((id) => selectedIds.has(id));
  const toggleAll = () => {
    if (!selectable) return;
    const next = new Set(selectedIds);
    if (allSelected) selectableIds.forEach((id) => next.delete(id));
    else selectableIds.forEach((id) => next.add(id));
    onSelectionChange(next);
  };
  const toggleOne = (id: number) => {
    if (!selectable) return;
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onSelectionChange(next);
  };
  const [menuCopilotId, setMenuCopilotId] = React.useState<number | null>(null);
  const [menuPos, setMenuPos] = React.useState<{
    top: number;
    right: number;
  } | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (!menuCopilotId) return;
    const close = () => {
      setMenuCopilotId(null);
      setMenuPos(null);
    };
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [menuCopilotId]);

  if (!copilots || copilots.length === 0) {
    return (
      <div className="w-full relative rounded-lg border border-[#E2E8F0] bg-white">
        <div className="py-16 text-center text-sm text-gray-400">
          {t("No copilots yet.")}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden xl:overflow-visible rounded-lg bg-white border border-[#E2E8F0] [@media(min-height:1081px)]:flex [@media(min-height:1081px)]:flex-1 [@media(min-height:1081px)]:flex-col ${className}`}
    >
      {/* On wide screens (xl+) the page itself scrolls, so the header row can stick to the top of the screen.
          On smaller screens the table keeps its own scroll area (needed for horizontal scrolling). */}
      <div className="overflow-x-auto max-xl:max-h-[calc(100dvh-270px)] xl:overflow-visible">
        <table className="w-full min-w-225 border-collapse ">
          <thead>
            {/* Content columns shrink to fit (w-px); the four empty w-1/4 spacer columns share the leftover width,
                so the gaps between Copilots, Workflow status, Sent, Status and Actions are equal. */}
            <tr className="border-b border-[#E2E8F0] bg-white">
              {selectable && (
                <th className="sticky top-0 z-40 w-px rounded-tl-lg bg-white shadow-[inset_0_-1px_0_#E2E8F0] py-2.5 pl-5 pr-0 text-left">
                  <input
                    type="checkbox"
                    aria-label={t("Select all copilots on this page")}
                    checked={allSelected}
                    ref={(el) => {
                      if (el) el.indeterminate = someSelected;
                    }}
                    onChange={toggleAll}
                    disabled={selectableIds.length === 0}
                    className="size-4 cursor-pointer accent-primary align-middle disabled:cursor-not-allowed"
                  />
                </th>
              )}
              <th className="sticky top-0 z-40 w-px rounded-tl-lg bg-white shadow-[inset_0_-1px_0_#E2E8F0] whitespace-nowrap px-5 py-2.5 text-left font-normal text-xs leading-5 text-[#94A3B8]">
                {t("Copilots")}
              </th>
              <th aria-hidden className="sticky top-0 z-40 w-1/4 bg-white p-0 shadow-[inset_0_-1px_0_#E2E8F0]" />
              <th className="sticky top-0 z-40 w-px bg-white shadow-[inset_0_-1px_0_#E2E8F0] whitespace-nowrap px-5 py-2.5 text-left font-normal text-xs leading-5 text-[#94A3B8]">
                {t("Workflow status")}
              </th>
              <th aria-hidden className="sticky top-0 z-40 w-1/4 bg-white p-0 shadow-[inset_0_-1px_0_#E2E8F0]" />
              <th className="sticky top-0 z-40 w-px bg-white shadow-[inset_0_-1px_0_#E2E8F0] whitespace-nowrap px-5 py-2.5 text-left font-normal text-xs leading-5 text-[#94A3B8]">
                {t("Sent")}
              </th>
              <th aria-hidden className="sticky top-0 z-40 w-1/4 bg-white p-0 shadow-[inset_0_-1px_0_#E2E8F0]" />
              <th className="w-px whitespace-nowrap sticky right-22 top-0 z-50 bg-white shadow-[inset_0_-1px_0_#E2E8F0] px-5 py-2.5 text-left font-normal text-xs leading-5 text-[#94A3B8]">
                {t("Status")}
              </th>
              <th aria-hidden className="sticky top-0 z-40 w-1/4 bg-white p-0 shadow-[inset_0_-1px_0_#E2E8F0]" />
              <th className="sticky right-0 top-0 z-50 rounded-tr-lg bg-white shadow-[inset_0_-1px_0_#E2E8F0] w-22 min-w-22 px-5 py-2.5 text-center font-normal text-xs leading-5 text-[#94A3B8]">
                {readOnly ? null : t("Actions")}
              </th>
            </tr>
          </thead>
          <tbody className=" relative">
            {copilots.map((copilot, rowIndex) => {
              const steps = computeSteps(copilot);

              const sendLimit = copilot.flightSchedule?.sendLimit;

              return (
                <tr
                  key={copilot.id}
                  onClick={() => {
                    if (readOnly) useCopilotStore.getState().setStep(1);
                    router.push(
                      `/dashboard/copilots/new?edit=${copilot.id}${readOnly ? "&step=1&demo=true" : ""}`,
                    );
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target === e.currentTarget) {
                      if (readOnly) useCopilotStore.getState().setStep(1);
                      router.push(
                        `/dashboard/copilots/new?edit=${copilot.id}${readOnly ? "&step=1&demo=true" : ""}`,
                      );
                    }
                  }}
                  tabIndex={0}
                  className="group/row cursor-pointer border-b border-[#E2E8F0] align-top last:border-b-0 hover:bg-gray-50 transition-colors focus-visible:outline-2 focus-visible:outline-primary/40"
                >
                  {selectable && (
                    <td
                      className="w-px py-4 pl-5 pr-0 align-middle"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        aria-label={`Select ${copilot.name}`}
                        checked={selectedIds.has(copilot.id)}
                        onChange={() => toggleOne(copilot.id)}
                        disabled={copilot.status === "archived"}
                        title={
                          copilot.status === "archived"
                            ? t("Already archived")
                            : undefined
                        }
                        className="size-4 cursor-pointer accent-primary align-middle disabled:cursor-not-allowed disabled:opacity-40"
                      />
                    </td>
                  )}
                  <td className="w-px px-5 py-4 align-middle">
                    <div className="w-max max-w-55">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        {copilot.name}
                      </p>
                      {copilot.description && (
                        <p className="mt-0.5 line-clamp-2 font-light text-xs text-[#59637C]">
                          {copilot.description}
                        </p>
                      )}
                      {copilot.emailAccount?.email && (
                        <p className="mt-1 text-[12px] text-blue-500">
                          {copilot.emailAccount.email}
                        </p>
                      )}
                    </div>
                  </td>
                  <td aria-hidden className="w-1/4 p-0" />
                  <td
                    className="w-px whitespace-nowrap px-5 py-4 align-middle"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div data-tour={rowIndex === 0 ? "copilots-workflow" : undefined}>
                      <WorkflowStepper
                        steps={steps}
                        copilotId={copilot.id}
                        readOnly={readOnly}
                      />
                    </div>
                  </td>
                  <td aria-hidden className="w-1/4 p-0" />
                  <td className="w-px whitespace-nowrap px-5 py-4 text-sm align-middle text-[#0F172A]">
                    {copilot.emailsSent}
                  </td>
                  <td aria-hidden className="w-1/4 p-0" />
                  <td className="w-px whitespace-nowrap sticky right-22 bg-white group-hover/row:bg-gray-50 z-40 shadow-[inset_0_-1px_0_#E2E8F0] [tr:last-child>&]:shadow-none px-5 py-4 align-middle">
                    {/* <StatusBadge status={copilot.status} /> */}
                    <CopilotStatus status={copilot.status} />
                  </td>
                  <td aria-hidden className="w-1/4 p-0" />
                  <td
                    className="sticky right-0 z-40 w-22 min-w-22 bg-white group-hover/row:bg-gray-50 shadow-[inset_0_-1px_0_#E2E8F0] [tr:last-child>&]:shadow-none px-5 py-4 text-center align-middle"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {!readOnly && (
                      <>
                        <button
                          type="button"
                          onClick={(e) => {
                            if (menuCopilotId === copilot.id) {
                              setMenuCopilotId(null);
                              setMenuPos(null);
                              return;
                            }
                            const r = e.currentTarget.getBoundingClientRect();
                            const MENU_H = 216;
                            const top =
                              r.bottom + 6 + MENU_H > window.innerHeight
                                ? Math.max(8, r.top - MENU_H - 6)
                                : r.bottom + 6;
                            setMenuPos({
                              top,
                              right: Math.max(8, window.innerWidth - r.right),
                            });
                            setMenuCopilotId(copilot.id);
                          }}
                          className="text-gray-300 transition-colors hover:text-gray-500"
                          aria-label="Copilot actions"
                        >
                          {menuCopilotId === copilot.id ? (
                            <X size={18} />
                          ) : (
                            <MoreVertical size={18} />
                          )}
                        </button>
                        {menuCopilotId === copilot.id &&
                          menuPos &&
                          createPortal(
                            <div
                              className="fixed z-[100]"
                              style={{ top: menuPos.top, right: menuPos.right }}
                            >
                              <CopilotMenu
                                copilot={copilot}
                                onRefresh={onRefresh || (() => {})}
                                onClose={() => {
                                  setMenuCopilotId(null);
                                  setMenuPos(null);
                                }}
                              />
                            </div>,
                            document.body,
                          )}
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CopilotTable;
