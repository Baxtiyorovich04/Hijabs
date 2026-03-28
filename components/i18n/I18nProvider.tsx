"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Locale } from "@/lib/i18n/translations";
import { translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "hijabs-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (typeof translations)["uz-latn"];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(STORAGE_KEY);
  if (v === "uz-latn" || v === "uz-cyrl" || v === "ru") return v;
  return null;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uz-latn");

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "ru" ? "ru" : locale === "uz-cyrl" ? "uz-Cyrl" : "uz-Latn";
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
