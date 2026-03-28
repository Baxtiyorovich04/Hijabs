"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";

export function DeliverySection() {
  const { t } = useI18n();

  return (
    <section id="delivery" className="scroll-mt-24 bg-white/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5c1a2e] sm:text-3xl"
        >
          {t.delivery.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-[#6b3d4a]"
        >
          {t.delivery.lead}
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative overflow-hidden rounded-3xl border-2 border-dashed border-[#ffc2d1] bg-[#ffe5ec]/80 p-8 shadow-inner"
          >
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffc2d1] text-2xl text-[#5c1a2e]"
              aria-hidden
            >
              📦
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl text-[#5c1a2e]">
              {t.delivery.boxTitle}
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b3d4a]">{t.delivery.boxText}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="relative overflow-hidden rounded-3xl border-2 border-dashed border-[#ffc2d1] bg-[#ffe5ec]/80 p-8 shadow-inner"
          >
            <div
              className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffc2d1] text-2xl text-[#5c1a2e]"
              aria-hidden
            >
              🎁
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-xl text-[#5c1a2e]">
              {t.delivery.giftTitle}
            </h3>
            <p className="mt-2 leading-relaxed text-[#6b3d4a]">{t.delivery.giftText}</p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
