function Education() {
  const coursework = [
    "Data Structures",
    "Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Education
        </h2>

        <div
          className="
            bg-slate-900
            border
            border-slate-700
            rounded-3xl
            p-12
          "
        >
          {/* Top Row */}

          <div className="grid md:grid-cols-2 gap-10 mb-6">

            {/* Left */}

            <div>
              <h3 className="text-5xl font-bold text-blue-400 mb-6">
                IIIT Allahabad
              </h3>

              <p className="text-2xl font-medium mb-4">
                Bachelor of Technology
              </p>
            </div>

            {/* Right */}

            <div className="md:text-right">

              <p className="text-2xl mb-4">
                CGPA:
                <span className="text-blue-400 font-semibold">
                  {" "}8.37 / 10
                </span>
              </p>

              <p className="text-slate-400 text-xl">
                2020 – 2024 • Prayagraj, Uttar Pradesh
              </p>

            </div>

          </div>

          {/* Coursework */}

          <div>
            <h4 className="text-2xl font-semibold mb-6">
              Coursework
            </h4>

            <div className="flex flex-wrap gap-4">

              {coursework.map((course) => (
                <span
                  key={course}
                  className="
                    px-8 py-4
                    rounded-full
                    border
                    border-blue-500
                    text-blue-300
                    text-xl
                  "
                >
                  {course}
                </span>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;