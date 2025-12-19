export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Your Name/Logo */}
        <span className="font-serif font-bold text-xl tracking-tight text-slate-900">
          Alexander Lin
        </span>

        {/* The Navigation Row */}
        <nav className="flex items-center gap-10"> 
          {/* 'items-center' is the magic word here! */}
          
         

          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group py-2">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>

          <a href="#projects" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative group py-2">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
          </a>


          <a 
            href="#contact" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}