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
      <h1
        className="uppercase text-4xl md:text-8xl mb-4 text-center
      bg-[linear-gradient(110deg,#000103,35%,#fed7aa,65%,#000103)] bg-[length:200%_100%] animate-shimmer bg-clip-text text-transparent"
      >
        Full-Stack Developer
      </h1>
      <button className="btn-outline mt-30 ">
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

