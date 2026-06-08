type ProjectProps = {
    category: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

function ProjectCard({
    category,
  title,
  description,
  tech,
  github,
}: ProjectProps) {
  return (
    
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 transition hover:-translate-y-2
    
    duration-300">

    <div className="mb-4">
  <span className="
    px-3 py-1
    text-xs
    font-semibold
    tracking-wide
    uppercase
    rounded-full
    bg-blue-500/10
    text-blue-400
    border border-blue-500/30
  ">
    {category}
  </span>
</div>


      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      <p className="text-slate-400 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">

        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-sm rounded-full border border-blue-500 text-blue-300"
          >
            {item}
          </span>
        ))}

      </div>

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:text-blue-300"
        >
          View Project →
        </a>
      )}

    </div>
  );
}

export default ProjectCard;