"use client";

import { motion } from "framer-motion";
import { localeLabels, locales, type Locale } from "@/lib/i18n/translations";
import { useI18n } from "./I18nProvider";

type LanguageSwitcherProps = {
  /** Alohida instanslar (masalan, drawer + header) uchun layoutId ziddiyatini oldini olish */
  layoutGroup?: string;
  /** Vertikal menyu ichida to‘liq kenglik */
  fullWidth?: boolean;
};

export function LanguageSwitcher({ layoutGroup = "bar", fullWidth }: LanguageSwitcherProps) {
  const { locale, setLocale } = useI18n();
  const pillId = `lang-pill-${layoutGroup}`;

  return (
    <div
      className={`flex flex-wrap items-center gap-1 rounded-full border border-[#e8a4b8]/50 bg-white/70 p-1 shadow-sm backdrop-blur-sm ${fullWidth ? "w-full justify-center" : ""}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <motion.button
            key={l}
            type="button"
            onClick={() => setLocale(l as Locale)}
            className={`relative rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 sm:text-sm ${
              active ? "text-[#5c1a2e]" : "text-[#7a5260] hover:text-[#5c1a2e]"
            } ${fullWidth ? "flex-1 basis-[30%] min-w-0" : ""}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {active && (
              <motion.span
                layoutId={pillId}
                className="absolute inset-0 rounded-full bg-[#ffc2d1]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{localeLabels[l]}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
