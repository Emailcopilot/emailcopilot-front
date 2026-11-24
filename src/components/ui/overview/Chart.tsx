"use client";

import React from "react";
import { useI18n } from "@/lib/i18n";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Lead } from "@/lib/types";
import { periodToDays } from "@/lib/helpers";

interface PerformanceDataPoint {
  date: string;
  emailsSent: number;
  replies: number;
}

export type DateRange = "Last 7 days" | "Last 14 days" | "Last 30 days";

interface PerformanceChartProps {
  leads?: Lead[];
  range?: DateRange;
  onRangeChange?: (range: DateRange) => void;
  /** Daily numbers aren't available yet: show a greyed-out placeholder. */
  comingSoon?: boolean;
}

interface CustomTooltipPayloadItem {
  dataKey?: string | number;
  name?: string;
  value?: number | string;
  color?: string;
  stroke?: string;
}

interface CustomTooltipProps {
  active?: boolean;
  label?: string | number;
  payload?: CustomTooltipPayloadItem[];
}

export function buildLeadChartItems(leads: Lead[], daysBack: number = 60) {
  const countsByDate: Record<string, { emailsSent: number; replies: number }> =
    {};

  console.log("Building lead chart items for leads:", leads);
  leads.forEach((lead) => {
    const rawDate = lead.sentAt || lead.createdAt;

    if (!rawDate) return;

    const dateObj = new Date(rawDate);

    if (isNaN(dateObj.getTime())) return;

    const key = dateObj.toISOString().split("T")[0];

    if (!countsByDate[key]) {
      countsByDate[key] = {
        emailsSent: 0,
        replies: 0,
      };
    }

    if (lead.status === "sent") {
      countsByDate[key].emailsSent += 1;
    }

    if (lead.status === "replied") {
      countsByDate[key].replies += 1;
    }
  });

  const result: {
    date: Date;
    emailsSent: number;
    replies: number;
  }[] = [];

  const today = new Date();
  today.setHours(12, 0, 0, 0);

  for (let i = daysBack; i >= 0; i--) {
    const d = new Date(today);

    d.setDate(d.getDate() - i);

    const key = d.toISOString().split("T")[0];

    result.push({
      date: d,
      emailsSent: countsByDate[key]?.emailsSent || 0,
      replies: countsByDate[key]?.replies || 0,
    });
  }

  return result;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-md text-sm">
      <div className="font-semibold text-gray-900 mb-1">{label}</div>
      {payload.map((p) => (
        <div key={p.dataKey} style={{ color: p.stroke ?? p.color }}>
          {p.name}: {p.value}
        </div>
      ))}
    </div>
  );
}

export default function PerformanceChart({
  leads = [],
  range: externalRange,
  onRangeChange,
  comingSoon = false,
}: PerformanceChartProps) {
  const { t, locale } = useI18n();
  const [internalRange, setInternalRange] =
    React.useState<DateRange>("Last 7 days");

  const activeRange = externalRange ?? internalRange;

  const handleRangeChange = (newRange: DateRange) => {
    if (onRangeChange) {
      onRangeChange(newRange);
    } else {
      setInternalRange(newRange);
    }
  };

  const chartItems = React.useMemo(
    () => buildLeadChartItems(leads, 60),
    [leads],
  );

  const data: PerformanceDataPoint[] = React.useMemo(() => {
    const days = periodToDays(activeRange);

    const items = chartItems.slice(-days);

    return items.map((item) => {
      return {
        date: item.date.toLocaleDateString(
          locale === "en" ? "en-US" : locale,
          { month: "short", day: "numeric" },
        ),
        emailsSent: item.emailsSent,
        replies: item.replies,
      };
    });
  }, [chartItems, activeRange, locale]);

  if (comingSoon) {
    return (
      <div
        className="bg-gray-50 border mb-8 border-gray-200 rounded-xl px-4 sm:px-6 py-5 font-sans w-full max-w-full"
        title={t("This metric isn't live yet")}
      >
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mb-2">
          <h2 className="text-base font-semibold text-gray-400 flex-1">
            {t("Performance")}
          </h2>
          <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
            {t("Coming soon")}
          </span>
        </div>
        <div className="flex h-70 items-center justify-center rounded-lg border border-dashed border-gray-200 px-6 text-center text-sm text-gray-400">
          {t("Emails sent and replies per day will appear here soon.")}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border mb-8 border-gray-200 rounded-xl px-4 sm:px-6 py-5 font-sans w-full max-w-full">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 mb-2">
        <h2 className="text-base font-semibold text-gray-900 flex-1">
          {t("Performance")}
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-2 items-center justify-center whitespace-nowrap">
            <div className="w-5 border-b-2 border-primary" />
            <p className="text-gray-800 text-xs">{t("Emails Sent")}</p>
            <div className="w-5 border-b-2 border-dashed border-success" />
            <p className="text-gray-800 text-xs">{t("Replies")}</p>
          </div>

          <select
            value={activeRange}
            onChange={(e) => handleRangeChange(e.target.value as DateRange)}
            className="text-xs text-gray-700 border border-gray-200 rounded-md px-2 py-1 bg-white cursor-pointer"
          >
            <option value="Last 7 days">{t("Last 7 days")}</option>
            <option value="Last 14 days">{t("Last 14 days")}</option>
            <option value="Last 30 days">{t("Last 30 days")}</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="emailGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke="#f0f0f0" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9ca3af" }}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="emailsSent"
            name={t("Emails Sent")}
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#emailGradient)"
            dot={{ r: 3, fill: "#3b82f6", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />

          <Line
            type="monotone"
            dataKey="replies"
            name={t("Replies")}
            stroke="#1d8a68"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={{ r: 3, fill: "#1d8a68", strokeWidth: 0 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
