"use client";

import FlightScheduleCard from "@/components/ui/flightSchedule/FlightScheduleCard";
import type { Schedule } from "@/components/ui/flightSchedule/FlightScheduleCard";
import { useCopilotStore } from "../../../../store/copilotStore";
import { useI18n } from "@/lib/i18n";

function ScheduleList({
  schedules,
  loading,
}: {
  schedules: Schedule[];
  loading: boolean;
}) {
  const { t } = useI18n();

  const { copilotData, updateCopilotData } = useCopilotStore();
  const selectedId = copilotData.flightScheduleId;

  const handleSelect = (schedule: Schedule) => {
    if (!schedule.id) return;
    if (selectedId === schedule.id) {
      // Deselect if already selected
      updateCopilotData({ flightScheduleId: null });
    } else {
      updateCopilotData({
        flightScheduleId: schedule.id,
        flightSchedule: schedule,
      });
    }
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : schedules.length === 0 ? (
        <div className="text-center text-gray-500 text-sm">
          {t(
            "No flight schedules available yet — use the form above to create one.",
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {schedules.map((schedule) => {
            const isSelected = selectedId === schedule.id;

            return (
              <div
                key={schedule.id}
                onClick={() => handleSelect(schedule)}
                className={`relative cursor-pointer border hover:bg-primary/5  hover:border-primary/50  transition-all rounded-lg ${
                  isSelected
                    ? " border-primary bg-primary/5"
                    : " border-gray-200 bg-white"
                }`}
              >
                <div
                  className={
                    isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }
                >
                  <FlightScheduleCard schedules={schedule} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ScheduleList;
