import type { Metadata } from "next";
import { SITE_URL } from "./constants";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const fullTitle = path === "/" ? `Sheriax — ${title}` : `${title} | Sheriax`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: "Sheriax",
      title: fullTitle,
      description,
      url,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Sheriax — The company behind Tat’heer. Currently in development.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  };
}
