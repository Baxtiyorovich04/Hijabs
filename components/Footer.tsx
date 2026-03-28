"use client";

import { useI18n } from "@/components/i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-[#ffc2d1]/40 bg-[#ffe5ec]/90 py-8 text-center text-sm text-[#7a5260]">
      <p className="font-[family-name:var(--font-display)] text-[#5c1a2e]">Hijabs by Hadicha</p>
      <p className="mt-2">{t.footer.rights}</p>
    </footer>
  );
}
