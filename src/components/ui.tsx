import type { ReactNode } from "react";
import type { Tone } from "@/content/types";
import { Icon, type IconName } from "./icons";

export const TONE_BG: Record<Tone, string> = {
  sage: "bg-sage-100",
  sageStrong: "bg-sage-200",
  kraft: "bg-kraft-100",
  subtle: "bg-subtle",
};

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`t-eyebrow ${dark ? "text-kraft-400" : "text-kraft-700"}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="t-h2 text-ink">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group t-label inline-flex shrink-0 items-center gap-2 text-ink hover:text-forest-700">
      {children}
      <Icon name="arrow-right" size={18} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

const BADGE_TONES = {
  dark: "bg-forest-700 text-cream",
  kraft: "bg-kraft-400 text-ink",
  light: "bg-card text-ink",
} as const;

export function Badge({ children, tone }: { children: ReactNode; tone: keyof typeof BADGE_TONES }) {
  return (
    <span className={`t-eyebrow inline-flex rounded-full px-2.5 py-[5px] ${BADGE_TONES[tone]}`}>{children}</span>
  );
}

export function IconCircle({
  icon,
  size = 52,
  iconSize = 24,
  className = "bg-sage-100 text-ink",
}: {
  icon: IconName;
  size?: number;
  iconSize?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon name={icon} size={iconSize} />
    </span>
  );
}
