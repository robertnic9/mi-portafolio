import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://dev.robertnicuta.com";

  // Rutas estáticas principales
  const routes = ["", "/aboutme", "/contact", "/projects"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
