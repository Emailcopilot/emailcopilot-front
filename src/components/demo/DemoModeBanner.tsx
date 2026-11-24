"use client";

import { FlaskConical, X } from "lucide-react";
import { useDemoMode } from "@/lib/demo/demo-mode";
import { useI18n } from "@/lib/i18n";

export function DemoModeBanner() {
  const { isDemo, exitDemo } = useDemoMode();
  const { t } = useI18n();

  if (!isDemo) return null;

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
      <button
        type="button"
        onClick={() => exitDemo()}
        className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold transition-colors hover:bg-amber-100"
      >
        <span className="hidden sm:inline">{t("Exit demo")}</span>
        <X size={15} />
      </button>
    </div>
  );
}
