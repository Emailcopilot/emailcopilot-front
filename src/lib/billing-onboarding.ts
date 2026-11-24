import type { LimitsResponse } from "./types";

export type BillingOnboardingState = "armed" | "done" | null;

export interface BillingInvoiceSample {
  status: string;
  paidAt?: string | null;
  createdAt?: string;
}

export interface BillingSubscriptionSample {
  status: string;
  createdAt?: string | null;
}

export type BillingOnboardingDecision =
  | { action: "none" }
  | { action: "mark-done" }
  | { action: "activate-demo"; redirectTo: string };

const ONBOARDING_KEY_PREFIX = "emailcopilot:billing-onboarding:";
const RECENT_ACTIVATION_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_FUTURE_CLOCK_SKEW_MS = 60 * 60 * 1000;

function onboardingKey(userId: string | null | undefined): string | null {
  return userId ? `${ONBOARDING_KEY_PREFIX}${userId}` : null;
}

export function readBillingOnboardingState(
  userId: string | null | undefined,
): BillingOnboardingState {
  if (typeof window === "undefined") return null;
  const key = onboardingKey(userId);
  if (!key) return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === "armed" || raw === "done") return raw;
    return null;
  } catch {
    return null;
  }
}

export function writeBillingOnboardingState(
  userId: string | null | undefined,
  state: BillingOnboardingState,
): void {
  if (typeof window === "undefined") return;
  const key = onboardingKey(userId);
  if (!key) return;
  try {
    if (state === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, state);
    }
  } catch {
    // storage unavailable
  }
}

export function hasPriorPaidInvoices(
  invoices: readonly BillingInvoiceSample[],
): boolean {
  return invoices.some((invoice) => invoice.status === "paid");
}

export function hasExistingAppUsage(limits: LimitsResponse | null): boolean {
  if (!limits || !limits.hasActivePlan) return false;
  return (
    (limits.usage.copilotsCount ?? 0) > 0 ||
    (limits.usage.emailAccountsCount ?? 0) > 0 ||
    (limits.usage.emailsSent ?? 0) > 0
  );
}

function isTimestampWithinWindow(
  iso: string | null | undefined,
  nowMs: number,
): boolean {
  if (!iso) return false;
  const ts = Date.parse(iso);
  if (!Number.isFinite(ts)) return false;
  const ageMs = nowMs - ts;
  return (
    ageMs <= RECENT_ACTIVATION_WINDOW_MS &&
    ageMs >= -MAX_FUTURE_CLOCK_SKEW_MS
  );
}

export function isRecentlyActivatedPlan({
  limits,
  subscription,
  invoices,
  nowMs = Date.now(),
}: {
  limits: LimitsResponse | null;
  subscription: BillingSubscriptionSample | null;
  invoices: readonly BillingInvoiceSample[];
  nowMs?: number;
}): boolean {
  if (!limits || !limits.hasActivePlan) return false;

  const firstPaid = invoices.find((invoice) => invoice.status === "paid");
  if (isTimestampWithinWindow(firstPaid?.paidAt, nowMs)) return true;
  if (isTimestampWithinWindow(subscription?.createdAt, nowMs)) return true;
  return isTimestampWithinWindow(limits.periodStart, nowMs);
}

export function shouldArmBillingOnboarding({
  billingLoaded,
  limits,
  invoices,
  state,
  tourSeen,
}: {
  billingLoaded: boolean;
  limits: LimitsResponse | null;
  invoices: readonly BillingInvoiceSample[];
  state: BillingOnboardingState;
  tourSeen: boolean;
}): boolean {
  if (!billingLoaded || !limits || limits.hasActivePlan) return false;
  if (state === "done" || tourSeen) return false;
  if (hasPriorPaidInvoices(invoices)) return false;
  return true;
}

export function evaluateBillingOnboarding({
  pathname,
  billingLoaded,
  limits,
  subscription,
  invoices,
  state,
  tourSeen,
  transitionedToActive,
  nowMs = Date.now(),
}: {
  pathname: string;
  billingLoaded: boolean;
  limits: LimitsResponse | null;
  subscription: BillingSubscriptionSample | null;
  invoices: readonly BillingInvoiceSample[];
  state: BillingOnboardingState;
  tourSeen: boolean;
  transitionedToActive: boolean;
  nowMs?: number;
}): BillingOnboardingDecision {
  if (!billingLoaded || !limits || !limits.hasActivePlan) {
    return { action: "none" };
  }

  if (state === "done") return { action: "none" };
  if (tourSeen) return { action: "mark-done" };

  const paidCount = invoices.filter((invoice) => invoice.status === "paid").length;
  if (paidCount > 1 || hasExistingAppUsage(limits)) {
    return { action: "mark-done" };
  }

  const triggeredFromPlanlessSession = state === "armed" || transitionedToActive;

  if (pathname === "/dashboard/billing") {
    if (!triggeredFromPlanlessSession) return { action: "none" };
    return { action: "activate-demo", redirectTo: "/dashboard?demo=true" };
  }

  if (pathname.startsWith("/dashboard/billing/")) {
    return { action: "none" };
  }

  if (pathname === "/dashboard" || pathname === "/dashboard/copilots") {
    const isFresh =
      triggeredFromPlanlessSession ||
      isRecentlyActivatedPlan({ limits, subscription, invoices, nowMs });

    if (!isFresh) return { action: "mark-done" };

    return {
      action: "activate-demo",
      redirectTo:
        pathname === "/dashboard/copilots"
          ? "/dashboard/copilots?demo=true"
          : "/dashboard?demo=true",
    };
  }

  return { action: "none" };
}
