import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AssistantChat from "../components/AssistantChat";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative min-h-[90vh] w-full flex items-center justify-center px-4 sm:px-6 py-12 lg:py-20 z-10"
    >

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-bold tracking-tight text-slate-900 mb-4 leading-[1.05]">
              Alexander Lin
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 font-medium tracking-tight">
              Software Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-xl space-y-6 text-lg sm:text-xl text-slate-600 leading-relaxed font-light"
          >
            <p>
              I build intelligent, agentic systems. From <span className="font-medium text-slate-800">vector-driven knowledge retrieval</span> to automated pipeline orchestration, I turn complex data into actionable logic.
            </p>

            {/* Soft, integrated availability blurb */}
            <div className="px-5 py-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-700 font-medium flex items-start sm:items-center gap-4">
              <span className="relative flex h-3 w-3 mt-1 sm:mt-0 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-base sm:text-lg">
                Actively exploring full-time employment roles.
              </p>
            </div>
          </motion.div>

          {/* Inline Native AI Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 w-full max-w-xl"
          >
            <AssistantChat />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              View Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
            <Link
              to="/about"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              More About Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Frosted Glass Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="w-full max-w-lg lg:max-w-none mx-auto relative order-1 lg:order-2 flex justify-center lg:justify-end z-20"
        >
          {/* The Apple Glass Container */}
          <div className="relative aspect-square w-full sm:w-4/5 lg:w-full max-w-md rounded-[2.5rem] p-4 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group">

            <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-sky-50/50">
              <img
                src="/pic_of_me.jpg"
                alt="Alexander Lin"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </motion.div >
  );
}
