"use client";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import type { LimitsResponse } from "@/lib/types";
import type { Plan, Subscription } from "@/lib/useBilling";
import {
  formatBillingDate,
  formatPlanFeature,
  handlePlanNameChange,
  planAnnualPrice,
  PLAN_ICONS,
} from "@/lib/helpers";
import ProgressBar from "../ProgressBar";
import { emailQuota } from "@/lib/limits";
import { useI18n } from "@/lib/i18n";

interface CurrentPlanCardProps {
  plan: Plan | null;
  subscription: Subscription | null;
  limits: LimitsResponse | null;
  onChangePlan: () => void;
  onCancel: () => void;
  onUpdatePaymentMethod: () => void;
  isUpdatingPaymentMethod: boolean;
}

export default function CurrentPlanCard({
  plan,
  subscription,
  limits,
  onChangePlan,
  onCancel,
  onUpdatePaymentMethod,
  isUpdatingPaymentMethod,
}: CurrentPlanCardProps) {
  const { t, locale } = useI18n();
  const dateLocale = locale === "en" ? "en-US" : locale;
  const PlanIcon = PLAN_ICONS[plan?.id ?? "starter"] ?? PLAN_ICONS.starter;
  const quota = emailQuota(limits);
  const emailsSent = quota?.used ?? 0;
  const emailsLimit = quota?.max ?? 0;
  const emailsPercent = quota?.percent ?? 0;
  const isCanceling = Boolean(subscription?.cancelAtPeriodEnd);
  const rawInterval = subscription?.billingInterval ?? plan?.interval;
  const billingPeriod =
    rawInterval === "year" || rawInterval === "annual"
      ? "Annual"
      : "Monthly";
  const displayPrice =
    plan == null
      ? "0"
      : billingPeriod === "Annual"
        ? `${Math.floor(planAnnualPrice(plan))}`
        : `${plan.price}`;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-bold text-gray-900">{t("Current Plan")}</h2>

      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Plan details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/5">
              <PlanIcon size={22} className="text-primary" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">
                {handlePlanNameChange(plan?.name ?? "")}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-900">
                  €{displayPrice}
                </span>{" "}
                / {t(billingPeriod)}
              </p>
            </div>
          </div>

          <ul className="mt-5 space-y-3">
            {(plan?.features ?? []).map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="shrink-0 fill-primary text-white"
                />
                <span className="text-sm text-gray-700">
                  {t(formatPlanFeature(feature))}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onChangePlan}
              className="btn-cta w-full rounded-lg border border-transparent px-4 py-2.5 text-sm font-semibold text-white sm:w-auto sm:px-6"
            >
              {t("Change plan")}
            </button>
            {!isCanceling && (
              <button
                type="button"
                onClick={onCancel}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-error/30 bg-white px-4 py-2.5 text-sm font-semibold text-error transition-colors hover:bg-error/5 sm:w-auto sm:px-6"
              >
                <XCircle size={16} />
                {t("Cancel plan")}
              </button>
            )}
          </div>
        </div>

        {/* Usage */}
        <div className="rounded-xl border border-gray-200 p-5">
          <p className="text-sm font-bold text-gray-900">{t("Email credits usage")}</p>

          <p className="mt-3 text-2xl font-bold text-primary">
            {emailsSent}{" "}
            <span className="text-gray-900">/ {emailsLimit}</span>
          </p>
          <p className="text-xs text-gray-500">{t("Emails used")}</p>

          <div className="mt-4">
            <ProgressBar percent={emailsPercent} />
            <p className="mt-2 text-right text-xs text-gray-500">
              {t("{percent} % used", { percent: Math.round(emailsPercent) })}
            </p>
            {quota?.atLimit && (
              <p className="mt-2 text-xs font-medium text-red-600">
                {quota.resetAt
                  ? t("Monthly allowance reached. Sending resumes on {date}.", {
                      date: formatBillingDate(quota.resetAt, dateLocale),
                    })
                  : t(
                      "Monthly allowance reached. Sending resumes when your allowance renews.",
                    )}
              </p>
            )}
          </div>

          <hr className="my-4 border-gray-100" />

          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-gray-900">
              {t("Plan renews on")}
            </span>
            <span className="text-xs text-gray-500">
              {formatBillingDate(subscription?.currentPeriodEnd, dateLocale)}
            </span>
          </div>

          <hr className="my-4 border-gray-100" />

          {/* Omar note: The design shows the saved card as "Visa •••• 4242", but no API
              endpoint returns the card brand or its last four digits — GET /billing/subscription
              only exposes the internal mollieCustomerId / mollieSubscriptionId. Rather than
              invent digits, this renders a neutral "Card on file" label. Once the backend
              returns the brand and last4 (ideally on GET /billing/subscription), replace the
              literal below with those values. */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-bold text-gray-900">
              {t("Payment method")}
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              {t("Card on file")}
              <button
                type="button"
                onClick={onUpdatePaymentMethod}
                disabled={isUpdatingPaymentMethod}
                className="flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary-hover disabled:opacity-50"
              >
                {isUpdatingPaymentMethod && (
                  <Loader2 size={12} className="animate-spin" />
                )}
                {t("Update")}
              </button>
            </span>
          </div>
        </div>
      </div>

      {isCanceling && (
        <p className="mt-5 rounded-lg bg-warning/10 px-4 py-3 text-sm text-warning">
          {t("Your plan is canceled and stays active until {date}.", {
            date: formatBillingDate(subscription?.currentPeriodEnd, dateLocale),
          })}
        </p>
      )}
    </div>
  );
}
