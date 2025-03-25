import GridBackground from "@/components/GridBackground";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function ProjectPage() {
  return (
    <main>
      <GridBackground />
      <Header />
      <div className="translate-y-[-50%]">
        <Contact />
      </div>
      <div className="translate-y-[-75%]">
        <Footer />
      </div>
    </main>
  );
}
