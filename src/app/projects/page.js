import GridBackground from "@/components/GridBackground"
import Pagetitle from "@/components/PageTitle"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import projects from "@/data/projects"

export default function ProjectPage(){
    return (
      <main className="pt-60">
        <GridBackground />
        <Header />
        <Pagetitle title={"PROJECTS"} />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10  mx-auto my-12 w-[85%]">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </section>
        <Footer />
      </main>
    );

}