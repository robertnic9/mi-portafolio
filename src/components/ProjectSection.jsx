import ProjectsGrid from "./ProjectsGrid";
import Pagetitle from "./PageTitle";

function ProjectSection (){
    return (
      <section
        id="projects"
        className="relative min-h-[70vh] pt-[12rem]  sm:mb-4"
      >
        <Pagetitle title={"Projects"} />
        <div className="w-[80%] mx-auto">
          <ProjectsGrid />
        </div>
      </section>
    );
}

export default ProjectSection;