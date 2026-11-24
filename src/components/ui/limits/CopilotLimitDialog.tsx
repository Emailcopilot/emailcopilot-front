"use client";

import type { Plan, PlanId } from "@/lib/useBilling";
import { handlePlanNameChange } from "@/lib/helpers";
import LimitUpgradeDialog from "./LimitUpgradeDialog";
import { useI18n } from "@/lib/i18n";

interface CopilotLimitDialogProps {
  open: boolean;
  currentPlanId: PlanId | null;
  used: number;
  max: number;
  /** Plans above the current one, cheapest first. */
  tiers: Plan[];
  onClose: () => void;
}

/** Upgrade dialog shown when the copilot allowance is exhausted. */
export default function CopilotLimitDialog({
  open,
  currentPlanId,
  max,
  tiers,
  onClose,
}: CopilotLimitDialogProps) {
  const { t } = useI18n();
  const planName = currentPlanId
    ? handlePlanNameChange(currentPlanId)
    : t("current");

  return (
    <LimitUpgradeDialog
      open={open}
      onClose={onClose}
      title={t("Copilot limit reached")}
      description={
        tiers.length > 0
          ? t(
              max === 1
                ? "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot, or upgrade to add more."
                : "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot, or upgrade to add more.",
              { plan: planName, max },
            )
          : t(
              max === 1
                ? "Your {plan} plan includes {max} copilot and you are using it. Delete it to free a slot."
                : "Your {plan} plan includes {max} copilots and you are using all {max}. Delete one of your copilots to free a slot.",
              { plan: planName, max },
            )
      }
      currentPlanId={currentPlanId}
      tiers={tiers}
      reason="copilots"
      featureKeyword="copilot"
      emptyTiersMessage={t(
        "You are already on our highest plan. Contact support if you need more copilots.",
      )}
    />
  );
}
