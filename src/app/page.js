'use client';

import { useState } from "react";
import AboutSection from "@/components/About";
import Contact from "@/components/Contact";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import HelloAnimation from "@/components/HelloAnimation";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  return (
    <main>
      {!showContent && (
        <HelloAnimation onAnimationEnd={() => setShowContent(true)} />
      )}
      {showContent && (
        <main>
          <Hero />
          <ProjectSection />
          <SkillSection />
          <AboutSection />
          <Contact />
          <Footer />
        </main>
      )}
    </main>
  );
}
