import assert from "node:assert/strict";
import { test } from "node:test";
import {
  evaluateBillingOnboarding,
  hasExistingAppUsage,
  hasPriorPaidInvoices,
  isRecentlyActivatedPlan,
  readBillingOnboardingState,
  shouldArmBillingOnboarding,
  writeBillingOnboardingState,
} from "../src/lib/billing-onboarding.ts";
import { readTourSeen, writeTourSeen } from "../src/components/tour/tour-storage.ts";

const NOW = Date.parse("2026-11-24T12:00:00.000Z");

const INACTIVE_LIMITS = {
  hasActivePlan: false,
  planId: null,
  limits: null,
  usage: null,
};

function makeActiveLimits({
  periodStart = "2026-11-24T11:55:00.000Z",
  copilotsCount = 0,
  emailAccountsCount = 0,
  emailsSent = 0,
} = {}) {
  return {
    hasActivePlan: true,
    planId: "starter",
    periodStart,
    periodEnd: "2026-12-24T11:55:00.000Z",
    limits: {
      emailsPerMonth: 2000,
      copilots: 3,
      emailProfiles: 2,
      hasApiAccess: false,
      hasUnlimitedTemplates: false,
    },
    usage: {
      emailsSent,
      emailsRemaining: 2000 - emailsSent,
      emailsPercent: 0,
      copilotsCount,
      copilotsRemaining: 3 - copilotsCount,
      emailAccountsCount,
      emailAccountsRemaining: 2 - emailAccountsCount,
    },
  };
}

test("arms onboarding only for planless users with no prior paid invoices", () => {
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: INACTIVE_LIMITS,
      invoices: [],
      state: null,
      tourSeen: false,
    }),
    true,
  );

  // Failed or still-pending first payment keeps onboarding eligible.
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: INACTIVE_LIMITS,
      invoices: [{ status: "failed" }, { status: "pending" }],
      state: null,
      tourSeen: false,
    }),
    true,
  );

  // Returning / lapsed customer who paid previously is not armed.
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: INACTIVE_LIMITS,
      invoices: [{ status: "paid", paidAt: "2026-09-01T10:00:00.000Z" }],
      state: null,
      tourSeen: false,
    }),
    false,
  );

  // Completed onboarding, seen tour, unloaded billing, or active plan never arm.
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: INACTIVE_LIMITS,
      invoices: [],
      state: "done",
      tourSeen: false,
    }),
    false,
  );
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: INACTIVE_LIMITS,
      invoices: [],
      state: null,
      tourSeen: true,
    }),
    false,
  );
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: false,
      limits: INACTIVE_LIMITS,
      invoices: [],
      state: null,
      tourSeen: false,
    }),
    false,
  );
  assert.equal(
    shouldArmBillingOnboarding({
      billingLoaded: true,
      limits: makeActiveLimits(),
      invoices: [],
      state: null,
      tourSeen: false,
    }),
    false,
  );
});

test("redirects first-time buyer from billing into Overview demo mode", () => {
  const limits = makeActiveLimits();

  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/billing",
      billingLoaded: true,
      limits,
      subscription: { status: "active", createdAt: "2026-11-24T11:58:00.000Z" },
      invoices: [{ status: "paid", paidAt: "2026-11-24T11:58:00.000Z" }],
      state: "armed",
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "activate-demo", redirectTo: "/dashboard?demo=true" },
  );

  // Webhook polling confirms payment while user stays on Billing even without storage.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/billing",
      billingLoaded: true,
      limits,
      subscription: { status: "trialing", createdAt: "2026-11-24T11:59:00.000Z" },
      invoices: [],
      state: null,
      tourSeen: false,
      transitionedToActive: true,
      nowMs: NOW,
    }),
    { action: "activate-demo", redirectTo: "/dashboard?demo=true" },
  );
});

test("never redirects established customers or Billing subpages", () => {
  const limits = makeActiveLimits();

  // Existing active subscriber visiting Billing to check invoices stays on Billing.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/billing",
      billingLoaded: true,
      limits,
      subscription: { status: "active", createdAt: "2026-11-24T11:58:00.000Z" },
      invoices: [{ status: "paid", paidAt: "2026-11-24T11:58:00.000Z" }],
      state: null,
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "none" },
  );

  // Billing FAQ is never interrupted.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/billing/faq",
      billingLoaded: true,
      limits,
      subscription: { status: "active", createdAt: "2026-11-24T11:58:00.000Z" },
      invoices: [],
      state: "armed",
      tourSeen: false,
      transitionedToActive: true,
      nowMs: NOW,
    }),
    { action: "none" },
  );

  // Multiple paid invoices or existing resources mark onboarding done cleanly.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/billing",
      billingLoaded: true,
      limits,
      subscription: { status: "active", createdAt: "2026-11-24T11:58:00.000Z" },
      invoices: [
        { status: "paid", paidAt: "2026-10-24T11:58:00.000Z" },
        { status: "paid", paidAt: "2026-11-24T11:58:00.000Z" },
      ],
      state: "armed",
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "mark-done" },
  );

  assert.equal(hasExistingAppUsage(makeActiveLimits({ copilotsCount: 1 })), true);
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard",
      billingLoaded: true,
      limits: makeActiveLimits({ emailAccountsCount: 1 }),
      subscription: { status: "active", createdAt: "2026-11-24T11:58:00.000Z" },
      invoices: [{ status: "paid", paidAt: "2026-11-24T11:58:00.000Z" }],
      state: "armed",
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "mark-done" },
  );
});

test("handles direct return to Overview or Copilots and ignores stale or completed users", () => {
  const freshLimits = makeActiveLimits({ periodStart: "2026-11-24T11:00:00.000Z" });
  const freshSub = { status: "active", createdAt: "2026-11-24T11:00:00.000Z" };

  assert.equal(
    isRecentlyActivatedPlan({
      limits: freshLimits,
      subscription: freshSub,
      invoices: [],
      nowMs: NOW,
    }),
    true,
  );

  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard/copilots",
      billingLoaded: true,
      limits: freshLimits,
      subscription: freshSub,
      invoices: [{ status: "paid", paidAt: "2026-11-24T11:00:00.000Z" }],
      state: null,
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "activate-demo", redirectTo: "/dashboard/copilots?demo=true" },
  );

  // Subscription created weeks ago without usage marks done instead of forcing demo.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard",
      billingLoaded: true,
      limits: makeActiveLimits({ periodStart: "2026-11-01T10:00:00.000Z" }),
      subscription: { status: "active", createdAt: "2026-11-01T10:00:00.000Z" },
      invoices: [{ status: "paid", paidAt: "2026-11-01T10:00:00.000Z" }],
      state: null,
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "mark-done" },
  );

  // Completed onboarding never triggers again.
  assert.deepEqual(
    evaluateBillingOnboarding({
      pathname: "/dashboard",
      billingLoaded: true,
      limits: freshLimits,
      subscription: freshSub,
      invoices: [],
      state: "done",
      tourSeen: false,
      transitionedToActive: false,
      nowMs: NOW,
    }),
    { action: "none" },
  );

  // Helpers reflect invoice payment status cleanly.
  assert.equal(hasPriorPaidInvoices([{ status: "failed" }]), false);
  assert.equal(hasPriorPaidInvoices([{ status: "paid" }]), true);
});

test("storage helpers isolate billing onboarding and tour-seen per user", () => {
  const prevWindow = globalThis.window;
  const store = new Map();
  globalThis.window = {
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    },
  };

  try {
    writeBillingOnboardingState("user_a", "armed");
    writeTourSeen("user_b");

    assert.equal(readBillingOnboardingState("user_a"), "armed");
    assert.equal(readBillingOnboardingState("user_b"), null);
    assert.equal(readTourSeen("user_a"), false);
    assert.equal(readTourSeen("user_b"), true);

    writeBillingOnboardingState("user_a", "done");
    assert.equal(readBillingOnboardingState("user_a"), "done");
  } finally {
    if (prevWindow === undefined) {
      delete globalThis.window;
    } else {
      globalThis.window = prevWindow;
    }
  }
});
