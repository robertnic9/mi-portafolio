import ProjectsGrid from "./ProjectsGrid";
import Pagetitle from "./PageTitle";
import { useTranslations } from "next-intl";

function ProjectSection() {
  const t = useTranslations("projects");
  const projectsList = t.raw("projects");

  return (
    <section
      id="projects"
      className="sm:mb-4"
    >
      <Pagetitle title={t("title")} />
      <div className="w-[80%] mx-auto mt-auto ">
        <ProjectsGrid projectsList={projectsList} liveText={t("live")} githubText={t("github")} />
      </div>
    </section>
  );
}

export default ProjectSection;