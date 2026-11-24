"use client";

import { Compass } from "lucide-react";
import { useTour } from "./TourProvider";

export function TourTriggerButton({
  fromBeginning = false,
  className,
}: {
  fromBeginning?: boolean;
  className?: string;
}) {
  const { canUseTour, startTour, translations } = useTour();

  if (!canUseTour) return null;

  return (
    <button
      type="button"
      onClick={() => startTour({ fromBeginning })}
      className={
        className ??
        "flex shrink-0 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      }
    >
      <Compass size={15} className="text-primary" />
      <span>{translations.ui.takeTour}</span>
    </button>
  );
}
