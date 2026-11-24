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
import { useCopilotStore } from "@/store/copilotStore";
import { getTourTranslations } from "./tour-i18n";
import {
  getVisibleTourSteps,
  resolveStepIndexAfterModeChange,
} from "./tour-steps";
import type {
  TourLocaleBundle,
  TourMode,
  TourPrepareAction,
  TourStepConfig,
  TourWizardStep,
} from "./tour-types";

const TOUR_SEEN_PREFIX = "emailcopilot:copilot-tour-seen:";

function isTourEntryRoute(pathname: string): boolean {
  return pathname === "/dashboard" || pathname === "/dashboard/copilots";
}

function isTourActiveRoute(pathname: string): boolean {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/copilots");
}

function tourSeenKey(userId: string | null | undefined) {
  return `${TOUR_SEEN_PREFIX}${userId || "anon"}`;
}

function readTourSeen(userId: string | null | undefined): boolean {
  try {
    return window.localStorage.getItem(tourSeenKey(userId)) === "1";
  } catch {
    return false;
  }
}

function writeTourSeen(userId: string | null | undefined): void {
  try {
    window.localStorage.setItem(tourSeenKey(userId), "1");
  } catch {
    // storage unavailable
  }
}

interface StartTourOptions {
  mode?: TourMode;
  fromBeginning?: boolean;
}

interface TourContextValue {
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
  const { isDemo } = useDemoMode();
  const { locale } = useI18n();
  const editingLive = useCopilotStore((s) => s.editingLive);
  const copilotStoreMode = useCopilotStore((s) => s.mode);
  const currentWizardStep = useCopilotStore((s) => s.currentStep);

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setModeState] = useState<TourMode>("essentials");
  const [activeIndex, setActiveIndex] = useState(0);

  const autoStartedRef = useRef(false);
  const prevIsDemoRef = useRef(isDemo);
  const entryPathRef = useRef<"/dashboard" | "/dashboard/copilots">(
    "/dashboard/copilots",
  );

  const inWizard = pathname.startsWith("/dashboard/copilots/new");
  const includeLiveEdit = inWizard
    ? copilotStoreMode === "edit" && editingLive
    : isDemo;

  const visibleSteps = useMemo(
    () => getVisibleTourSteps(mode, { includeLiveEdit }),
    [mode, includeLiveEdit],
  );

  const safeIndex =
    visibleSteps.length === 0
      ? 0
      : Math.max(0, Math.min(activeIndex, visibleSteps.length - 1));
  const activeStep = isOpen ? visibleSteps[safeIndex] : undefined;
  const translations = useMemo(() => getTourTranslations(locale), [locale]);

  const navigateForStep = useCallback(
    (step: TourStepConfig | undefined) => {
      if (!step) return;
      if (step.screen === "copilots") {
        if (step.id === "copilots-create") {
          if (!isTourEntryRoute(pathname)) {
            router.push(
              isDemo ? `${entryPathRef.current}?demo=true` : entryPathRef.current,
            );
          }
          return;
        }
        if (pathname !== "/dashboard/copilots") {
          router.push(isDemo ? "/dashboard/copilots?demo=true" : "/dashboard/copilots");
        }
        return;
      }
      const targetWizardStep: TourWizardStep = step.wizardStep ?? 1;
      useCopilotStore.getState().setStep(targetWizardStep);
      if (!pathname.startsWith("/dashboard/copilots/new")) {
        router.push(
          isDemo
            ? `/dashboard/copilots/new?edit=-101&step=${targetWizardStep}&demo=true`
            : "/dashboard/copilots/new",
        );
      }
    },
    [isDemo, pathname, router],
  );

  const startTour = useCallback(
    (options?: StartTourOptions) => {
      if (isTourEntryRoute(pathname)) {
        entryPathRef.current =
          pathname === "/dashboard" ? "/dashboard" : "/dashboard/copilots";
      }
      const targetMode = options?.mode ?? mode;
      const steps = getVisibleTourSteps(targetMode, { includeLiveEdit });
      let startIdx = 0;

      if (!options?.fromBeginning && pathname.startsWith("/dashboard/copilots/new")) {
        const targetScreen = `step${currentWizardStep}` as const;
        const found = steps.findIndex((s) => s.screen === targetScreen);
        if (found >= 0) startIdx = found;
      }

      if (authLoaded) writeTourSeen(userId);
      setModeState(targetMode);
      setActiveIndex(startIdx);
      setIsOpen(true);

      const targetStep = steps[startIdx];
      if (options?.fromBeginning) {
        navigateForStep(targetStep);
      } else if (pathname.startsWith("/dashboard/copilots/new") && targetStep?.wizardStep) {
        useCopilotStore.getState().setStep(targetStep.wizardStep);
      } else if (!isTourEntryRoute(pathname)) {
        navigateForStep(targetStep);
      }
    },
    [
      authLoaded,
      currentWizardStep,
      includeLiveEdit,
      mode,
      navigateForStep,
      pathname,
      userId,
    ],
  );

  const restartTour = useCallback(() => {
    const steps = getVisibleTourSteps(mode, { includeLiveEdit });
    if (authLoaded) writeTourSeen(userId);
    setActiveIndex(0);
    setIsOpen(true);
    navigateForStep(steps[0]);
  }, [authLoaded, includeLiveEdit, mode, navigateForStep, userId]);

  const closeTour = useCallback(() => {
    if (authLoaded) writeTourSeen(userId);
    setIsOpen(false);
  }, [authLoaded, userId]);

  const jump = useCallback(
    (nextIndex: number) => {
      if (visibleSteps.length === 0) return;
      const clamped = Math.max(0, Math.min(nextIndex, visibleSteps.length - 1));
      setActiveIndex(clamped);
      setIsOpen(true);
      navigateForStep(visibleSteps[clamped]);
    },
    [navigateForStep, visibleSteps],
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
      const current = visibleSteps[safeIndex];
      const nextSteps = getVisibleTourSteps(nextMode, { includeLiveEdit });
      const resolved = resolveStepIndexAfterModeChange(nextSteps, current);
      setModeState(nextMode);
      setActiveIndex(resolved);
      if (!isOpen) setIsOpen(true);
      navigateForStep(nextSteps[resolved]);
    },
    [includeLiveEdit, isOpen, navigateForStep, safeIndex, visibleSteps],
  );

  // Auto-start once per Clerk user when landing on Overview or Copilots in demo mode.
  useEffect(() => {
    if (!authLoaded || !isDemo || isOpen || autoStartedRef.current) return;
    if (!isTourEntryRoute(pathname)) return;
    if (readTourSeen(userId)) {
      autoStartedRef.current = true;
      return;
    }
    autoStartedRef.current = true;
    entryPathRef.current =
      pathname === "/dashboard" ? "/dashboard" : "/dashboard/copilots";
    writeTourSeen(userId);
    const raf = requestAnimationFrame(() => {
      setModeState("essentials");
      setActiveIndex(0);
      setIsOpen(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [authLoaded, isDemo, isOpen, pathname, userId]);

  // Close the tour if user leaves Overview/Copilot routes or exits demo mode mid-tour.
  useEffect(() => {
    const exitedDemo = prevIsDemoRef.current && !isDemo;
    prevIsDemoRef.current = isDemo;
    if (!isOpen) return;
    if (!isTourActiveRoute(pathname) || exitedDemo) {
      const raf = requestAnimationFrame(() => setIsOpen(false));
      return () => cancelAnimationFrame(raf);
    }
  }, [isDemo, isOpen, pathname]);

  // Keyboard navigation while tour is open (disabled inside inputs/TipTap).
  useEffect(() => {
    if (!isOpen) return;
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
  }, [back, closeTour, isOpen, next]);

  const value = useMemo<TourContextValue>(
    () => ({
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
