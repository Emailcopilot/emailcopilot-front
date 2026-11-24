"use client";

import type { Plan, PlanId } from "@/lib/useBilling";
import { formatBillingDate, handlePlanNameChange } from "@/lib/helpers";
import LimitUpgradeDialog from "./LimitUpgradeDialog";
import { useI18n } from "@/lib/i18n";

interface EmailLimitDialogProps {
  open: boolean;
  currentPlanId: PlanId | null;
  used: number;
  max: number;
  /** End of the current billing period, when the allowance renews. */
  resetAt: string | null;
  /** Plans above the current one, cheapest first. */
  tiers: Plan[];
  onClose: () => void;
}

/** Upgrade dialog shown when the monthly email allowance is exhausted. */
export default function EmailLimitDialog({
  open,
  currentPlanId,
  used,
  max,
  resetAt,
  tiers,
  onClose,
}: EmailLimitDialogProps) {
  const { t, locale } = useI18n();
  const planName = currentPlanId
    ? handlePlanNameChange(currentPlanId)
    : t("current");
  const resetLabel = resetAt
    ? formatBillingDate(resetAt, locale === "en" ? "en-US" : locale)
    : null;
  const vars = { plan: planName, max, used, date: resetLabel ?? "" };

  const description =
    tiers.length > 0
      ? resetLabel
        ? t(
            "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until {date} when your allowance renews.",
            vars,
          )
        : t(
            "Your {plan} plan includes {max} emails per month and you have used all {used}. Upgrade for a higher monthly allowance, or wait until your allowance renews.",
            vars,
          )
      : resetLabel
        ? t(
            "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews on {date}.",
            vars,
          )
        : t(
            "Your {plan} plan includes {max} emails per month and you have used all {used}. You are on our highest plan, so sending resumes when your allowance renews.",
            vars,
          );

  return (
    <LimitUpgradeDialog
      open={open}
      onClose={onClose}
      title={t("Monthly email allowance reached")}
      description={description}
      currentPlanId={currentPlanId}
      tiers={tiers}
      reason="emails"
      featureKeyword="email"
      emptyTiersMessage={t(
        "You are already on our highest plan. Your allowance renews automatically next month.",
      )}
    />
  );
}
