import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  delay?: number;
};

export default function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative w-full h-full flex flex-col border border-white/60 rounded-[2rem] p-8 sm:p-10 bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      <div className="flex flex-col gap-6 flex-grow">
        <div className="flex flex-col items-start gap-4 mb-2">
          <h3 className="font-sans text-2xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
            {title}
          </h3>
          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50/80 px-4 py-1.5 rounded-full group-hover:bg-indigo-100/80 group-hover:text-indigo-700 transition-colors border border-indigo-100/50 w-fit inline-block">
            View on GitHub
          </span>
        </div>

        <p className="text-slate-600 leading-relaxed text-base font-light">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-8 pt-6 border-t border-slate-200/50">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 bg-white/60 text-slate-700 text-xs font-semibold rounded-full border border-white/80 shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}