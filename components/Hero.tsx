"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { HERO_SLIDES, LINKS } from "@/lib/links";

export function Hero() {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 5200);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#ffe5ec]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <p className="mb-2 font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.2em] text-[#9a6b78]">
            Hijabs by Hadicha
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#5c1a2e] sm:text-4xl lg:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-[#6b3d4a] lg:mx-0 mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={LINKS.telegramChat}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-[#ffc2d1] px-8 py-3.5 text-base font-medium text-[#5c1a2e] shadow-md transition-shadow hover:shadow-lg"
              >
                {t.hero.cta}
              </Link>
            </motion.div>
          </div>
          <div className="mt-6 flex justify-center gap-2 lg:justify-start" aria-hidden>
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-[#5c1a2e]" : "w-2 bg-[#ffc2d1]"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y }} className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-[#ffc2d1]/40 ring-1 ring-[#e8a4b8]/30"
          >
            {HERO_SLIDES.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              >
                <Image
                  src={src}
                  alt={`${t.hero.slideAlt} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  placeholder="empty"
                />
              </div>
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5c1a2e]/15 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
