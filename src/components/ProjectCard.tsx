import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string[];
  index: number;
}

export function ProjectCard({ title, subtitle, description, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500 cursor-hover overflow-hidden"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-orange-50 dark:from-cyan-950/20 dark:via-sky-950/20 dark:to-orange-950/20 -z-10"
      />

      <div className="flex items-start justify-between mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900/50 dark:to-sky-900/50 text-cyan-700 dark:text-cyan-300"
        >
          {index + 1}
        </motion.div>
        <motion.div
          className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
          whileHover={{ rotate: 45, scale: 1.2 }}
        >
          <ArrowUpRight className="w-5 h-5" />
        </motion.div>
      </div>

      <h3 className="mb-2 text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6">{subtitle}</p>

      <ul className="space-y-3">
        {description.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
            className="text-slate-700 dark:text-slate-300 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-slate-400 dark:before:bg-slate-600 group-hover:before:bg-cyan-500 dark:group-hover:before:bg-cyan-400 before:transition-colors"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
