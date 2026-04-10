export default function ProjectCard({ project, liveText, githubText, className }) {
  return (
    <li className={`flex flex-col text-left rounded-xl shadow-lg bg-zinc-800 ${className}`}>
      {/* Imagen */}
      <a
        href={project.liveLink}
        target="_blank"
        rel="noreferrer"
        className={!project.liveLink ? "cursor-not-allowed" : "cursor-pointer"}
      >
        <picture className="w-full block">
          <img
            className="w-full aspect-video object-cover rounded-t-lg"
            src={project.image}
            alt={project.title}
            rel="preload"
            loading="lazy"
          />
        </picture>
      </a>

      {/* Contenido — flex-1 para que ocupe el espacio restante de la celda */}
      <article className="flex flex-col flex-1 text-left p-4 pt-3 gap-2">
        <p className="uppercase font-bold text-white md:text-2xl sm:text-xl text-2xl">
          {project.title}
        </p>

        <div className="w-full h-[1px] bg-white" />

        {/* flex-1 empuja el resto hacia abajo */}
        <p className="text-zinc-300 leading-relaxed flex-1 pb-1">
          {project.description}
        </p>

        <ul className="flex items-start flex-wrap gap-2 text-[#fed7aa]">
          {project?.technologies?.map((tech, techIndex) => (
            <li key={tech} className="w-fit">
              {tech}
              {techIndex !== project.technologies.length - 1 && ","}
            </li>
          ))}
        </ul>

        {/* mt-auto garantiza que los botones siempre queden al fondo */}
        <div className="flex items-center flex-row gap-4 mt-auto pt-2">
          <a
            className={`inline-flex items-center justify-center font-bold h-12 text-white bg-red-700 uppercase border border-red-500 rounded-xl px-4 ${!project.liveLink
              ? "cursor-not-allowed opacity-60"
              : "hover:underline cursor-pointer"
              }`}
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#fed7aa,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${!project.githubLink ? "cursor-not-allowed opacity-60" : "cursor-pointer"
              }`}
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </article>
    </li>
  );
}