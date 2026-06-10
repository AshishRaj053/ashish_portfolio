function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-12">
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-slate-800/50
border
border-slate-700
rounded-2xl
p-8
hover:border-blue-500
hover:-translate-y-1
transition-all
duration-300">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Left Side */}
            <div className="md:col-span-2">

              <div className="flex items-center gap-4 mb-6">

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
                  H
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-400">
                    HCL Technologies
                  </h3>

                  <p className="text-slate-300">
                    Software Engineer
                  </p>

                  <p className="text-slate-500 text-sm">
                    oct 2024 - Present
                  </p>
                </div>

              </div>

              <ul className="space-y-3 text-slate-300 leading-relaxed">

                <li>
                  • Developed backend applications using Java and Spring Boot.
                </li>

                <li>
                  • Built RESTful APIs and implemented JWT authentication and authorization.
                </li>

                <li>
                  • Worked on Generative AI concepts including RAG, embeddings and vector databases.
                </li>

                <li>
                  • Developed AI-powered applications using LangChain and open-source LLMs.
                </li>

              </ul>

            </div>

            {/* Right Side */}
            <div>

              <h4 className="text-lg font-semibold mb-4 text-white">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">

                {[
                  "Java",
                  "Spring Boot",
                  "REST APIs",
                  "JWT",
                  "RAG",
                  "LangChain",
                  "Vector DB",
                  "LLMs",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-blue-500 text-blue-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;