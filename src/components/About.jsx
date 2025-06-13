import Pagetitle from "./PageTitle";
import { MacbookScrollDemo } from "./macbook";
import "@/styles/HrAnimated.css";

function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen sm:min-h-[50vh]">
      <Pagetitle title={"About me"} />
      <MacbookScrollDemo />
      <div className="animated-hr" />
    </section>
  );
}

export default AboutSection;
