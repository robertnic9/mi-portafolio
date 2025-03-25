import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

export default function ProjectPage() {
  return (
    <main>
      <GridBackground />
      <Header />
      <div className="mt-48 md:pt-24">
        <AboutSection />
      </div>
      <div className="min-h-screen sm:min-h-fit sm:p-[40vh]">
        <Footer />
      </div>
    </main>
  );
}
