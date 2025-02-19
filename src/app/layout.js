import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Robert Nicuta | Diseño y Desarrollo Web en Formentera",
  description:
    "Desarrollador web especializado en Next.js, React, PHP y más. Descubre mis proyectos y cómo puedo ayudarte con tu página web.",
  keywords:
    "diseño web Formentera, desarrollo web, Next.js, React, PHP, JavaScript, Tailwind, UX/UI, SEO, CSS, Bootstrap, HTML",
  authors: [{ name: "Robert Nicuta" }],
  robots: "index, follow",
  openGraph: {
    title: "Robert Nicuta | Diseño y Desarrollo Web en Formentera",
    description:
      "Soy diseñador y desarrollador web especializado en Next.js, React, PHP y más. Descubre mis proyectos y servicios.",
    url: "https://robertnicuta.vercel.app/",
    siteName: "Robert Nicuta",
    images: [
      {
        url: "https://robertnicuta.vercel.app/miportafolio.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Nicuta - Diseño y Desarrollo Web en Formentera",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Nicuta | Diseño y Desarrollo Web en Formentera",
    description:
      "Desarrollador web especializado en Next.js, React, PHP y más.",
    images: ["https://robertnicuta.vercel.app/miportafolio.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Robert Nicuta",
              jobTitle: "Diseñador y Desarrollador Web",
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
                "Next.js",
                "React",
                "PHP",
                "Tailwind",
                "JavaScript",
                "UX/UI",
                "SEO",
                "CSS",
                "Bootstrap",
                "Python",
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
                    description: "Web creada con Next.js y Tailwind.",
                    url: "https://robertnicuta.vercel.app/",
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "E-LearningPlataform",
                    description:
                      "Plataforma de aprendizaje online con cursos y tests.",
                    applicationCategory: "Education",
                    operatingSystem: "Web",
                    url: "https://robertnicuta.vercel.app/proyectos/e-learning",
                  },
                  {
                    "@type": "SoftwareApplication",
                    name: "Material Escolar Web",
                    description: "Tienda de material escolar con ChatBot IA.",
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
