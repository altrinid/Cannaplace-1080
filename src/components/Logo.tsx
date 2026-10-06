import { LogoMark } from "./hemp";

/** `compact` shrinks the logo on phones so the header icons fit next to it. */
export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center ${compact ? "gap-2 sm:gap-3" : "gap-2.5 sm:gap-3"}`}>
      <LogoMark
        inverted={dark}
        className={`shrink-0 sm:h-11 sm:w-11 ${compact ? "h-[34px] w-[34px]" : "h-10 w-10"}`}
      />
      <span className={`flex flex-col ${compact ? "max-[359px]:hidden" : ""}`}>
        <span
          className={`t-logo ${compact ? "max-sm:text-[calc(19px*var(--hs))] max-sm:leading-6" : "max-sm:text-[calc(22px*var(--hs))]"} ${dark ? "text-cream" : "text-ink"}`}
        >
          Cannaplace
        </span>
        <span
          className={`text-[9px] leading-3 font-semibold tracking-[0.22em] whitespace-nowrap ${compact ? "max-sm:hidden" : ""} ${dark ? "text-cream-muted" : "text-kraft-700"}`}
        >
          CBD SHOP · WIEN 1080
        </span>
      </span>
    </span>
  );
}
