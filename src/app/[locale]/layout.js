import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import { useTranslations } from "next-intl";
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
const t = useTranslations("metadata");
// Definiciones principales para reutilizar
const siteName = t("siteName");
const siteTitle =
  t("siteTitle");
const siteDescription =
  t("siteDescription");
const siteUrl = t("siteUrl");
const siteImage = t("siteImage");

export const metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords:
    t("keywords"),
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
