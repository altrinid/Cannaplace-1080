// Stylised hemp leaf — same geometry as the generator used for the Figma illustrations.
type LeafSpec = { angles: number[]; lens: number[] };

const LEAF7: LeafSpec = { angles: [-100, -62, -30, 0, 30, 62, 100], lens: [0.36, 0.64, 0.88, 1, 0.88, 0.64, 0.36] };
const LEAF5: LeafSpec = { angles: [-66, -33, 0, 33, 66], lens: [0.55, 0.82, 1, 0.82, 0.55] };

const r2 = (n: number) => Math.round(n * 100) / 100;

function rotate(x: number, y: number, deg: number): [number, number] {
  const a = (deg * Math.PI) / 180;
  return [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a)];
}

function leafletPath(cx: number, cy: number, length: number, width: number, deg: number) {
  const pts = (
    [
      [width * 1.15, -length * 0.22],
      [width * 0.95, -length * 0.68],
      [0, -length],
      [-width * 0.95, -length * 0.68],
      [-width * 1.15, -length * 0.22],
      [0, 0],
    ] as const
  ).map(([x, y]) => {
    const [rx, ry] = rotate(x, y, deg);
    return `${r2(cx + rx)} ${r2(cy + ry)}`;
  });
  return `M${cx} ${cy}C${pts[0]} ${pts[1]} ${pts[2]}C${pts[3]} ${pts[4]} ${pts[5]}Z`;
}

function veinPath(cx: number, cy: number, length: number, deg: number) {
  const [x, y] = rotate(0, -length * 0.9, deg);
  return `M${cx} ${cy}L${r2(cx + x)} ${r2(cy + y)}`;
}

function stemPath(cx: number, cy: number, length: number, stem: number) {
  return `M${cx} ${cy}C${cx} ${r2(cy + length * stem * 0.5)} ${r2(cx + length * 0.03)} ${r2(
    cy + length * stem * 0.8,
  )} ${r2(cx + length * 0.06)} ${r2(cy + length * stem)}`;
}

export function HempLeafLine({ className, strokeWidth = 1.6 }: { className?: string; strokeWidth?: number }) {
  const cx = 160;
  const cy = 210;
  const length = 160;
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {LEAF7.angles.map((deg, i) => {
        const l = length * LEAF7.lens[i];
        return (
          <g key={deg}>
            <path d={leafletPath(cx, cy, l, l * 0.15, deg)} strokeWidth={strokeWidth} />
            <path d={veinPath(cx, cy, l, deg)} strokeWidth={strokeWidth * 0.7} />
          </g>
        );
      })}
      <path d={stemPath(cx, cy, length, 0.55)} strokeWidth={length * 0.035} />
    </svg>
  );
}

export function LogoMark({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  const cx = 22;
  const cy = 29;
  const length = 17;
  const leafClass = inverted ? "fill-forest-700" : "fill-cream";
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true">
      <circle cx="22" cy="22" r="22" className={inverted ? "fill-cream" : "fill-forest-700"} />
      {LEAF5.angles.map((deg, i) => {
        const l = length * LEAF5.lens[i];
        return <path key={deg} d={leafletPath(cx, cy, l, l * 0.2, deg)} className={leafClass} />;
      })}
      <path
        d={stemPath(cx, cy, length, 0.3)}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        className={inverted ? "stroke-forest-700" : "stroke-cream"}
      />
    </svg>
  );
}
