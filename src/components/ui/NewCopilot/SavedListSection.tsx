"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type SavedListSectionProps = {
  /** English title, translated here (e.g. "Saved templates"). */
  title: string;
  count: number;
  /** Name of the currently selected item, shown in the header. */
  selectedLabel?: string | null;
  search: string;
  onSearchChange: (value: string) => void;
  /** English placeholder, translated here. */
  searchPlaceholder: string;
  /** True when a search is active and nothing matches. */
  noMatches: boolean;
  children: ReactNode;
};

/**
 * Collapsible block for the saved items list in the copilot wizard
 * (target audiences in step 3, templates in step 4). Collapsed by default so
 * "Save & Continue" stays in view; when open it shows a search field above
 * the list.
 */
export default function SavedListSection({
  title,
  count,
  selectedLabel,
  search,
  onSearchChange,
  searchPlaceholder,
  noMatches,
  children,
}: SavedListSectionProps) {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-8 pb-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="flex flex-wrap sm:flex-nowrap items-center gap-x-2 gap-y-1 min-w-0">
          <span className="text-sm font-semibold text-gray-900 shrink-0">
            {t(title)}
          </span>
          <span className="text-xs font-medium text-gray-500 bg-gray-100 rounded-md px-2 py-0.5 shrink-0">
            {count}
          </span>
          {selectedLabel && (
            <span className="text-xs text-gray-500 truncate basis-full sm:basis-auto">
              <span className="hidden sm:inline">· </span>
              {t("Selected:")}{" "}
              <span className="font-medium text-gray-700">{selectedLabel}</span>
            </span>
          )}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-4">
          {count > 0 && (
            <div className="relative mb-4">
              <Search
                size={14}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                autoFocus
                className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
                placeholder={t(searchPlaceholder)}
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          )}
          {noMatches ? (
            <div className="text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-lg p-6 text-center">
              {t('No matches for "{query}"', { query: search.trim() })}
            </div>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
}
