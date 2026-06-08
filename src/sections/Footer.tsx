function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          <h3 className="text-2xl font-bold text-white mb-2">
            Ashish Ranjan
          </h3>

          <p className="text-slate-400 mb-4">
            Software Engineer • Java Backend • Generative AI
          </p>

          <div className="flex gap-6 mb-4">

            <a
              href="https://github.com/AshishRaj053"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashish-ranjan-27a16821b"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ashraj053@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition"
            >
              Email
            </a>

          </div>

          <p className="text-sm text-slate-500">
            © 2026 Ashish Ranjan. Built with React, TypeScript & Tailwind CSS.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;