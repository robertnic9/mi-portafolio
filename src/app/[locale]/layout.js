import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';

import { SpeedInsights } from "@vercel/speed-insights/next";
import GridBackground from "@/components/GridBackground";

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
  "Robert Nicuta |  Desarrollador Web en Formentera.";
const siteDescription =
  "Este es mi portafolio de desarrolador de aplicaciones web, donde muestro los proyectos que he participado.";
const siteUrl = "https://www.robertnicuta.com/";
const siteImage = "https://www.robertnicuta.com/miportafolio.png";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords:
    "diseño web Formentera, desarrollo aplicaciones, Next.js, React, PHP, JavaScript, Tailwind, programador web formentera, programador web ibiza, programador web mallorca",
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
        alt: "Robert Nicuta - Desarollador de Aplicaciones Web",
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

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  if (!routing.locales.includes(locale)) {
    // Return early or handle notFound (we can just let it render or not found)
  }

  // Providing all messages to the client
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
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
        <NextIntlClientProvider messages={messages}>
          <GridBackground />
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
                "https://www.instagram.com/",
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
