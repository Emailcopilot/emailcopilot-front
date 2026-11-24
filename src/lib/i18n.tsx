"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { MESSAGES } from "./i18n-messages";

export const LOCALES = [
  { code: "en", label: "English" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

const STORAGE_KEY = "emailcopilot.locale";

function isLocale(value: string | null | undefined): value is Locale {
  return LOCALES.some((l) => l.code === value);
}

/** Saved choice first, then the browser language, otherwise English. */
function detectLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // storage unavailable
  }
  const browser =
    typeof navigator !== "undefined"
      ? navigator.language?.slice(0, 2).toLowerCase()
      : undefined;
  return isLocale(browser) ? browser : "en";
}

interface I18nValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /**
   * Translate an English UI text; falls back to the text itself.
   * Placeholders like {count} are filled from `vars`.
   */
  t: (text: string, vars?: Record<string, string | number>) => string;
}

const I18nContext = createContext<I18nValue>({
  locale: "en",
  setLocale: () => {},
  t: (text) => text,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable: the choice lasts for this visit only
    }
  }, []);

  const t = useCallback(
    (text: string, vars?: Record<string, string | number>) => {
      const out =
        locale === "en" ? text : (MESSAGES[locale]?.[text] ?? text);
      if (!vars) return out;
      return out.replace(/\{(\w+)\}/g, (m, key: string) =>
        key in vars ? String(vars[key]) : m,
      );
    },
    [locale],
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
