"use client";

import Image from "next/image";

type Props = {
  /** To‘liq ekran (kirish) yoki marshrut loading */
  variant?: "fullscreen" | "route";
};

export function BrandLoadSurface({ variant = "fullscreen" }: Props) {
  const isFull = variant === "fullscreen";

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#ffe5ec] px-6 ${
        isFull ? "min-h-[100dvh]" : "min-h-[70vh]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#ffe5ec] via-[#fff8fa] to-[#ffc2d1]/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#ffc2d1]/40 blur-3xl motion-reduce:opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-64 w-64 rounded-full bg-[#e8a4b8]/30 blur-3xl motion-reduce:opacity-50"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="animate-loader-breathe relative">
          <div className="loader-logo-ring relative h-28 w-28 rounded-full sm:h-32 sm:w-32">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="rounded-full object-cover"
              sizes="128px"
              priority
            />
          </div>
        </div>

        <div className="text-center">
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.12em] text-[#5c1a2e] sm:text-xl">
            Hijabs by Hadicha
          </p>
          <p className="mt-1 text-sm italic text-[#9a6b78]">woman style</p>
        </div>

        <div className="loader-shimmer-track h-1.5 w-44 overflow-hidden rounded-full bg-[#ffc2d1]/60 sm:w-52">
          <div className="loader-shimmer-bar h-full w-2/5 rounded-full bg-gradient-to-r from-[#ffc2d1] via-white to-[#ffc2d1]" />
        </div>
      </div>

      <p className="sr-only">Loading</p>
    </div>
  );
}
