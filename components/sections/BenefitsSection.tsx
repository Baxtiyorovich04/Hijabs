"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";

const icons = [
  <span key="1" className="text-2xl" aria-hidden>
    ✧
  </span>,
  <span key="2" className="text-2xl" aria-hidden>
    ◇
  </span>,
  <span key="3" className="text-2xl" aria-hidden>
    ❀
  </span>,
];

export function BenefitsSection() {
  const { t } = useI18n();

  return (
    <section id="benefits" className="scroll-mt-24 bg-[#ffe5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5c1a2e] sm:text-3xl"
        >
          {t.benefits.title}
        </motion.h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {t.benefits.items.map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border-2 border-[#ffc2d1] bg-white/85 p-6 text-center shadow-sm"
            >
              <div className="mb-3 flex justify-center text-[#b76b84]">{icons[i]}</div>
              <p className="text-[#6b3d4a] leading-relaxed">{text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
