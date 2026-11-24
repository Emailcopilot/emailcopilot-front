"use client";

import React from "react";
import { Mail, Calendar, Clock, ShieldCheck, Globe } from "lucide-react";
import { useCopilotStore } from "../../../../store/copilotStore";
import { formatAllDayAvailability } from "@/lib/sending-schedule";
import { useI18n } from "@/lib/i18n";

const DEFAULT_TIMEZONE = "Europe/Brussels";

export default function ScheduleSideBar() {
  const { copilotData } = useCopilotStore();
  const { t, locale } = useI18n();
  const sendLimit = copilotData?.flightSchedule?.sendLimit;
  const timezone = copilotData?.flightSchedule?.timezone || DEFAULT_TIMEZONE;
  const activeDays = copilotData?.flightSchedule?.activeDays || [1, 2, 3, 4, 5];
  const fromTime = copilotData?.flightSchedule?.sendingHours.start || "08:00";
  const toTime = copilotData?.flightSchedule?.sendingHours.end || "17:00";

  const sendLimitActive = copilotData?.flightSchedule?.sendLimitActive ?? false;
  const sendingHoursActive =
    copilotData?.flightSchedule?.sendingHoursActive ?? false;

  // Since timezone string can be long, let's extract just the relevant part
  const formattedTimezone = timezone.replace("Timezone: ", "");
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const isWeekday =
    activeDays.length === 5 &&
    activeDays.every((d) =>
      ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(daysOfWeek[d - 1]),
    );
  const isWeekend =
    activeDays.length === 2 &&
    activeDays.every((d) => ["Sat", "Sun"].includes(daysOfWeek[d - 1]));
  const formattedDays = isWeekday
    ? t("Monday - Friday")
    : isWeekend
      ? t("Weekend only")
      : activeDays.length === 7
        ? t("Every day")
        : [...activeDays]
            .sort((a, b) => a - b)
            .map((d) => t(daysOfWeek[d - 1] ?? String(d)))
            .join(", ");

  const activeDaysPerMonth = activeDays.length * 4;
  const monthlyVolume = sendLimitActive
    ? `~${((sendLimit ?? 30) * activeDaysPerMonth).toLocaleString(locale)}`
    : t("Unlimited");

  return (
    <div className="w-full ">
      <h3 className="font-bold text-slate-900 mb-1 leading-tight">
        {t("Schedule Summary")}
      </h3>
      <p className="text-xs text-slate-500 mb-8">
        {t("Here's how your copilot will send.")}
      </p>

      <div className="flex flex-col gap-6 mb-8">
        {/* Daily limit */}
        <div className="flex items-start gap-4">
          <div className="p-2 border border-slate-200 rounded-lg shrink-0 mt-0.5">
            <Mail className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {t("Daily send limit")}
            </h4>
            <p className="text-xs text-slate-500">
              {sendLimitActive
                ? t("{n} emails per day", { n: sendLimit ?? 30 })
                : t("Unlimited emails")}
            </p>
          </div>
        </div>

        {/* Active days */}
        <div className="flex items-start gap-4">
          <div className="p-2 border border-slate-200 rounded-lg shrink-0 mt-0.5">
            <Calendar className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {t("Active days")}
            </h4>
            <p className="text-xs text-slate-500">{formattedDays}</p>
          </div>
        </div>

        {/* Sending hours */}
        <div className="flex items-start gap-4">
          <div className="p-2 border border-slate-200 rounded-lg shrink-0 mt-0.5">
            <Clock className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">
              {t("Sending hours")}
            </h4>
            <p className="text-xs text-slate-500">
              {sendingHoursActive
                ? `${fromTime} - ${toTime}`
                : t(formatAllDayAvailability(activeDays))}
            </p>
          </div>
        </div>

        {/* Timezone */}
        <div className="flex items-start gap-4">
          <div className="p-2 border border-slate-200 rounded-lg shrink-0 mt-0.5">
            <Globe className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-1">{t("Timezone")}</h4>
            <p
              className="text-xs text-slate-500 line-clamp-1 pr-2"
              title={formattedTimezone}
            >
              {formattedTimezone}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-slate-100 mb-6"></div>

      <div data-tour="tour-step5-volume" className="mb-8">
        <h4 className="text-sm font-bold text-slate-900 mb-2">
          {t("Est. monthly volume")}
        </h4>
        <p className="text-xs text-slate-500">
          {t("{volume} emails", { volume: monthlyVolume })} <br />
          {t("Based on {n} active days/month", { n: activeDaysPerMonth })}
        </p>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-xl border border-blue-200 bg-blue-50/50">
        <ShieldCheck className="w-6 h-6 text-blue-500 shrink-0" />
        <p className="text-xs text-slate-700 font-medium leading-relaxed">
          {t(
            "These settings help maximize deliverability and keep your account safe.",
          )}
        </p>
      </div>
    </div>
  );
}
