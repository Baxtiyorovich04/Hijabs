"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";

export function ReviewsSection() {
  const { t } = useI18n();

  return (
    <section id="reviews" className="scroll-mt-24 border-t border-[#ffc2d1]/40 bg-white/80 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5c1a2e] sm:text-3xl"
        >
          {t.reviews.title}
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((item, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border-l-4 border-[#ffc2d1] bg-[#ffe5ec]/50 p-6 shadow-sm"
            >
              <p className="text-[#5c1a2e] leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-3 text-sm font-medium text-[#9a6b78]">— {item.name}</footer>
            </motion.blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-[#9a6b78]">{t.reviews.note}</p>
      </div>
    </section>
  );
}
