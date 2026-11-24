"use client";

import { Search, Plus, Calendar } from "lucide-react";
import FlightScheduleMenu from "@/components/ui/flightSchedule/FlightScheduleMenu";
import type { Schedule } from "@/components/ui/flightSchedule/FlightScheduleCard";
import { formatAllDayAvailability } from "@/lib/sending-schedule";
import { useI18n } from "@/lib/i18n";

export interface FlightScheduleRow extends Schedule {
  usedBy: number;
}

interface FlightScheduleTableProps {
  schedules: FlightScheduleRow[];
  filteredCount: number;
  search: string;
  onSearchChange: (value: string) => void;
  onEdit: (schedule: Schedule) => void;
  onDelete: (schedule: Schedule) => void;
  onDuplicate: (schedule: Schedule) => void;
  onCreateNew: () => void;
  loading?: boolean;
  readOnly?: boolean;
}

const TABLE_HEADERS = [
  "Flight schedule name",
  "Days",
  "Time",
  "Timezone",
  "Used by",
  "Status",
  "Actions",
];

const COLUMNS = "1.4fr 0.9fr 1fr 1.2fr 0.9fr 0.8fr 0.4fr";

type Translate = (text: string, vars?: Record<string, string | number>) => string;

const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/** Compact day ranges: [1-5] → "Mon-Fri", [6,7] → "Sat-Sun", [1-7] → "Mon-Sun" */
function formatDays(days: number[], t: Translate): string {
  if (!Array.isArray(days) || days.length === 0) return "—";
  const sorted = [...days].sort((a, b) => a - b);
  const day = (n: number) => t(DAY_LABELS[n - 1]);
  if (sorted.length === 7) return `${day(1)}-${day(7)}`;

  const runs: string[] = [];
  let start = sorted[0];
  let prev = sorted[0];

  for (const d of sorted.slice(1)) {
    if (d === prev + 1) {
      prev = d;
      continue;
    }
    runs.push(start === prev ? day(start) : `${day(start)}-${day(prev)}`);
    start = prev = d;
  }
  runs.push(start === prev ? day(start) : `${day(start)}-${day(prev)}`);
  return runs.join(", ");
}

function formatTime(schedule: Schedule, t: Translate): string {
  if (!schedule.sendingHoursActive)
    return t(formatAllDayAvailability(schedule.activeDays));
  if (!schedule.sendingHours) return "—";
  return `${schedule.sendingHours.start} - ${schedule.sendingHours.end}`;
}

/**
 * Schedules have no status of their own: show whether any copilot uses it.
 * Same badge shape as the copilot/lead status badges.
 */
function ScheduleStatus({
  usedBy,
  isSmall = false,
}: {
  usedBy: number;
  isSmall?: boolean;
}) {
  const { t } = useI18n();
  const inUse = usedBy > 0;
  return (
    <span
      className={`inline-flex w-fit items-center rounded-md font-medium whitespace-nowrap ${
        isSmall ? "text-[10px] px-2 py-1" : "text-[12px] px-3 py-2"
      }`}
      style={
        inUse
          ? { backgroundColor: "#E3FCEF", color: "#1D8A68" }
          : { backgroundColor: "#F1F5F9", color: "#64748B" }
      }
    >
      {inUse ? t("In use") : t("Not in use")}
    </span>
  );
}

function formatUsedBy(count: number, t: Translate): string {
  return count === 1 ? t("1 copilot") : t("{count} copilots", { count });
}

function ScheduleRow({
  schedule,
  onEdit,
  onDelete,
  onDuplicate,
  readOnly = false,
}: {
  schedule: FlightScheduleRow;
  onEdit: (schedule: Schedule) => void;
  onDelete: (schedule: Schedule) => void;
  onDuplicate: (schedule: Schedule) => void;
  readOnly?: boolean;
}) {
  const { t } = useI18n();
  const actions = (
    <FlightScheduleMenu
      onEdit={() => onEdit(schedule)}
      onDelete={() => onDelete(schedule)}
      onDuplicate={() => onDuplicate(schedule)}
    />
  );

  return (
    <>
      {/* Desktop Row */}
      <div
        className="hidden lg:grid items-center px-5 py-6 border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors"
        style={{ gridTemplateColumns: COLUMNS }}
      >
        <span className="font-semibold truncate pr-4 text-sm text-[#0F172A]">
          {schedule.name || "—"}
        </span>

        <span className="text-sm text-[#0F172A]">
          {formatDays(schedule.activeDays, t)}
        </span>

        <span className="text-sm text-[#0F172A]">{formatTime(schedule, t)}</span>

        <span className="min-w-0 truncate text-sm text-[#0F172A]">
          {schedule.timezone || "—"}
        </span>

        <span className="text-sm text-[#0F172A]">
          {formatUsedBy(schedule.usedBy, t)}
        </span>

        <span>
          <ScheduleStatus usedBy={schedule.usedBy} />
        </span>

        <div className="flex items-center">{!readOnly && actions}</div>
      </div>

      {/* Mobile Row */}
      <div className="lg:hidden px-4 py-5 border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold truncate text-sm text-[#0F172A]">
                {schedule.name || "—"}
              </span>
              <ScheduleStatus usedBy={schedule.usedBy} isSmall />
            </div>
            <div className="truncate text-xs text-[#59637C]">
              {formatDays(schedule.activeDays, t)} · {formatTime(schedule, t)}
            </div>
            <div className="mt-0.5 text-xs text-[#59637C]">
              {schedule.timezone || "—"} · {formatUsedBy(schedule.usedBy, t)}
            </div>
          </div>
          {!readOnly && <div className="relative shrink-0">{actions}</div>}
        </div>
      </div>
    </>
  );
}

function EmptyState({
  onCreateNew,
  isFiltered,
}: {
  onCreateNew: () => void;
  isFiltered: boolean;
}) {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Calendar
          size={32}
          className="sm:hidden"
          style={{ color: "var(--color-primary)" }}
        />
        <Calendar
          size={40}
          className="hidden sm:block"
          style={{ color: "var(--color-primary)" }}
        />
      </div>
      <h3 className="font-bold mb-2 text-center text-lg leading-7 text-[#0F172A]">
        {isFiltered
          ? t("No Flight Schedules Found")
          : t("No Flight Schedules Yet")}
      </h3>
      <p className="mb-6 text-center text-sm leading-5 font-light text-[#59637C]">
        {isFiltered
          ? t("Try adjusting your search or filters")
          : t("Create a flight schedule for easier access later")}
      </p>
      <button
        onClick={onCreateNew}
        className="inline-flex items-center gap-2 btn-cta text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
      >
        <Plus size={15} />
        {t("Create New Flight Schedule")}
      </button>
    </div>
  );
}

export default function FlightScheduleTable({
  schedules,
  filteredCount,
  search,
  onSearchChange,
  onEdit,
  onDelete,
  onDuplicate,
  onCreateNew,
  loading = false,
  readOnly = false,
}: FlightScheduleTableProps) {
  const { t } = useI18n();
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg">
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-4 border-b border-[#E2E8F0]">
        <h2 className="font-bold text-lg leading-6 text-[#0F172A]">
          {t("Your Flight Schedules ({count})", { count: filteredCount })}
        </h2>
        <div className="relative w-full sm:w-80">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#59637C]"
          />
          <input
            type="text"
            placeholder={t("Search flight schedule...")}
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label={t("Search flight schedules by name")}
            className="w-full h-10 border border-[#E2E8F0] rounded-lg pl-10 pr-4 text-sm bg-white focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
            style={{ color: "#59637C" }}
          />
        </div>
      </div>

      {/* Desktop Table Header */}
      <div
        className="hidden lg:grid sticky top-0 z-30 bg-white px-5 py-3 border-b border-[#E2E8F0]"
        style={{ gridTemplateColumns: COLUMNS }}
      >
        {TABLE_HEADERS.map((col) => (
          <span
            key={col}
            className="font-normal text-xs leading-5 text-[#94A3B8]"
          >
            {readOnly && col === "Actions" ? null : t(col)}
          </span>
        ))}
      </div>

      {/* Rows / Empty / Loading */}
      {loading ? (
        <div className="flex items-center justify-center py-16 text-sm text-[#59637C]">
          {t("Loading flight schedules…")}
        </div>
      ) : filteredCount === 0 ? (
        <EmptyState
          onCreateNew={onCreateNew}
          isFiltered={schedules.length > 0}
        />
      ) : (
        <div>
          {schedules.map((schedule) => (
            <ScheduleRow
              key={schedule.id}
              schedule={schedule}
              onEdit={onEdit}
              onDelete={onDelete}
              onDuplicate={onDuplicate}
              readOnly={readOnly}
            />
          ))}
        </div>
      )}
    </div>
  );
}
