import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

export default function ProjectPage() {
  return (
    <main>
      <GridBackground />
      <Header />
      <div className="pt-24">
        <AboutSection />
      </div>
      <div className="pt-[26rem]">
        <Footer />
      </div>
    </main>
  );
}
