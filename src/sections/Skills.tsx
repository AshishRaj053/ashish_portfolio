import SkillCategory from "../components/SkillCategory";
import { skillCategories } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;