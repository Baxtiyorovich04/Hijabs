"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BrandLoadSurface } from "@/components/BrandLoadSurface";

export function SiteEntranceLoader() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">("show");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const fadeStarted = useRef(false);

  useEffect(() => {
    let cancelled = false;
    timers.current = [];
    fadeStarted.current = false;

    const queue = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timers.current.push(id);
    };

    const reduce =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const startFade = () => {
      if (cancelled || fadeStarted.current) return;
      fadeStarted.current = true;
      if (reduce) {
        setPhase("done");
        return;
      }
      setPhase("hide");
    };

    const minMs = reduce ? 0 : 950;
    const t0 = typeof performance !== "undefined" ? performance.now() : Date.now();

    const scheduleStartFade = () => {
      const now = typeof performance !== "undefined" ? performance.now() : Date.now();
      const wait = Math.max(0, minMs - (now - t0));
      queue(startFade, wait);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      scheduleStartFade();
    } else if (typeof window !== "undefined") {
      window.addEventListener("load", scheduleStartFade, { once: true });
    }

    queue(startFade, reduce ? 250 : 3500);

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase !== "hide") return;
    const id = setTimeout(() => setPhase("done"), 460);
    return () => clearTimeout(id);
  }, [phase]);

  if (phase === "done") return null;

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-busy={phase === "show"}
      className="fixed inset-0 z-[200]"
      initial={false}
      animate={{ opacity: phase === "hide" ? 0 : 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: phase === "hide" ? "none" : "auto" }}
    >
      <BrandLoadSurface variant="fullscreen" />
    </motion.div>
  );
}
