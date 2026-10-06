// Opening hours, rating and review count are placeholders until confirmed by the shop (see README).
export const SHOP = {
  name: "Cannaplace 1080 CBD Shop",
  street: "Josefstädter Straße 56",
  streetShort: "Josefstädter Str. 56",
  postalCode: "1080",
  locality: "Wien",
  city: "1080 Wien",
  country: "AT",
  phoneDisplay: "+43 676 7731571",
  phoneHref: "tel:+436767731571",
  phoneE164: "+436767731571",
  instagramHandle: "@cannaplace.1080",
  instagramUrl: "https://www.instagram.com/cannaplace.1080/",
  mapsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Josefst%C3%A4dter+Stra%C3%9Fe+56%2C+1080+Wien",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Cannaplace+1080+CBD+Shop%2C+Josefst%C3%A4dter+Stra%C3%9Fe+56%2C+1080+Wien",
  rating: "5,0",
  reviewCount: 127,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:30", closes: "19:00" },
    { days: ["Saturday"], opens: "11:00", closes: "17:00" },
  ],
} as const;

// Operator as listed in the Austrian company register (Firmenbuch) — confirm with the shop before launch (see README).
// Optional fields stay hidden in the footer until they are filled in.
export const COMPANY: {
  name: string;
  register: string;
  court: string;
  vatId: string | null;
  email: string | null;
} = {
  name: "CANNAPLACE OG",
  register: "FN 619212g",
  court: "Handelsgericht Wien",
  vatId: null,
  email: null,
};

// Agency credit in the footer and the imprint.
export const AGENCY = { name: "Getflowly", url: "https://getflowly.at" } as const;

// Absolute origin + base path of the deployed site, used for canonical, hreflang, sitemap and JSON-LD URLs.
// Set NEXT_PUBLIC_SITE_URL to the shop's own domain for the live site; without it the build is a preview.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? `https://altrinid.github.io${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}`
).replace(/\/+$/, "");

// Previews (GitHub Pages) stay out of search engines; only a build for the real domain is indexable.
export const INDEXABLE = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const STORAGE_KEYS = {
  ageConfirmed: "cp-age-confirmed",
  font: "cp-font",
  wishlist: "cp-wishlist",
} as const;
