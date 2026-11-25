export type TourLocale = "en" | "nl" | "de" | "fr" | "es";

export type TourMode = "essentials" | "full";

export type TourScope = "dashboard" | "copilots";

export type TourKind = "req" | "opt" | "info";

export type TourScreen =
  | "dashboard"
  | "copilots"
  | "step1"
  | "step2"
  | "step3"
  | "step4"
  | "step5"
  | "step6";

export type TourWizardStep = 1 | 2 | 3 | 4 | 5 | 6;

export type TourPrepareAction =
  | "template-tabs-steps"
  | "template-tabs-variables"
  | "schedule-list-open";

export type TourStepId =
  | "dash-sent"
  | "dash-replies"
  | "dash-reply-rate"
  | "dash-copilots-kpi"
  | "dash-performance"
  | "dash-copilots-card"
  | "dash-departure-card"
  | "dash-quick-start"
  | "dash-plan"
  | "copilots-create"
  | "copilots-workflow"
  | "step1-name"
  | "step1-desc"
  | "step1-goal"
  | "step1-summary"
  | "step1-continue"
  | "step2-oauth"
  | "step2-smtp"
  | "step2-saved"
  | "step2-why"
  | "step2-continue"
  | "step3-industry"
  | "step3-country"
  | "step3-city"
  | "step3-size"
  | "step3-saved"
  | "step3-continue"
  | "step4-name"
  | "step4-steps"
  | "step4-subject"
  | "step4-body"
  | "step4-variables"
  | "step4-test"
  | "step4-saved"
  | "step4-continue"
  | "step5-name"
  | "step5-limit"
  | "step5-days"
  | "step5-hours"
  | "step5-saved"
  | "step5-volume"
  | "step5-continue"
  | "step6-review"
  | "step6-actions"
  | "step6-relaunch";

export interface TourStepConfig {
  id: TourStepId;
  screen: TourScreen;
  wizardStep?: TourWizardStep;
  target: string;
  kind: TourKind;
  essential: boolean;
  onlyWhenLiveEdit?: boolean;
  prepare?: TourPrepareAction;
}

export interface TourStepCopy {
  title: string;
  body: string;
  anchor: string;
}

export interface TourLocaleUi {
  takeTour: string;
  essentials: string;
  fullTour: string;
  next: string;
  back: string;
  finish: string;
  restart: string;
  close: string;
  stepOf: (current: number, total: number) => string;
  dashboardOverview: string;
  beforeStart: string;
  wizardStep: (step: number) => string;
  kinds: Record<TourKind, string>;
  legend: Record<TourKind, string>;
}

export interface TourLocaleBundle {
  ui: TourLocaleUi;
  steps: Record<TourStepId, TourStepCopy>;
}

export interface TourKindTheme {
  highlight: string;
  halo: string;
  fg: string;
  btn: string;
  badgeBg: string;
  badgeFg: string;
}

export const KIND_THEME: Record<TourKind, TourKindTheme> = {
  req: {
    highlight: "#2563EB",
    halo: "rgba(37, 99, 235, 0.22)",
    fg: "#2563EB",
    btn: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeFg: "#1D4ED8",
  },
  opt: {
    highlight: "#06B6D4",
    halo: "rgba(6, 182, 212, 0.22)",
    fg: "#0891B2",
    btn: "#0891B2",
    badgeBg: "#ECFEFF",
    badgeFg: "#0E7490",
  },
  info: {
    highlight: "#64748B",
    halo: "rgba(100, 116, 139, 0.2)",
    fg: "#475569",
    btn: "#334155",
    badgeBg: "#F1F5F9",
    badgeFg: "#475569",
  },
};
