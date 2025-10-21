import Footer from "@/components/Footer";
import AboutSection from "@/components/About";
import Header from "@/components/Header";

export default function ProjectPage() {
  return (
    <main>
      <Header />
      <div className="mt-48 md:pt-0">
        <AboutSection />
      </div>
      <div className="min-h-screen flex justify-center content-center">
        <Footer />
      </div>
    </main>
  );
}
