"use client";

import { LucideIcon, ArrowUp, ArrowDown, MoveRight } from "lucide-react";
import Link from "next/link";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: number | string; // e.g. 12, -5 — percentage change or string ratio
  comparisonLabel?: string; // e.g. "vs previous period"
  /** Metric isn't live yet: card is greyed out and shows "Coming soon". */
  comingSoon?: boolean;
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  change,
  comparisonLabel = "",
  comingSoon = false,
}: StatCardProps) {
  if (comingSoon) {
    return (
      <div
        className="bg-gray-50 border border-gray-200 rounded-lg p-5 w-full"
        title="This metric isn't live yet"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-100 shrink-0">
            <Icon size={22} className="text-gray-400" strokeWidth={2} />
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-400">{label}</div>
            <div className="text-lg font-bold text-gray-300 mt-1">–</div>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-6 text-xs">
          <span className="rounded-md bg-gray-100 px-2 py-1 font-medium text-gray-500">
            Coming soon
          </span>
        </div>
      </div>
    );
  }

  const isNumericChange = typeof change === "number";
  const isPositive = isNumericChange ? (change as number) >= 0 : true;
  const TrendIcon = isPositive ? ArrowUp : ArrowDown;
  const trendColor = isPositive ? "text-emerald-500" : "text-red-500";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 w-full">
      <div className="flex items-center gap-4">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-md ${label === "Replies" ? "bg-success/5" : "bg-primary/5"} shrink-0`}
        >
          <Icon
            size={22}
            className={`${label === "Replies" ? "text-success" : "text-primary"}`}
            strokeWidth={2}
          />
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-900">{label}</div>
          <div className="text-lg font-bold text-gray-900 mt-1">{value}</div>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-6 text-xs">
        {label !== "Copilots" ? (
          <>
            <TrendIcon size={14} className={trendColor} strokeWidth={2.5} />
            <span className={`font-semibold ${trendColor}`}>
              {Math.abs(change as number)}%
            </span>
            {comparisonLabel && (
              <span className="text-gray-500">{comparisonLabel}</span>
            )}
          </>
        ) : (
          <Link
            href="/dashboard/copilots"
            className="text-primary  flex w-full text-sm items-center justify-end gap-2 "
          >
            View All
            <MoveRight size={14} />
          </Link>
        )}
      </div>
    </div>
  );
}
