"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LINKS } from "@/lib/links";
import { TelegramForm } from "@/components/TelegramForm";

export function ContactsSection() {
  const { t } = useI18n();

  const items = [
    { label: t.contacts.telegram, href: LINKS.telegramChat, sub: "@ruunass" },
    { label: t.contacts.channel, href: LINKS.telegramChannel, sub: "t.me/hijabbyhadicha" },
    { label: t.contacts.instagram, href: LINKS.instagram, sub: "@hijab.by.hadicha" },
  ];

  return (
    <section id="contacts" className="scroll-mt-24 bg-[#ffe5ec] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-[family-name:var(--font-display)] text-2xl font-semibold text-[#5c1a2e] sm:text-3xl"
        >
          {t.contacts.title}
        </motion.h2>

        <ul className="mt-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
          {items.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex-1 sm:min-w-[200px] sm:flex-none"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-[#ffc2d1] bg-white/90 px-6 py-4 text-center shadow-sm transition-all hover:border-[#e8a4b8] hover:shadow-md"
              >
                <span className="block font-medium text-[#5c1a2e]">{item.label}</span>
                <span className="mt-1 block text-sm text-[#7a5260]">{item.sub}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-lg"
        >
          <TelegramForm />
        </motion.div>
      </div>
    </section>
  );
}
