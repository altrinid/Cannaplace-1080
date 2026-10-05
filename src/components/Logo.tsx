import { LogoMark } from "./hemp";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-3">
      <LogoMark inverted={dark} className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="flex flex-col">
        <span className={`t-logo max-sm:text-[calc(22px*var(--hs))] ${dark ? "text-cream" : "text-ink"}`}>Cannaplace</span>
        <span
          className={`text-[9px] leading-3 font-semibold tracking-[0.22em] whitespace-nowrap ${dark ? "text-cream-muted" : "text-kraft-700"}`}
        >
          CBD SHOP · WIEN 1080
        </span>
      </span>
    </span>
  );
}
