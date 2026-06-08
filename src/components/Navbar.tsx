function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <h1 className="text-white font-bold text-xl">
            Ashish Ranjan
          </h1>

          {/* Navigation Links */}

          <div className="hidden md:flex items-center gap-8">

            <a
              href="#about"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Skills
            </a>

            <a
              href="#education"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Education
            </a>

            <a
              href="#contact"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              Contact
            </a>

          </div>

          {/* Resume Button */}

          <a
  href="Ashish_Ranjan_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-blue-600
    hover:bg-blue-700
    transition
    px-5 py-2
    rounded-lg
    text-white
    font-medium
  "
>
  Resume
</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;