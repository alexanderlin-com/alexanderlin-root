// src/components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif font-semibold text-slate-900 text-lg">Alexander Lin</p>
          <p className="text-slate-500 text-sm mt-1">Software Engineer • Class of 2025</p>
        </div>

        <div className="flex gap-8 items-center">
          <a 
            href="https://linkedin.com/in/alexanderlin-com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#0077B5] transition-colors font-medium text-sm"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/alexanderlin-com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors font-medium text-sm"
          >
            GitHub
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all text-sm font-medium"
          >
            Resume
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-slate-300">
        © {new Date().getFullYear()} — Built with React & Tailwind
      </div>
    </footer>
  );
}