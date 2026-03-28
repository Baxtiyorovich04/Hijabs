"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/components/i18n/I18nProvider";
import { LINKS } from "@/lib/links";

const USERNAME = "ruunass";

export function TelegramForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const text = [name.trim() && `${t.contacts.formName}: ${name.trim()}`, message.trim()]
      .filter(Boolean)
      .join("\n");
    const url = `https://t.me/${USERNAME}?text=${encodeURIComponent(text || " ")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-3xl border-2 border-[#ffc2d1] bg-white/95 p-6 shadow-md"
    >
      <h3 className="font-[family-name:var(--font-display)] text-lg text-[#5c1a2e]">
        {t.contacts.formTitle}
      </h3>
      <p className="mt-1 text-xs text-[#9a6b78]">Telegram — tez javob</p>
      <label className="mt-4 block">
        <span className="sr-only">{t.contacts.formName}</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t.contacts.formName}
          className="mt-1 w-full rounded-xl border border-[#ffc2d1]/80 bg-[#ffe5ec]/30 px-4 py-2.5 text-[#5c1a2e] outline-none ring-[#ffc2d1] transition-shadow focus:ring-2"
          autoComplete="name"
        />
      </label>
      <label className="mt-3 block">
        <span className="sr-only">{t.contacts.formMessage}</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.contacts.formMessage}
          rows={3}
          className="mt-1 w-full resize-y rounded-xl border border-[#ffc2d1]/80 bg-[#ffe5ec]/30 px-4 py-2.5 text-[#5c1a2e] outline-none ring-[#ffc2d1] transition-shadow focus:ring-2"
        />
      </label>
      <motion.button
        type="submit"
        className="mt-5 w-full rounded-full bg-[#ffc2d1] py-3 font-medium text-[#5c1a2e] shadow-sm"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t.contacts.formSubmit}
      </motion.button>
      <a
        href={LINKS.telegramChat}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-center text-sm text-[#7a5260] underline-offset-2 hover:underline"
      >
        @ruunass
      </a>
    </form>
  );
}
