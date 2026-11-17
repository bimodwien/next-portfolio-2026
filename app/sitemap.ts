import type { MetadataRoute } from "next";
import { site } from "./content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/about`, lastModified: new Date() },
  ];
}
