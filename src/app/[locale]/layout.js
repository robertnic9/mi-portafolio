import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GridBackground from "@/components/GridBackground";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ✅ generateMetadata en lugar de useTranslations a nivel de módulo
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const siteTitle = t("siteTitle");
  const siteDescription = t("siteDescription");
  const siteUrl = t("siteUrl");
  const siteName = t("siteName");
  const siteImage = t("siteImage");

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: t("keywords"),
    authors: [{ name: "Robert Nicuta" }],
    robots: "index, follow",
    alternates: { canonical: siteUrl },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      siteName,
      images: [{ url: siteImage, width: 1200, height: 630, alt: siteName }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    // notFound() si quieres manejar locales inválidos
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="ZeFsn69Wf4aa2nhDRTmONOf3d47sGxRxOaQ9ItV1G6Y" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <GridBackground />
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}