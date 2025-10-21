import Pagetitle from "@/components/PageTitle"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import projects from "@/data/projects"

export default function ProjectPage(){
    return (
      <>
        <Header />
        <main className="pt-32 md:pt-12">
          <Pagetitle title={"PROJECTS"} />
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto my-12 w-[85%]">
            {projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </section>
          <Footer />
        </main>
      </>
    );

}