import React from "react";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  return (
    <ul className="grid grid-cols-1 lg:gap-8 gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 z-10 mt-20">
      {projects.slice(0, 6).map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
