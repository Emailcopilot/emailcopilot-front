"use client";

import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useDemoMode } from "@/lib/demo/demo-mode";
import { useI18n } from "@/lib/i18n";
import { useBilling } from "@/lib/useBilling";
import { useCopilotStore } from "@/store/copilotStore";
import { getTourTranslations } from "./tour-i18n";
import { readTourSeen, writeTourSeen } from "./tour-storage";
import {
  getVisibleTourSteps,
  resolveStepIndexAfterModeChange,
} from "./tour-steps";
import type {
  TourLocaleBundle,
  TourMode,
  TourPrepareAction,
  TourScope,
  TourStepConfig,
  TourWizardStep,
} from "./tour-types";

function isTourEntryRoute(pathname: string): boolean {
  return pathname === "/dashboard" || pathname === "/dashboard/copilots";
}

function isTourActiveRoute(pathname: string): boolean {
  return (
    pathname === "/dashboard" || pathname.startsWith("/dashboard/copilots")
  );
}

interface StartTourOptions {
  mode?: TourMode;
  fromBeginning?: boolean;
}

interface TourContextValue {
  canUseTour: boolean;
  isOpen: boolean;
  mode: TourMode;
  activeIndex: number;
  visibleSteps: TourStepConfig[];
  activeStep: TourStepConfig | undefined;
  translations: TourLocaleBundle;
  prepareAction: TourPrepareAction | null;
  startTour: (options?: StartTourOptions) => void;
  restartTour: () => void;
  closeTour: () => void;
  next: () => void;
  back: () => void;
  jump: (index: number) => void;
  setMode: (mode: TourMode) => void;
}

const noop = () => {};

const TourContext = createContext<TourContextValue>({
  canUseTour: false,
  isOpen: false,
  mode: "essentials",
  activeIndex: 0,
  visibleSteps: [],
  activeStep: undefined,
  translations: getTourTranslations("en"),
  prepareAction: null,
  startTour: noop,
  restartTour: noop,
  closeTour: noop,
  next: noop,
  back: noop,
  jump: noop,
  setMode: noop,
});

export function TourProvider({ children }: { children: ReactNode }) {
  const { userId, isLoaded: authLoaded } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const { isDemo, enterDemo } = useDemoMode();
  const { hasActivePlan } = useBilling();
  const { locale } = useI18n();
  const editingLive = useCopilotStore((s) => s.editingLive);
  const copilotStoreMode = useCopilotStore((s) => s.mode);
  const currentWizardStep = useCopilotStore((s) => s.currentStep);

  const canUseTour = hasActivePlan === true;

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setModeState] = useState<TourMode>("essentials");
  const [scope, setScope] = useState<TourScope>("dashboard");
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingRedirectTarget, setPendingRedirectTarget] = useState<
    string | null
  >(null);

  const autoStartedRef = useRef(false);
  const prevIsDemoRef = useRef(isDemo);

  const inWizard = pathname.startsWith("/dashboard/copilots/new");
  const includeLiveEdit = inWizard
    ? isDemo
      ? copilotStoreMode === "edit" && editingLive
      : true
    : isDemo;

  const visibleSteps = useMemo(
    () => getVisibleTourSteps(mode, { scope, includeLiveEdit }),
    [mode, scope, includeLiveEdit],
  );

  const safeIndex =
    visibleSteps.length === 0
      ? 0
      : Math.max(0, Math.min(activeIndex, visibleSteps.length - 1));
  const currentCandidate =
    isOpen && canUseTour ? visibleSteps[safeIndex] : undefined;
  const awaitingRedirect =
    pendingRedirectTarget !== null && pathname !== pendingRedirectTarget;
  const activeStep = awaitingRedirect ? undefined : currentCandidate;
  const translations = useMemo(() => getTourTranslations(locale), [locale]);

  const navigateForStep = useCallback(
    (step: TourStepConfig | undefined, demoActive = isDemo) => {
      if (!step) return;
      if (step.screen === "dashboard") {
        if (pathname !== "/dashboard") {
          router.push(demoActive ? "/dashboard?demo=true" : "/dashboard");
        }
        return;
      }
      if (step.screen === "copilots") {
        if (pathname !== "/dashboard/copilots") {
          router.push(
            demoActive
              ? "/dashboard/copilots?demo=true"
              : "/dashboard/copilots",
          );
        }
        return;
      }
      const targetWizardStep: TourWizardStep = step.wizardStep ?? 1;
      useCopilotStore.getState().setStep(targetWizardStep);
      if (!pathname.startsWith("/dashboard/copilots/new")) {
        router.push(
          demoActive
            ? `/dashboard/copilots/new?edit=-101&step=${targetWizardStep}&demo=true`
            : "/dashboard/copilots/new",
        );
      }
    },
    [isDemo, pathname, router],
  );

  const startTour = useCallback(
    (options?: StartTourOptions) => {
      if (!canUseTour) return;

      const targetScope: TourScope =
        pathname === "/dashboard" || !isTourActiveRoute(pathname)
          ? "dashboard"
          : "copilots";
      const targetMode = options?.mode ?? mode;
      const steps = getVisibleTourSteps(targetMode, {
        scope: targetScope,
        includeLiveEdit:
          inWizard && isDemo ? copilotStoreMode === "edit" && editingLive : true,
      });

      let startIdx = 0;
      if (!options?.fromBeginning && inWizard) {
        const targetScreen = `step${currentWizardStep}` as const;
        const found = steps.findIndex((s) => s.screen === targetScreen);
        if (found >= 0) startIdx = found;
      }

      if (authLoaded) writeTourSeen(userId);
      setScope(targetScope);
      setModeState(targetMode);
      setActiveIndex(startIdx);
      setIsOpen(true);

      const targetStep = steps[startIdx];
      if (!isTourActiveRoute(pathname)) {
        setPendingRedirectTarget("/dashboard");
        enterDemo("/dashboard");
        return;
      }
      setPendingRedirectTarget(null);

      if (inWizard && !isDemo) {
        const wizardStep = targetStep?.wizardStep ?? currentWizardStep;
        enterDemo(`/dashboard/copilots/new?edit=-101&step=${wizardStep}`);
        return;
      }

      enterDemo();

      if (options?.fromBeginning) {
        navigateForStep(targetStep, true);
      } else if (inWizard && targetStep?.wizardStep) {
        useCopilotStore.getState().setStep(targetStep.wizardStep);
      } else if (pathname !== "/dashboard" && pathname !== "/dashboard/copilots") {
        navigateForStep(targetStep, true);
      }
    },
    [
      authLoaded,
      canUseTour,
      copilotStoreMode,
      currentWizardStep,
      editingLive,
      enterDemo,
      inWizard,
      isDemo,
      mode,
      navigateForStep,
      pathname,
      userId,
    ],
  );

  const restartTour = useCallback(() => {
    if (!canUseTour) return;
    const steps = getVisibleTourSteps(mode, { scope, includeLiveEdit: true });
    if (authLoaded) writeTourSeen(userId);
    setActiveIndex(0);
    setIsOpen(true);
    enterDemo();
    navigateForStep(steps[0], true);
  }, [
    authLoaded,
    canUseTour,
    enterDemo,
    mode,
    navigateForStep,
    scope,
    userId,
  ]);

  const closeTour = useCallback(() => {
    if (authLoaded) writeTourSeen(userId);
    setIsOpen(false);
  }, [authLoaded, userId]);

  const jump = useCallback(
    (nextIndex: number) => {
      if (!canUseTour || visibleSteps.length === 0) return;
      const clamped = Math.max(0, Math.min(nextIndex, visibleSteps.length - 1));
      setActiveIndex(clamped);
      setIsOpen(true);
      navigateForStep(visibleSteps[clamped]);
    },
    [canUseTour, navigateForStep, visibleSteps],
  );

  const next = useCallback(() => {
    if (safeIndex >= visibleSteps.length - 1) {
      closeTour();
      return;
    }
    jump(safeIndex + 1);
  }, [closeTour, jump, safeIndex, visibleSteps.length]);

  const back = useCallback(() => {
    if (safeIndex <= 0) return;
    jump(safeIndex - 1);
  }, [jump, safeIndex]);

  const setMode = useCallback(
    (nextMode: TourMode) => {
      if (!canUseTour) return;
      const current = visibleSteps[safeIndex];
      const nextSteps = getVisibleTourSteps(nextMode, {
        scope,
        includeLiveEdit,
      });
      const resolved = resolveStepIndexAfterModeChange(nextSteps, current);
      setModeState(nextMode);
      setActiveIndex(resolved);
      if (!isOpen) setIsOpen(true);
      navigateForStep(nextSteps[resolved]);
    },
    [
      canUseTour,
      includeLiveEdit,
      isOpen,
      navigateForStep,
      safeIndex,
      scope,
      visibleSteps,
    ],
  );

  // Auto-start once per Clerk user when landing on Overview or Copilots in demo mode.
  useEffect(() => {
    if (
      !canUseTour ||
      !authLoaded ||
      !isDemo ||
      isOpen ||
      autoStartedRef.current
    )
      return;
    if (!isTourEntryRoute(pathname)) return;
    if (readTourSeen(userId)) {
      autoStartedRef.current = true;
      return;
    }
    autoStartedRef.current = true;
    const nextScope: TourScope =
      pathname === "/dashboard" ? "dashboard" : "copilots";
    writeTourSeen(userId);
    const raf = requestAnimationFrame(() => {
      setScope(nextScope);
      setModeState("essentials");
      setActiveIndex(0);
      setIsOpen(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [authLoaded, canUseTour, isDemo, isOpen, pathname, userId]);

  // Close the tour if user has no active plan, leaves eligible routes, or exits demo mode mid-tour.
  useEffect(() => {
    if (pendingRedirectTarget && pathname === pendingRedirectTarget) {
      const clearRaf = requestAnimationFrame(() =>
        setPendingRedirectTarget(null),
      );
      return () => cancelAnimationFrame(clearRaf);
    }
    const exitedDemo = prevIsDemoRef.current && !isDemo;
    prevIsDemoRef.current = isDemo;
    if (!isOpen) return;
    if (pendingRedirectTarget && !isTourActiveRoute(pathname)) {
      return;
    }
    if (!canUseTour || !isTourActiveRoute(pathname) || exitedDemo) {
      const raf = requestAnimationFrame(() => setIsOpen(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [canUseTour, isDemo, isOpen, pathname, pendingRedirectTarget]);

  // Keyboard navigation while tour is open (disabled inside inputs/TipTap).
  useEffect(() => {
    if (!isOpen || !canUseTour) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        back();
      } else if (event.key === "Escape") {
        event.preventDefault();
        closeTour();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [back, canUseTour, closeTour, isOpen, next]);

  const value = useMemo<TourContextValue>(
    () => ({
      canUseTour,
      isOpen,
      mode,
      activeIndex: safeIndex,
      visibleSteps,
      activeStep,
      translations,
      prepareAction: activeStep?.prepare ?? null,
      startTour,
      restartTour,
      closeTour,
      next,
      back,
      jump,
      setMode,
    }),
    [
      activeStep,
      back,
      canUseTour,
      closeTour,
      isOpen,
      jump,
      mode,
      next,
      restartTour,
      safeIndex,
      setMode,
      startTour,
      translations,
      visibleSteps,
    ],
  );

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}

export function useTour() {
  return useContext(TourContext);
}
