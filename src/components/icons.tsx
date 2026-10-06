// Same 24px line icons as the "Icon/*" components in Figma (stroke 1.6, round caps).
const PATHS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5"/>',
  bag: '<path d="M5.5 8h13l-1 13h-11l-1-13z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  "chevron-right": '<path d="M9.5 6l6 6-6 6"/>',
  "chevron-down": '<path d="M6 9.5l6 6 6-6"/>',
  "map-pin": '<path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  phone:
    '<path d="M6.5 3.5h3l1.6 4.4-2 1.3a11.5 11.5 0 0 0 5.7 5.7l1.3-2 4.4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
  flask:
    '<path d="M9 3h6"/><path d="M10 3v6.2L4.6 18.4A1.8 1.8 0 0 0 6.2 21h11.6a1.8 1.8 0 0 0 1.6-2.6L14 9.2V3"/><path d="M7.2 15h9.6"/>',
  chat: '<path d="M20.5 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.5A8 8 0 1 1 20.5 11.5z"/>',
  package:
    '<path d="M3.5 7.5L12 3.2l8.5 4.3v9L12 20.8l-8.5-4.3v-9z"/><path d="M3.5 7.5L12 11.8l8.5-4.3"/><path d="M12 11.8v9"/>',
  tag: '<path d="M3.5 11.6V4.5a1 1 0 0 1 1-1h7.1l9 9-8.1 8.1-9-9z"/><circle cx="8" cy="8" r="1.4"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  instagram:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.8"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"/>',
  leaf: '<path d="M4.5 19.5C4.5 10.5 10 4.5 19.5 4.5c0 9.5-6 15-15 15z"/><path d="M4.5 19.5l9-9"/>',
  "shield-check": '<path d="M12 3l7.5 2.8v5.7c0 4.8-3.2 8-7.5 9.5-4.3-1.5-7.5-4.7-7.5-9.5V5.8L12 3z"/><path d="M8.6 12l2.4 2.4 4.4-4.6"/>',
  tram: '<rect x="6" y="4.5" width="12" height="12.5" rx="3"/><path d="M6 11h12"/><path d="M9.5 17l-2 3.5"/><path d="M14.5 17l2 3.5"/><path d="M10 2.5h4"/><path d="M12 2.5v2"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  "file-text":
    '<path d="M14 3H6.5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V7.5L14 3z"/><path d="M14 3v4.5h4.5"/><path d="M9 12.5h6"/><path d="M9 16.5h4"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>',
  mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>',
  close: '<path d="M6 6l12 12"/><path d="M18 6L6 18"/>',
  "chevron-left": '<path d="M14.5 6l-6 6 6 6"/>',
  pause: '<path d="M9 6v12"/><path d="M15 6v12"/>',
  play: '<path d="M8 5.5v13l10.5-6.5L8 5.5z"/>',
  trash: '<path d="M4.5 7h15"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l1 13h9l1-13"/>',
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({
  name,
  size = 24,
  strokeWidth = 1.6,
  filled = false,
  className,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  /** Fills the outline shape, e.g. the heart of a saved product. */
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}

const STAR = "M12 3.2l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.5l6-.8L12 3.2z";

export function Stars({ size = 14, className }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-star ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d={STAR} />
        </svg>
      ))}
    </span>
  );
}
