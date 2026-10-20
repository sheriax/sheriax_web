import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
