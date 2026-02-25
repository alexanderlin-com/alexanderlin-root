import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-6xl mx-auto px-6 py-20 lg:py-24 relative z-10 w-full min-h-[90vh]"
        >
            <div className="pb-8 mb-12 border-b border-slate-200/50">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 text-center lg:text-left"
                >
                    <h1 className="font-sans text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight">
                        Featured Projects
                    </h1>
                    <p className="text-slate-600 max-w-2xl text-lg font-light leading-relaxed mx-auto lg:mx-0">
                        In-depth looks at my deployed, full-stack applications and AI systems.
                    </p>
                </motion.div>
            </div>

            <div className="flex flex-col gap-16 lg:gap-24 w-full">
                {/* Alexander RAG Assistant */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="group flex flex-col lg:flex-row-reverse bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                >
                    {/* Project Info Block */}
                    <div className="flex-1 p-10 sm:p-14 flex flex-col justify-center gap-8 relative z-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight">Alexander's AI Assistant</h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                                A fully interactive portfolio companion. This system ingests my entire professional history, personal projects, and technical skills to answer recruiter questions in real-time, acting as a tailored representation of my experience.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {["TypeScript", "React", "Next.js", "Python", "LangChain", "Vercel"].map(tool => (
                                <span key={tool} className="px-4 py-2 bg-sky-50/50 border border-sky-100 text-sky-700 text-xs font-semibold rounded-full shadow-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="https://assistant-resume-frontend.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                            >
                                Chat with AI
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                            <a
                                href="https://github.com/alexanderlin-com/assistant-resume-frontend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/60 border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-white/80 transition-all duration-300 flex items-center gap-2"
                            >
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Project Visual/Graphic Block */}
                    <div className="flex-1 min-h-[300px] lg:min-h-full bg-gradient-to-br from-sky-50 to-emerald-50 relative overflow-hidden flex items-center justify-center p-8 border-r border-white/40">
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                        {/* Mock Chat UI Frame */}
                        <div className="w-full max-w-sm aspect-[3/4] bg-white/90 rounded-[2rem] shadow-2xl border border-white flex flex-col overflow-hidden relative z-10 transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-700">
                            <div className="p-4 border-b border-slate-100 flex items-center justify-center bg-slate-50/50">
                                <span className="text-sm font-semibold text-slate-700">Chat with Alexander</span>
                            </div>
                            <div className="flex-1 p-6 flex flex-col gap-4">
                                <div className="self-end w-3/4 p-3 bg-indigo-50 rounded-2xl rounded-tr-sm"></div>
                                <div className="self-start w-5/6 p-4 bg-slate-100 rounded-2xl rounded-tl-sm space-y-2">
                                    <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                                    <div className="w-4/5 h-2 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Cashflow Depot Assistant */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="group flex flex-col lg:flex-row bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                >
                    {/* Project Info Block */}
                    <div className="flex-1 p-10 sm:p-14 flex flex-col justify-center gap-8 relative z-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight">Cashflow Depot Assistant</h2>
                            <p className="text-slate-600 text-lg leading-relaxed font-light">
                                An enterprise-grade Retrieval-Augmented Generation (RAG) system built to parse and synthesize decades of complex real estate financial data. It allows users to ask natural language questions and receive accurate, cited insights in seconds.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {["Python", "FastAPI", "React", "LangChain", "Pinecone Vector DB", "GCP Cloud Run"].map(tool => (
                                <span key={tool} className="px-4 py-2 bg-indigo-50/50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-full shadow-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="https://cashflow.alexanderlin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
                            >
                                View Live App
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                            <a
                                href="https://github.com/alexanderlin-com/assistant-cashflow-depot"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/60 border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-white/80 transition-all duration-300 flex items-center gap-2"
                            >
                                Source Code
                            </a>
                        </div>
                    </div>

                    {/* Project Visual/Graphic Block (Placeholder for screenshot) */}
                    <div className="flex-1 min-h-[300px] lg:min-h-full bg-gradient-to-br from-indigo-50 to-sky-50 relative overflow-hidden flex items-center justify-center p-8 border-l border-white/40">
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                        {/* Mock UI Frame */}
                        <div className="w-full max-w-md aspect-video bg-white/80 rounded-2xl shadow-2xl border border-white flex flex-col overflow-hidden relative z-10 transform group-hover:scale-105 transition-transform duration-700">
                            <div className="h-8 bg-slate-100 flex items-center px-4 gap-2 border-b border-slate-200">
                                <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col gap-4">
                                <div className="w-3/4 h-8 bg-indigo-50 rounded-lg"></div>
                                <div className="space-y-2">
                                    <div className="w-full h-3 bg-slate-100 rounded-full"></div>
                                    <div className="w-5/6 h-3 bg-slate-100 rounded-full"></div>
                                    <div className="w-4/6 h-3 bg-slate-100 rounded-full"></div>
                                </div>
                                <div className="mt-auto self-end w-1/2 h-8 bg-sky-50 rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Transition to Code Page CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 p-8 sm:p-12 w-full bg-slate-50/50 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center gap-6"
                >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 mb-2">
                        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                        Looking for more?
                    </h3>
                    <p className="text-slate-600 text-lg font-light leading-relaxed max-w-xl mb-2">
                        These are my flagship deployed systems, but I have dozens of other public projects, scripts, and libraries available open-source.
                    </p>
                    <Link
                        to="/code"
                        className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-300 flex items-center gap-2 shadow-sm"
                    >
                        View GitHub Archive
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    );
}
