"use client";
import Pagetitle from "./PageTitle";
import { MacbookScrollDemo } from "./macbook";
import "@/styles/HrAnimated.css";

function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[50vh] sm:mt-[12rem]  mb-[20rem]"
    >
      <Pagetitle title={"About me"} />
      <MacbookScrollDemo/>
      <div className="animated-hr animate-shimmer" />
    </section>
  );
}

export default AboutSection;
