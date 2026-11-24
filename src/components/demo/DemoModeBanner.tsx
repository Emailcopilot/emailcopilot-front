"use client";

import { Compass, FlaskConical, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDemoMode } from "@/lib/demo/demo-mode";
import { useI18n } from "@/lib/i18n";
import { useTour } from "@/components/tour";

export function DemoModeBanner() {
  const { isDemo, clearDemoPending } = useDemoMode();
  const { t } = useI18n();
  const pathname = usePathname();
  const { startTour, translations } = useTour();

  if (!isDemo) return null;

  const canShowTour =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/copilots");

  return (
    <div className="flex w-full items-center justify-between gap-3 border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-amber-900 sm:px-6">
      <div className="flex min-w-0 items-center gap-2.5">
        <FlaskConical size={16} className="shrink-0" />
        <p className="truncate text-xs font-medium sm:text-sm">
          {t(
            "Demo mode. You are viewing sample data until you create your first item.",
          )}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        {canShowTour && (
          <button
            type="button"
            onClick={() => startTour({ mode: "essentials" })}
            className="flex shrink-0 items-center gap-1.5 rounded-md border border-amber-300/80 bg-white/70 px-2.5 py-1 text-xs font-semibold text-amber-950 transition-colors hover:bg-white"
          >
            <Compass size={14} />
            <span>{translations.ui.takeTour}</span>
          </button>
        )}
        <button
          type="button"
          onClick={() => clearDemoPending()}
          className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors hover:bg-amber-100"
        >
          <span className="hidden sm:inline">{t("Exit demo")}</span>
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
