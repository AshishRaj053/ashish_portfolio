import { profile } from "../data/profile";
import heroImage from "../assets/hero.png";
import SkillBadge from "../components/SkillBadge";

const skills = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "Generative AI",
  "RAG",
  "C++"
];

function Hero() {
  return (
    <section className="pt-24 pb-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>

            <p className="text-blue-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
  {profile.name}
</h1>

          <h2 className="text-4xl text-slate-200 mb-2">
  Java Backend Developer
  <span className="text-blue-500"> | </span>
  Generative AI Engineer
</h2>

<p className="text-blue-400 text-lg mb-6">
  Software Engineer
</p>

            <p className="text-slate-400 text-lg mb-6 max-w-xl leading-relaxed">
  {profile.summary}
</p>

            <div className="flex gap-4">

              <a
                href={profile.github}
                target="_blank"
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                className="px-6 py-3 border border-white rounded-lg"
              >
                LinkedIn
              </a>

            </div>
            <div className="flex flex-wrap gap-3 mt-8">
  {skills.map((skill) => (
    <SkillBadge key={skill} skill={skill} />
  ))}
</div>

          </div>

          <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Ashish"
              className="w-72 h-72 rounded-full object-cover border-4 border-blue-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;