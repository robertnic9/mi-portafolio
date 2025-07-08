import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definiciones principales para reutilizar
const siteName = "Robert Nicuta";
const siteTitle =
  "Robert Nicuta | Diseño Web y Desarrollo de Aplicaciones en Formentera";
const siteDescription =
  "Me dedico al desarrollo web y al marketing digital en Formentera, trabajando con marcas locales como la tienda de relojes de lujo LucasRe y la inmobiliaria Love Formentera, así como sus negocios de alquiler de barcos y e-bikes.";
const siteUrl = "https://robertnicuta.vercel.app/";
const siteImage = "https://robertnicuta.vercel.app/miportafolio.png";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords:
    "diseño web Formentera, desarrollo aplicaciones, Next.js, React, PHP, JavaScript, Tailwind, SEO, UX/UI, freelance, programador web",
  authors: [{ name: "Robert Nicuta" }],
  robots: "index, follow",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: siteImage,
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
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="ZeFsn69Wf4aa2nhDRTmONOf3d47sGxRxOaQ9ItV1G6Y"
        />
        {/* Metadatos adicionales para móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GridBackground />
        <Header />
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Robert Nicuta",
              jobTitle: "Diseñador Web y Desarrollador de Aplicaciones",
              url: siteUrl,
              image: siteImage,
              description: siteDescription,
              sameAs: [
                "https://github.com/robertnic9",
                "https://www.linkedin.com/in/robert-nicuta/",
                "https://www.instagram.com/robertnicuta_",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
                url: siteUrl,
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
              ],
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
