"use client";

import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  clearDemoPending as clearStoredDemoPending,
  setDemoPending as setStoredDemoPending,
  setDemoRuntimeActive,
  setDemoUserId,
  useDemoPending,
} from "./demo-storage";
import { isDemoCopilotId } from "./demo-data";
import { useBilling } from "@/lib/useBilling";
import {
  evaluateBillingOnboarding,
  hasPriorPaidInvoices,
  readBillingOnboardingState,
  shouldArmBillingOnboarding,
  writeBillingOnboardingState,
} from "@/lib/billing-onboarding";
import { readTourSeen } from "@/components/tour/tour-storage";

interface DemoModeContextValue {
  isDemo: boolean;
  exitDemo: (href?: string) => void;
  clearDemoPending: () => void;
}

const DemoModeContext = createContext<DemoModeContextValue>({
  isDemo: false,
  exitDemo: () => {},
  clearDemoPending: () => {},
});

const BLOCKED_PREFIXES = ["/dashboard/settings", "/dashboard/billing"];

function isDemoEligible(pathname: string, search: string) {
  if (!pathname.startsWith("/dashboard")) return false;

  const blocked = BLOCKED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  if (blocked) return false;

  const params = new URLSearchParams(search);
  if (params.get("new") === "true") return false;
  if (params.has("duplicate")) return false;

  // Real copilot creation/editing stays non-demo; inspecting a demo copilot keeps demo active.
  if (
    pathname === "/dashboard/copilots/new" ||
    pathname.startsWith("/dashboard/copilots/new/")
  ) {
    return isDemoCopilotId(params.get("edit"));
  }

  if (params.has("edit")) return false;

  return true;
}

export function DemoModeProvider({ children }: { children: React.ReactNode }) {
  const { userId } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const pending = useDemoPending();
  const {
    hasActivePlan,
    limits,
    subscription,
    invoices,
    loading: billingLoading,
    subscriptionLoaded,
    invoicesLoaded,
  } = useBilling();

  const [dismissed, setDismissed] = useState(false);

  const canUseDemo = hasActivePlan === true;
  const confirmedNoPlan = limits != null && !hasActivePlan;
  const billingLoaded =
    !billingLoading && limits !== null && subscriptionLoaded && invoicesLoaded;

  const demoParam = searchParams.get("demo");
  const urlDemo = demoParam === "true";
  const explicitOff = demoParam === "false";
  const eligible = useMemo(
    () => canUseDemo && isDemoEligible(pathname, search),
    [canUseDemo, pathname, search],
  );
  const autoDemo = canUseDemo && pending && !dismissed && eligible;
  const isDemo = canUseDemo && (urlDemo || autoDemo) && !dismissed;

  const previousDemoParam = useRef(demoParam);
  const prevUrlDemoRef = useRef(false);
  const prevOnboardingUserIdRef = useRef<string | null>(null);
  const prevConfirmedPlanRef = useRef<boolean | null>(null);

  const stripDemoParam = useCallback(() => {
    const params = new URLSearchParams(search);
    params.delete("demo");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }, [pathname, router, search]);

  useEffect(() => {
    setDemoUserId(userId ?? null);
  }, [userId]);

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  useEffect(() => {
    if (previousDemoParam.current === demoParam) return;
    previousDemoParam.current = demoParam;
    if (demoParam === "true" && canUseDemo) setDismissed(false);
  }, [demoParam, canUseDemo]);

  useEffect(() => {
    if (confirmedNoPlan) {
      clearStoredDemoPending();
      setDismissed(true);
      if (urlDemo) stripDemoParam();
      return;
    }

    if (!userId || !canUseDemo) return;

    const enteredUrlDemo = urlDemo && !prevUrlDemoRef.current;
    prevUrlDemoRef.current = urlDemo;

    if (enteredUrlDemo && !explicitOff) {
      setStoredDemoPending(true);
      return;
    }

    if (explicitOff) {
      clearStoredDemoPending();
      writeBillingOnboardingState(userId, "done");
      setDismissed(true);
    }
  }, [
    canUseDemo,
    confirmedNoPlan,
    explicitOff,
    stripDemoParam,
    urlDemo,
    userId,
  ]);

  // Track first-time buyers via Billing so post-payment activation lands them
  // straight in Demo Mode (and auto-starts the Copilot tour) once, while
  // returning/established customers stay undisturbed.
  useEffect(() => {
    const normalizedUserId = userId ?? null;
    if (prevOnboardingUserIdRef.current !== normalizedUserId) {
      prevOnboardingUserIdRef.current = normalizedUserId;
      prevConfirmedPlanRef.current = null;
    }

    if (!normalizedUserId || !billingLoaded || !limits) return;

    const tourSeen = readTourSeen(normalizedUserId);
    const onboardingState = readBillingOnboardingState(normalizedUserId);
    const transitionedToActive =
      prevConfirmedPlanRef.current === false && limits.hasActivePlan === true;

    if (!limits.hasActivePlan) {
      if (
        shouldArmBillingOnboarding({
          billingLoaded,
          limits,
          invoices,
          state: onboardingState,
          tourSeen,
        })
      ) {
        writeBillingOnboardingState(normalizedUserId, "armed");
      } else if (
        (hasPriorPaidInvoices(invoices) || tourSeen) &&
        onboardingState !== "done"
      ) {
        writeBillingOnboardingState(normalizedUserId, "done");
      }
      prevConfirmedPlanRef.current = false;
      return;
    }

    const decision = evaluateBillingOnboarding({
      pathname,
      billingLoaded,
      limits,
      subscription,
      invoices,
      state: onboardingState,
      tourSeen,
      transitionedToActive,
    });

    if (decision.action === "mark-done") {
      writeBillingOnboardingState(normalizedUserId, "done");
    } else if (decision.action === "activate-demo") {
      writeBillingOnboardingState(normalizedUserId, "done");
      setDemoUserId(normalizedUserId);
      setStoredDemoPending(true);
      setDismissed(false);
      const targetPath = decision.redirectTo.split("?")[0];
      if (pathname !== targetPath || !urlDemo) {
        router.replace(decision.redirectTo, { scroll: false });
      }
    }

    prevConfirmedPlanRef.current = true;
  }, [
    billingLoaded,
    invoices,
    limits,
    pathname,
    router,
    subscription,
    urlDemo,
    userId,
  ]);

  useEffect(() => {
    if (!autoDemo || urlDemo) return;

    const params = new URLSearchParams(search);
    params.set("demo", "true");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [autoDemo, urlDemo, pathname, router, search]);

  useEffect(() => {
    setDemoRuntimeActive(isDemo);
    return () => setDemoRuntimeActive(false);
  }, [isDemo]);

  const exitDemo = useCallback(
    (href?: string) => {
      setDismissed(true);
      setDemoRuntimeActive(false);

      if (href) {
        router.replace(href);
        return;
      }

      stripDemoParam();
    },
    [router, stripDemoParam],
  );

  const clearDemoPending = useCallback(() => {
    setDismissed(true);
    clearStoredDemoPending();
    if (userId) writeBillingOnboardingState(userId, "done");
    stripDemoParam();
  }, [stripDemoParam, userId]);

  const value = useMemo(
    () => ({ isDemo, exitDemo, clearDemoPending }),
    [isDemo, exitDemo, clearDemoPending],
  );

  return (
    <DemoModeContext.Provider value={value}>
      {children}
    </DemoModeContext.Provider>
  );
}

export function useDemoMode() {
  return useContext(DemoModeContext);
}
