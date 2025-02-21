import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Robert Nicuta | Diseño Web y Desarrollo de Aplicaciones en Formentera",
  description:
    "Experto en diseño web y desarrollo de aplicaciones en Formentera. Construyo páginas web atractivas y optimizadas, y creo aplicaciones con tecnologías modernas como Next.js, React y PHP.",
  keywords:
    "diseño web Formentera, desarrollo de aplicaciones, programador web, UX/UI, Next.js, React, PHP, JavaScript, Tailwind, SEO, CSS, HTML, branding digital, web responsive",
  authors: [{ name: "Robert Nicuta" }],
  robots: "index, follow",
  openGraph: {
    title: "Robert Nicuta | Diseño Web y Desarrollo de Aplicaciones",
    description:
      "Desarrollador y diseñador web en Formentera, especializado en páginas web atractivas y desarrollo de aplicaciones modernas.",
    url: "https://robertnicuta.vercel.app/",
    siteName: "Robert Nicuta",
    images: [
      {
        url: "https://robertnicuta.vercel.app/miportafolio.png",
        width: 1200,
        height: 630,
        alt: "Robert Nicuta - Diseño Web y Desarrollo de Aplicaciones",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Nicuta | Diseño Web y Desarrollo de Aplicaciones",
    description:
      "Especialista en diseño web y desarrollo de aplicaciones modernas con tecnologías como Next.js, React y PHP.",
    images: ["https://robertnicuta.vercel.app/miportafolio.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <meta
        name="google-site-verification"
        content="ZeFsn69Wf4aa2nhDRTmONOf3d47sGxRxOaQ9ItV1G6Y"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Robert Nicuta",
              jobTitle: "Diseñador Web y Programador de Aplicaciones",
              url: "https://robertnicuta.vercel.app/",
              sameAs: [
                "https://github.com/robertnic9",
                "https://www.linkedin.com/in/robert-nicuta/",
                "https://www.instagram.com/robertnicuta_",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
                url: "https://robertnicuta.vercel.app/",
              },
              knowsAbout: [
                "Diseño web",
                "Desarrollo de aplicaciones",
                "Next.js",
                "React",
                "PHP",
                "JavaScript",
                "Tailwind",
                "SEO",
                "UX/UI",
                "CSS",
                "HTML",
                "E-commerce",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "IES Santa Maria D'Eivissa",
              },
              hasPart: {
                "@type": "ItemList",
                name: "Proyectos de Robert Nicuta",
                itemListElement: [
                  {
                    "@type": "CreativeWork",
                    name: "Mi Portfolio",
                    description:
                      "Sitio web profesional diseñado con Next.js y Tailwind, destacando mis proyectos de desarrollo y diseño.",
                    url: "https://robertnicuta.vercel.app/",
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "E-Learning Plataform",
                    description:
                      "Plataforma de aprendizaje online con cursos interactivos y tests de evaluación.",
                    applicationCategory: "Education",
                    operatingSystem: "Web",
                    url: "https://robertnicuta.vercel.app/proyectos/e-learning",
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "Material Escolar Web",
                    description:
                      "Tienda online de material escolar con integración de chatbot IA para asistencia personalizada.",
                    applicationCategory: "E-commerce",
                    operatingSystem: "Web",
                    url: "https://robertnicuta.vercel.app/proyectos/material-escolar",
                  },
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Formentera",
                addressRegion: "Islas Baleares",
                addressCountry: "España",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
