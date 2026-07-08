import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "daily" as const },
  { path: "/login/", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/register/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/download-app/", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/promotion/", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/gift-code/", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/apk-guide/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/about/", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact/", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy-policy/", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/responsible-gaming/", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/disclaimer/", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
