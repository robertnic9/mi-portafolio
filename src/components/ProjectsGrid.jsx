import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ projectsList, liveText, githubText }) => {
  return (
    <ul className="grid grid-cols-1  gap-12 w-full sm:grid-cols-2 lg:grid-cols-3 z-10">
      {projectsList.slice(0, 6).map((project, index) => (
        <ProjectCard project={project} key={index} liveText={liveText} githubText={githubText} />
      ))}
    </ul>
  );
};

export default ProjectsGrid;
