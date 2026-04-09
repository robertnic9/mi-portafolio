import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "@/styles/Hero.css"; 


export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      className="flex flex-col items-center justify-center h-screen relative animate-jump-in"
      id="hero"
    >
      <p className="uppercase text-2xl md:text-6xl mb-3 text-white ">
        {t("name")}
      </p>
      <h1 className="uppercase text-3xl md:text-8xl mb-4 text-center text-[#fed7aa]">
        {t("role")}
      </h1>
      <button className="btn-outline mt-30 ">
        <Link href="/contact" className="no-underline text-[#fed7aa] uppercase">
          {t("contactBtn")}
        </Link>
      </button>
      <div className="animated-mouse"></div>
    </section>
  );
}

