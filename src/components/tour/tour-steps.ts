import type { TourMode, TourScope, TourStepConfig } from "./tour-types";

export const COPILOT_TOUR_STEPS: TourStepConfig[] = [
  // Dashboard Overview — KPIs, analytics, cards, quick start, plan quota
  {
    id: "dash-sent",
    screen: "dashboard",
    target: "tour-dash-sent",
    kind: "info",
    essential: true,
  },
  {
    id: "dash-replies",
    screen: "dashboard",
    target: "tour-dash-replies",
    kind: "info",
    essential: false,
  },
  {
    id: "dash-reply-rate",
    screen: "dashboard",
    target: "tour-dash-reply-rate",
    kind: "info",
    essential: false,
  },
  {
    id: "dash-copilots-kpi",
    screen: "dashboard",
    target: "tour-dash-copilots-kpi",
    kind: "info",
    essential: false,
  },
  {
    id: "dash-performance",
    screen: "dashboard",
    target: "tour-dash-performance",
    kind: "info",
    essential: true,
  },
  {
    id: "dash-copilots-card",
    screen: "dashboard",
    target: "tour-dash-copilots-card",
    kind: "info",
    essential: false,
  },
  {
    id: "dash-departure-card",
    screen: "dashboard",
    target: "tour-dash-departure-card",
    kind: "info",
    essential: false,
  },
  {
    id: "dash-quick-start",
    screen: "dashboard",
    target: "tour-dash-quick-start",
    kind: "info",
    essential: true,
  },
  {
    id: "dash-plan",
    screen: "dashboard",
    target: "tour-dash-plan",
    kind: "info",
    essential: false,
  },

  // Before you start — Copilots list
  {
    id: "copilots-create",
    screen: "copilots",
    target: "copilots-create",
    kind: "req",
    essential: true,
  },
  {
    id: "copilots-workflow",
    screen: "copilots",
    target: "copilots-workflow",
    kind: "info",
    essential: false,
  },

  // Step 1 — Setup
  {
    id: "step1-name",
    screen: "step1",
    wizardStep: 1,
    target: "tour-step1-name",
    kind: "req",
    essential: true,
  },
  {
    id: "step1-desc",
    screen: "step1",
    wizardStep: 1,
    target: "tour-step1-desc",
    kind: "opt",
    essential: false,
  },
  {
    id: "step1-goal",
    screen: "step1",
    wizardStep: 1,
    target: "tour-step1-goal",
    kind: "opt",
    essential: false,
  },
  {
    id: "step1-summary",
    screen: "step1",
    wizardStep: 1,
    target: "tour-step1-summary",
    kind: "info",
    essential: false,
  },
  {
    id: "step1-continue",
    screen: "step1",
    wizardStep: 1,
    target: "tour-steps-continue",
    kind: "req",
    essential: true,
  },

  // Step 2 — Email Accounts
  {
    id: "step2-oauth",
    screen: "step2",
    wizardStep: 2,
    target: "tour-step2-oauth",
    kind: "req",
    essential: true,
  },
  {
    id: "step2-smtp",
    screen: "step2",
    wizardStep: 2,
    target: "tour-step2-smtp",
    kind: "opt",
    essential: true,
  },
  {
    id: "step2-saved",
    screen: "step2",
    wizardStep: 2,
    target: "tour-step2-saved",
    kind: "info",
    essential: false,
  },
  {
    id: "step2-why",
    screen: "step2",
    wizardStep: 2,
    target: "tour-step2-why",
    kind: "info",
    essential: true,
  },
  {
    id: "step2-continue",
    screen: "step2",
    wizardStep: 2,
    target: "tour-steps-continue",
    kind: "req",
    essential: false,
  },

  // Step 3 — Target Audience
  {
    id: "step3-industry",
    screen: "step3",
    wizardStep: 3,
    target: "tour-step3-industry",
    kind: "req",
    essential: true,
  },
  {
    id: "step3-country",
    screen: "step3",
    wizardStep: 3,
    target: "tour-step3-country",
    kind: "req",
    essential: true,
  },
  {
    id: "step3-city",
    screen: "step3",
    wizardStep: 3,
    target: "tour-step3-city",
    kind: "opt",
    essential: false,
  },
  {
    id: "step3-size",
    screen: "step3",
    wizardStep: 3,
    target: "tour-step3-size",
    kind: "info",
    essential: true,
  },
  {
    id: "step3-saved",
    screen: "step3",
    wizardStep: 3,
    target: "tour-step3-saved",
    kind: "info",
    essential: true,
  },
  {
    id: "step3-continue",
    screen: "step3",
    wizardStep: 3,
    target: "tour-steps-continue",
    kind: "req",
    essential: false,
  },

  // Step 4 — Email Template
  {
    id: "step4-name",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-name",
    kind: "req",
    essential: false,
  },
  {
    id: "step4-steps",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-left",
    kind: "req",
    essential: true,
    prepare: "template-tabs-steps",
  },
  {
    id: "step4-subject",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-subject",
    kind: "req",
    essential: false,
  },
  {
    id: "step4-body",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-body",
    kind: "req",
    essential: false,
    prepare: "template-tabs-steps",
  },
  {
    id: "step4-variables",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-left",
    kind: "req",
    essential: true,
    prepare: "template-tabs-variables",
  },
  {
    id: "step4-test",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-test",
    kind: "opt",
    essential: true,
  },
  {
    id: "step4-saved",
    screen: "step4",
    wizardStep: 4,
    target: "tour-step4-saved",
    kind: "info",
    essential: true,
  },
  {
    id: "step4-continue",
    screen: "step4",
    wizardStep: 4,
    target: "tour-steps-continue",
    kind: "req",
    essential: false,
  },

  // Step 5 — Flight Schedule
  {
    id: "step5-name",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-name",
    kind: "req",
    essential: true,
  },
  {
    id: "step5-limit",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-limit",
    kind: "req",
    essential: true,
  },
  {
    id: "step5-days",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-days",
    kind: "opt",
    essential: false,
  },
  {
    id: "step5-hours",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-hours",
    kind: "opt",
    essential: false,
  },
  {
    id: "step5-saved",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-saved",
    kind: "info",
    essential: true,
    prepare: "schedule-list-open",
  },
  {
    id: "step5-volume",
    screen: "step5",
    wizardStep: 5,
    target: "tour-step5-volume",
    kind: "info",
    essential: false,
  },
  {
    id: "step5-continue",
    screen: "step5",
    wizardStep: 5,
    target: "tour-steps-continue",
    kind: "req",
    essential: false,
  },

  // Step 6 — Take-off & Re-launch
  {
    id: "step6-review",
    screen: "step6",
    wizardStep: 6,
    target: "tour-step6-review",
    kind: "info",
    essential: true,
  },
  {
    id: "step6-actions",
    screen: "step6",
    wizardStep: 6,
    target: "tour-step6-actions",
    kind: "req",
    essential: true,
  },
  {
    id: "step6-relaunch",
    screen: "step6",
    wizardStep: 6,
    target: "tour-step6-relaunch",
    kind: "info",
    essential: true,
    onlyWhenLiveEdit: true,
  },
];

export function getVisibleTourSteps(
  mode: TourMode,
  options: { scope?: TourScope; includeLiveEdit?: boolean } = {},
): TourStepConfig[] {
  const { scope = "dashboard", includeLiveEdit = true } = options;
  return COPILOT_TOUR_STEPS.filter((step) => {
    if (scope === "copilots" && step.screen === "dashboard") return false;
    if (step.onlyWhenLiveEdit && !includeLiveEdit) return false;
    if (mode === "essentials" && !step.essential) return false;
    return true;
  });
}

/**
 * Mirrors the HTML tour's mode-switch mapping: stays on the same stop if it is
 * visible in the target mode, otherwise moves to the nearest preceding visible stop.
 */
export function resolveStepIndexAfterModeChange(
  nextSteps: readonly TourStepConfig[],
  currentStep: TourStepConfig | undefined,
): number {
  if (!currentStep || nextSteps.length === 0) return 0;
  const direct = nextSteps.findIndex((s) => s.id === currentStep.id);
  if (direct >= 0) return direct;

  const currentGlobalIndex = COPILOT_TOUR_STEPS.findIndex(
    (s) => s.id === currentStep.id,
  );
  let fallback = 0;
  nextSteps.forEach((step, idx) => {
    const globalIdx = COPILOT_TOUR_STEPS.findIndex((s) => s.id === step.id);
    if (globalIdx <= currentGlobalIndex) {
      fallback = idx;
    }
  });
  return fallback;
}
