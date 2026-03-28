"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section
      id="product"
      className="scroll-mt-24 border-y border-[#ffc2d1]/35 bg-white/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5c1a2e] sm:text-3xl">
            {t.about.title}
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-[#6b3d4a]">{t.about.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
