import type { StaticImageData } from "next/image";
import bottle from "@/assets/bottle.webp";
import grinder from "@/assets/grinder.webp";
import jar from "@/assets/jar.webp";
import map from "@/assets/map.webp";
import tin from "@/assets/tin.webp";
import type { ImageKey } from "@/content/types";

// Exported from the "Illustration/*" components in Figma (shared 250×250 canvas, rendered at 4×).
export const PRODUCT_IMAGES: Record<ImageKey, StaticImageData> = { bottle, jar, tin, grinder };

export const MAP_IMAGE = map;
