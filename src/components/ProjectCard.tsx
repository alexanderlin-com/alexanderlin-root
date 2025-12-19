import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative w-full max-w-3xl border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all bg-white"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-2xl font-semibold text-slate-900">
            {title}
          </h3>
          <a href={link} className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View Live →
          </a>
        </div>

        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}