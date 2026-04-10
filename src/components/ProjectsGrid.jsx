import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projectsList, liveText, githubText }) => {
  const projects = projectsList.slice(0, 6);

  return (
    <>
      {/* MÓVIL: carousel */}
      <div className="sm:hidden w-full">
        <ul
          className="
            flex overflow-x-auto gap-6
            snap-x snap-mandatory
            pb-4 px-5 items-stretch
            scrollbar-none 
            [-webkit-overflow-scrolling:touch]
          "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              liveText={liveText}
              githubText={githubText}
              className="snap-center shrink-0 w-[85vw]" 
            />
          ))}
        </ul>

        <CarouselDots count={projects.length} />
      </div>
      {/* TABLET/DESKTOP: grid */}
      <ul
        className="
          hidden sm:grid
          grid-cols-2 lg:grid-cols-3
          gap-12 w-full
          items-stretch  
          z-10
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            liveText={liveText}
            githubText={githubText}
          />
        ))}
      </ul>
    </>
  );
};

function CarouselDots({ count }) {
  return (
    <div className="flex justify-center gap-2 mt-3">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-zinc-500"
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;