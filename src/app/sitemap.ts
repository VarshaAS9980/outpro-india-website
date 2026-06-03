import type { MetadataRoute } from "next";
import { services } from "@/content/services";

const baseUrl = "https://outpro.india";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = ["", "/about", "/services", "/portfolio", "/testimonials"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified,
  }));

  const servicePaths = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
  }));

  return [...staticPaths, ...servicePaths];
}
