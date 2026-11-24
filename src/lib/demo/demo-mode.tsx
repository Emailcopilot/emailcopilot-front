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

const BLOCKED_PREFIXES = [
  "/dashboard/copilots/new",
  "/dashboard/settings",
  "/dashboard/billing",
];

function isDemoEligible(pathname: string, search: string) {
  if (!pathname.startsWith("/dashboard")) return false;

  const blocked = BLOCKED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  if (blocked) return false;

  const params = new URLSearchParams(search);
  if (params.get("new") === "true") return false;
  if (params.has("edit") || params.has("duplicate")) return false;

  return true;
}

export function DemoModeProvider({ children }: { children: React.ReactNode }) {
  const { userId } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.toString();
  const pending = useDemoPending();

  const [dismissed, setDismissed] = useState(false);

  const demoParam = searchParams.get("demo");
  const urlDemo = demoParam === "true";
  const explicitOff = demoParam === "false";
  const eligible = useMemo(
    () => isDemoEligible(pathname, search),
    [pathname, search],
  );
  const autoDemo = pending && !dismissed && eligible;
  const isDemo = (urlDemo || autoDemo) && !dismissed;

  const previousDemoParam = useRef(demoParam);
  const prevUrlDemoRef = useRef(false);

  useEffect(() => {
    setDemoUserId(userId ?? null);
  }, [userId]);

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  useEffect(() => {
    if (previousDemoParam.current === demoParam) return;
    previousDemoParam.current = demoParam;
    if (demoParam === "true") setDismissed(false);
  }, [demoParam]);

  useEffect(() => {
    if (!userId) return;

    const enteredUrlDemo = urlDemo && !prevUrlDemoRef.current;
    prevUrlDemoRef.current = urlDemo;

    if (enteredUrlDemo && !explicitOff) {
      setStoredDemoPending(true);
      return;
    }

    if (explicitOff) {
      clearStoredDemoPending();
      setDismissed(true);
    }
  }, [urlDemo, explicitOff, userId]);

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

  const stripDemoParam = useCallback(() => {
    const params = new URLSearchParams(search);
    params.delete("demo");
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }, [pathname, router, search]);

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
    stripDemoParam();
  }, [stripDemoParam]);

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
