import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-8 bg-[#ffe5ec] px-4"
      role="status"
      aria-live="polite"
    >
      <div className="relative h-24 w-24 animate-pulse rounded-full ring-4 ring-[#ffc2d1] ring-offset-4 ring-offset-[#ffe5ec]">
        <Image src="/logo.png" alt="" fill className="rounded-full object-cover" sizes="96px" priority />
      </div>
      <p className="sr-only">Loading</p>
    </div>
  );
}
