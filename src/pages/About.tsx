import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-6xl mx-auto px-6 py-20 lg:py-24 min-h-[90vh] relative z-10 w-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start"
            >
                {/* The Narrative - Left Side */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-2 space-y-8 p-8 sm:p-10 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                    <h1 className="font-sans text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">with Purpose.</span>
                    </h1>
                    <p className="text-slate-700 leading-relaxed text-lg font-light">
                        I'm a Software Engineer, recently graduated from <span className="text-slate-900 font-medium">Cal Poly Pomona</span> this December.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base font-light">
                        My internships at <span className="text-indigo-600 font-medium italic">Caltech</span> focused on automating complex enterprise systems and building AI-driven solutions to save time and reduce human error.
                    </p>
                    <p className="text-slate-600 leading-relaxed text-base font-light">
                        Whether I'm debugging high-traffic registration systems or deploying AI knowledge searches, I prioritize <span className="text-slate-900 font-medium">clarity, reliability, and scale.</span>
                    </p>
                </motion.div>

                {/* The Skills - Right Side */}
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-8 mt-4 lg:mt-0">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 ml-1">Core Languages</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["Python", "Java", "C++", "TypeScript", "SQL", "Bash"].map((s) => (
                                    <span key={s} className="px-4 py-2 bg-white/60 border border-white/80 text-slate-700 text-sm font-medium rounded-full shadow-sm">{s}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 ml-1">AI & Frameworks</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["LangChain", "FastAPI", "React", "Next.js", "Tailwind"].map((s) => (
                                    <span key={s} className="px-4 py-2 bg-indigo-50/80 border border-indigo-100/50 text-indigo-700 text-sm font-medium rounded-full shadow-sm">{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 ml-1">Infrastructure & Cloud</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["Docker", "Terraform", "GCP", "GitHub Actions", "Vercel"].map((s) => (
                                    <span key={s} className="px-4 py-2 bg-slate-800 border border-slate-700 text-slate-50 text-sm font-medium rounded-full shadow-sm">{s}</span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="p-8 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6 ml-1">Enterprise & Data</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {["Pinecone", "Oracle EBS", "Microsoft Graph", "SharePoint"].map((s) => (
                                    <span key={s} className="px-4 py-2 bg-white/60 border border-white/80 text-slate-700 text-sm font-medium rounded-full shadow-sm">{s}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Alexander RAG Interactive CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 sm:mt-24 p-8 sm:p-12 w-full bg-gradient-to-br from-indigo-600/10 to-sky-500/10 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.05)] relative overflow-hidden group"
            >
                {/* Decorative blurred blob inside the CTA */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                            Still have questions?
                        </h2>
                        <p className="text-slate-600 text-lg font-light leading-relaxed max-w-xl">
                            I built a custom Retrieval-Augmented Generation (RAG) system trained on my work history, projects, and skills. Ask it anything about me.
                        </p>
                    </div>

                    <a
                        href="https://assistant-resume-frontend.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 group/btn relative flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 text-white rounded-full font-medium text-lg w-full sm:w-auto shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        <span className="relative z-10">Ask Alexander's AI</span>
                        <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
}
