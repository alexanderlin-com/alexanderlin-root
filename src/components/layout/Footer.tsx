// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/60 bg-white/30 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-sans font-bold text-slate-900 text-lg tracking-tight">Alexander Lin</p>
          <p className="text-slate-500 text-sm mt-1 font-medium">Software Engineer • Class of 2025</p>
        </div>

        <div className="flex gap-8 items-center">
          <a
            href="https://linkedin.com/in/alexanderlin-com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-600 transition-colors font-medium text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alexanderlin-com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-xs font-medium text-slate-400">
        © {new Date().getFullYear()} — Built with React & Tailwind
      </div>
    </footer>
  );
}