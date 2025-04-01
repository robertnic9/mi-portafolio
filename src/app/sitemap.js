import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://robertnicuta.vercel.app";

  // Rutas estáticas principales
  const routes = ["", "/aboutme", "/contact", "/formentera-diseno-web"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
