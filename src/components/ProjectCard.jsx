
export default function ProjectCard({project}){
    return (
      <li className="grid grid-row-[1fr_auto] text-left gap-4 rounded-lg shadow-lg bg-zinc-800">
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <picture className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={project.image}
              alt={project.image}
              rel="preload"
              loading="lazy"
            />
          </picture>
        </a>
        <article className="flex flex-col text-left justify-center p-4 pt-0 h-72">
          <p className="uppercase font-bold mb-3 text-white md:text-2xl sm:text-xl text-2xl">
            {project.title}
          </p>
          <div className="w-full h-[1px] bg-white my-1"></div>
          <p className="text-zinc-300 mt-1 h-full ">{project.description}</p>
          <ul className="flex items-start justify-left flex-wrap text-left gap-2 text-[#fed7aa]">
            {project?.technologies?.map((tech, techIndex) => (
              <li key={tech} className="w-fit">
                {tech}
                {techIndex !== project.technologies.length - 1 && ","}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start justify-between gap-4 mt-4">
            <div className="flex items-start justify-end flex-row gap-2">
              <a
                className="hover:underline inline-flex items-center justify-center h-12 font-bold text-white bg-red-700 uppercase border border-red-500 rounded-xl p-1 px-4"
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#fed7aa,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </article>
      </li>
    );
}