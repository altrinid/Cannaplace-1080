import type { StaticImageData } from "next/image";
import bottle20 from "@/assets/bottle-20.webp";
import bottle5 from "@/assets/bottle-5.webp";
import bottle from "@/assets/bottle.webp";
import grinderMetal from "@/assets/grinder-metal.webp";
import grinder from "@/assets/grinder.webp";
import jarOgKush from "@/assets/jar-og-kush.webp";
import jarOrangeBud from "@/assets/jar-orange-bud.webp";
import jarStorage from "@/assets/jar-storage.webp";
import jar from "@/assets/jar.webp";
import map from "@/assets/map.webp";
import tinHandCream from "@/assets/tin-hand-cream.webp";
import tinLipBalm from "@/assets/tin-lip-balm.webp";
import tin from "@/assets/tin.webp";
import type { ImageKey } from "@/content/types";

// Exported from the "Illustration/*" components in Figma (shared 250×250 canvas, rendered at 4×).
// The label variants (bottle-5, jar-og-kush, …) reuse these with the product name set in Jost.
export const PRODUCT_IMAGES: Record<ImageKey, StaticImageData> = {
  bottle,
  "bottle-5": bottle5,
  "bottle-20": bottle20,
  jar,
  "jar-orange-bud": jarOrangeBud,
  "jar-og-kush": jarOgKush,
  "jar-storage": jarStorage,
  tin,
  "tin-hand-cream": tinHandCream,
  "tin-lip-balm": tinLipBalm,
  grinder,
  "grinder-metal": grinderMetal,
};

export const MAP_IMAGE = map;
