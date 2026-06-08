type SkillCategoryProps = {
  title: string;
  skills: string[];
};

function SkillCategory({
  title,
  skills,
}: SkillCategoryProps) {
  return (
    <div
      className="
         bg-slate-800/50
    border
    border-slate-700
    rounded-2xl
    p-6
    h-full
    hover:border-blue-500
    hover:-translate-y-1
    transition-all
    duration-300
      "
    >
      <h3 className="text-2xl font-bold text-blue-400 mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-4 py-2
              rounded-full
              border
              border-blue-500
              text-blue-300
              text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;