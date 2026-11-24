"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlertTriangle, ArrowRight, X } from "lucide-react";
import { formatBillingDate } from "@/lib/helpers";
import { currentPlanId, emailQuota, higherTiers } from "@/lib/limits";
import { useBilling } from "@/lib/useBilling";
import { useI18n } from "@/lib/i18n";

/**
 * Dashboard-wide notice for the monthly email allowance. Appears from 90% used
 * (nearly exhausted) and stays once the allowance is gone, with an upgrade path
 * for every plan except the highest one (those users wait for the renewal).
 */
export default function EmailLimitBanner() {
  const pathname = usePathname();
  const { t, locale } = useI18n();
  const { limits, plans } = useBilling();
  const [dismissed, setDismissed] = useState(false);

  const quota = emailQuota(limits);

  // Billing itself already shows usage and the plan selector.
  if (!quota || pathname.startsWith("/dashboard/billing")) return null;
  if (!quota.atLimit && !quota.nearlyExhausted) return null;
  if (dismissed) return null;

  const planId = currentPlanId(limits);
  const tiers = higherTiers(plans, planId);
  const resetLabel = quota.resetAt
    ? formatBillingDate(quota.resetAt, locale === "en" ? "en-US" : locale)
    : null;
  const vars = {
    used: quota.used,
    max: quota.max,
    remaining: quota.remaining,
    date: resetLabel ?? "",
  };

  return (
    <div className="px-4 pt-4 sm:px-6 xl:px-8">
      <div
        role="status"
        className={`flex flex-wrap items-center gap-3 rounded-xl border px-4 py-3 text-sm ${
          quota.atLimit
            ? "border-red-200 bg-red-50 text-red-700"
            : "border-amber-200 bg-amber-50 text-amber-700"
        }`}
      >
        <AlertTriangle size={16} className="shrink-0" />

        <p className="min-w-0 flex-1">
          {quota.atLimit
            ? resetLabel
              ? t(
                  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews on {date}.",
                  vars,
                )
              : t(
                  "Monthly email allowance reached ({used} of {max} used). Your copilots pause sending until the allowance renews.",
                  vars,
                )
            : t(
                "You have used {used} of {max} emails this month. {remaining} left before your copilots pause.",
                vars,
              )}
        </p>

        {tiers.length > 0 ? (
          <Link
            href="/dashboard/billing?upgrade=emails"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {t("Upgrade")} <ArrowRight size={13} />
          </Link>
        ) : (
          <Link
            href="/dashboard/billing"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {t("View plan")} <ArrowRight size={13} />
          </Link>
        )}

        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label={t("Dismiss")}
          className="shrink-0 rounded-md p-1 opacity-60 transition-opacity hover:opacity-100"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
