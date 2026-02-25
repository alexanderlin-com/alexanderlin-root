import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/50 backdrop-blur-xl px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Your Name/Logo */}
        <Link to="/" className="font-serif font-bold text-xl tracking-tight text-slate-900">
          Alexander Lin
        </Link>

        {/* The Navigation Row */}
        <nav className="flex items-center gap-10">

          <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group py-2">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>

          <Link to="/projects" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group py-2">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 bg-white/50 backdrop-blur-md border border-white/80 rounded-full text-slate-700 hover:bg-white/80 transition-all text-sm font-medium shadow-sm flex items-center justify-center"
          >
            Resume
          </a>

          <a
            href="https://linkedin.com/in/alexanderlin-com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}