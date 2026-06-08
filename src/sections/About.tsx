function About() {
  const stats = [
    {
      number: "1+",
      title: "Years Experience",
    },
    {
      number: "500+",
      title: "DSA Problems",
    },
    {
      number: "Java",
      title: "Spring Boot Backend",
    },
    {
      number: "GenAI",
      title: "RAG Applications",
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-slate-400 max-w-3xl text-lg mb-12">
          I'm a Software Engineer at HCLTech and an alumini of IIIT Allahabad.

My primary focus is backend engineering using Java and Spring Boot, while actively building Generative AI applications using RAG, embeddings, vector databases and LLMs.

I enjoy solving data structures and algorithms problems, learning system design, and building production-ready software systems.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {stat.number}
              </h3>

              <p className="text-slate-300 mt-2">
                {stat.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default About;