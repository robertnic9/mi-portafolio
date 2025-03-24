import React from "react";
import "@/styles/Hero.css"; // Importamos el CSS

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center h-screen relative animate-jump-in"
      id="hero"
    >
      <p className="uppercase text-2xl md:text-6xl mb-3 text-white ">
        Robert Nicuta
      </p>
      <h1 className="uppercase text-3xl md:text-8xl mb-4 text-center text-[#fed7aa]">
        Full-Stack Developer
      </h1>
      <button className="btn-outline mt-30 hover:cursor-not-allowed">
        <a
          href="/"
          //download
          className="no-underline text-#fed7aa uppercase"
        >
          Resume
        </a>
      </button>
      <div className="animated-mouse"></div>
    </section>
  );
}

