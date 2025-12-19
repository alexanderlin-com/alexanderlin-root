import PageLayout from "../components/layout/PageLayout";
import ProjectCard from "../components/ProjectCard"; // Make sure you created this file!
import { motion } from "framer-motion";

// 1. This is your "Projects Array" - Add your real projects here later!
const projects = [
  {
    title: "Project Alpha",
    description: "A sophisticated web application built to streamline workflow and improve user engagement through intuitive design.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/alexanderlin-com/rag-engine-cashflow"
  },
  {
    title: "Project Beta",
    description: "Developed a high-performance data engine that processes real-time metrics with a focus on speed and reliability.",
    tags: ["Vite", "Framer Motion", "Firebase"],
    link: "#"
  }
];



export default function Home() {
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto px-4">
      {/* Updated Hero Section in Home.tsx */}
      <motion.main
        className="relative min-h-screen w-full flex items-center justify-center bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Image - Full rounded corners, fixed to the screen edge */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-[40%] h-[85%] hidden xl:block z-0"> {/* size edit*/}
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.25 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            src="/kyoto-pic.jpg" 
            alt="Pic of me heh." 
            className="w-full h-full object-cover rounded-[2rem] shadow-2xl border border-slate-100 transition-all duration-700 cursor-pointer"
          />
        </div>

        {/* Right Image - The Technical Edge */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[40%] h-[85%] hidden xl:block z-0">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.25 }}
            whileHover={{ opacity: 1, scale: 1.02 }}
            className="w-full h-full bg-[#1e1e1e] rounded-[2rem] shadow-2xl border border-slate-800 overflow-hidden transition-all duration-700 cursor-pointer"
          >
            <div className="p-4 bg-slate-800/50 flex gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <img 
              src="/setup.jpg" 
              alt="Fedora Asahi Fastfetch." 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>
        </div>

        {/* Center Content stays sharp and readable */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <span className="mb-6 inline-block px-4 py-1 text-xs font-bold tracking-[0.3em] uppercase text-indigo-600 bg-indigo-50/50 rounded-full">
            Engineering with Clarity
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-medium text-slate-900 mb-4 tracking-tight">
            Alexander Lin
          </h1>
          <p className="font-sans text-xl md:text-2xl text-slate-500 mb-8 italic font-light">
            Software Engineer
          </p>
          <p className="font-sans text-slate-600 leading-relaxed text-lg">
            Building reliable internal systems and automation-focused tools, with an emphasis on  <span className="text-slate-900 font-medium">AI-backed workflows</span>.
          </p>
          <p className="font-sans text-slate-600 leading-relaxed text-lg">  Currently open to full-time engineering roles.</p>
        </div>
      </motion.main>


        {/* ABOUT & SKILLS SECTION */}
        <section id="about" className="scroll-mt-24 py-24 max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-start">
          
          {/* The Narrative - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-serif text-3xl font-semibold text-slate-900">Engineering with Purpose</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              I'm a Software Engineer, recently graduated from <span className="text-slate-900 font-medium">Cal Poly Pomona</span> this December. 
              My internships at <span className="text-indigo-600 font-medium text-lg italic">Caltech</span> focused on automating complex enterprise systems and building AI-driven solutions to save time and reduce human error.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether I'm debugging high-traffic registration systems or deploying AI knowledge searches, I prioritize <span className="text-slate-900 font-medium">clarity, reliability, and scale.</span>
            </p>
          </div>

          {/* The Skills - Right Side (Categorized for Competence) */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "C++", "TypeScript", "SQL", "Bash"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-md shadow-sm">{s}</span>
                ))}
              </div>
              
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 pt-4">AI & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {["LangChain", "FastAPI", "Next.js", "SvelteKit", "Tailwind"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium rounded-md shadow-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Infrastructure & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "Terraform", "GCP", "GitHub Actions", "Vercel"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-slate-900 text-slate-100 text-sm font-medium rounded-md shadow-sm">{s}</span>
                ))}
              </div>

              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 pt-4">Enterprise & Data</h3>
              <div className="flex flex-wrap gap-2">
                {["Pinecone", "Oracle EBS", "Microsoft Graph", "SharePoint"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-md shadow-sm">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 pb-32 flex flex-col items-center gap-12">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-4">
            Featured Projects
          </h2>
          
          {/* This is the magic loop we talked about! */}
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              title={project.title} 
              description={project.description} 
              tags={project.tags} 
              link={project.link} 
            />
          ))}


          {/* CONTACT SECTION */}
          <section id="contact" className="scroll-mt-24 py-32 border-t border-slate-100 w-full flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center space-y-6"
            >
              <h2 className="font-serif text-4xl font-semibold text-slate-900">
                Let's build something together.
              </h2>
              <p className="text-slate-600 max-w-md mx-auto">
                I’m always looking for interesting projects and clever people to collaborate with. 
                Drop me a line and let's see if we're a good fit.
              </p>
              <a 
                href="https://www.linkedin.com/in/alexanderlin-com/" 
                className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 hover:shadow-lg transition-all"
              >
                Get In Touch
              </a>
            </motion.div>
          </section>
        </section>
      </div>
    </PageLayout>
  );
}