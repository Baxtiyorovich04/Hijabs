"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LINKS } from "@/lib/links";

const headerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-5 w-6" aria-hidden>
      <motion.span
        className="absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-[#5c1a2e]"
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-[9px] block h-0.5 w-6 rounded-full bg-[#5c1a2e]"
        animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 top-[18px] block h-0.5 w-6 rounded-full bg-[#5c1a2e]"
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
    </span>
  );
}

export function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  const links = [
    { href: "#product", label: t.nav.product },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#delivery", label: t.nav.delivery },
    { href: "#contacts", label: t.nav.contacts },
    { href: "#reviews", label: t.nav.reviews },
  ];

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen, closeMenu]);

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={headerContainer}
      className="sticky top-0 z-50 border-b border-[#ffc2d1]/40 bg-[#ffe5ec]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <motion.div variants={headerItem} className="flex min-w-0 items-center gap-3">
          <Link
            href="#"
            className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#d4af37]/50 ring-offset-2 ring-offset-[#ffe5ec]"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Hijabs by Hadicha"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </Link>
          <span className="hidden min-w-0 truncate font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[#5c1a2e] sm:inline md:text-base">
            Hijabs by Hadicha
          </span>
        </motion.div>

        <motion.nav
          variants={headerItem}
          className="hidden flex-1 flex-wrap justify-center gap-x-5 gap-y-1 md:flex"
          aria-label="Main"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-[#6b3d4a] transition-colors hover:text-[#5c1a2e] underline-offset-4 hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </motion.nav>

        <motion.div variants={headerItem} className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher layoutGroup="desktop" />
          <motion.a
            href={LINKS.telegramChat}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#ffc2d1] px-4 py-2 text-sm font-medium text-[#5c1a2e] shadow-sm transition-shadow hover:shadow-md"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.nav.order}
          </motion.a>
        </motion.div>

        <motion.div variants={headerItem} className="flex md:hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ffc2d1] bg-white/80 text-[#5c1a2e] shadow-sm"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-[#5c1a2e]/25 backdrop-blur-[2px] md:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <motion.aside
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-[min(100%,20rem)] flex-col border-l border-[#ffc2d1] bg-[#ffe5ec] shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b border-[#ffc2d1]/50 px-4 py-3">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-[#5c1a2e]">
                  {t.nav.menu}
                </span>
                <button
                  type="button"
                  className="rounded-full bg-[#ffc2d1]/60 px-3 py-1.5 text-sm font-medium text-[#5c1a2e]"
                  onClick={closeMenu}
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4" aria-label="Main">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-3 py-3 text-[#5c1a2e] transition-colors hover:bg-[#ffc2d1]/50"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="border-t border-[#ffc2d1]/50 p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#9a6b78]">
                  {t.nav.language}
                </p>
                <LanguageSwitcher layoutGroup="drawer" fullWidth />
                <motion.a
                  href={LINKS.telegramChat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-[#ffc2d1] px-4 py-3 text-sm font-medium text-[#5c1a2e] shadow-sm"
                  whileTap={{ scale: 0.98 }}
                  onClick={closeMenu}
                >
                  {t.nav.order}
                </motion.a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
