function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Availability */}

        <p className="text-blue-400 text-lg mb-6">
          🟢 Open to Software Development & AI Opportunities
        </p>

        {/* Heading */}

        <h2 className="text-5xl font-bold mb-6">
          Let's Connect
        </h2>

        <p className="text-slate-400 text-lg max-w-4xl mb-14">
          I'm always interested in discussing backend engineering,
          software development, Generative AI, system design and
          exciting opportunities. Feel free to reach out.
        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Email */}

          <div
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-blue-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <p className="text-4xl mb-4">
              📧
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Email
            </h3>

            <a
              href="mailto:yourmail@gmail.com"
              className="
                text-slate-400
                hover:text-blue-400
                transition
              "
            >
              ashraj053@gmail.com
            </a>
          </div>

          {/* Phone */}

          <div
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-blue-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <p className="text-4xl mb-4">
              📱
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Phone
            </h3>

            <a
              href="tel:+91XXXXXXXXXX"
              className="
                text-slate-400
                hover:text-blue-400
                transition
              "
            >
              +91 9341329721
            </a>
          </div>

          {/* Location */}

          <div
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-2xl
              p-6
              hover:border-blue-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <p className="text-4xl mb-4">
              📍
            </p>

            <h3 className="text-2xl font-semibold mb-3">
              Location
            </h3>

            <p className="text-slate-400">
              Bengaluru, India
            </p>
          </div>

        </div>

        {/* Social Buttons */}

        <div className="flex flex-wrap gap-4">

          <a
            href="https://github.com/AshishRaj053"
            target="_blank"
            rel="noreferrer"
            className="
              px-8 py-4
              bg-blue-600
              rounded-xl
              hover:bg-blue-700
              transition-all
              duration-300
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashish-ranjan-27a16821b"
            target="_blank"
            rel="noreferrer"
            className="
              px-8 py-4
              border
              border-slate-600
              rounded-xl
              hover:border-blue-500
              hover:text-blue-400
              transition-all
              duration-300
            "
          >
            LinkedIn
          </a>

          <a
            href="Ashish_Ranjan_Resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="
              px-8 py-4
              border
              border-slate-600
              rounded-xl
              hover:border-blue-500
              hover:text-blue-400
              transition-all
              duration-300
            "
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;