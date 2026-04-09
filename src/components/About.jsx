import Pagetitle from "./PageTitle";
import { useTranslations } from "next-intl";
import { MacbookScrollDemo } from "./macbook";
import "@/styles/HrAnimated.css";

function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative min-h-screen sm:min-h-[50vh]">
      <Pagetitle title={t("title")} />
      <MacbookScrollDemo />
      <div className="animated-hr" />
    </section>
  );
}

export default AboutSection;
