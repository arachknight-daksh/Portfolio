import { motion } from "motion/react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  index: number;
}

export function SkillCategory({ title, skills, index }: SkillCategoryProps) {
  const gradients = [
    "from-cyan-50 to-sky-50 hover:from-cyan-500 hover:to-sky-500 border-cyan-200 hover:border-cyan-500 dark:from-cyan-950/30 dark:to-sky-950/30 dark:border-cyan-800 dark:hover:from-cyan-600 dark:hover:to-sky-600",
    "from-blue-50 to-indigo-50 hover:from-blue-500 hover:to-indigo-500 border-blue-200 hover:border-blue-500 dark:from-blue-950/30 dark:to-indigo-950/30 dark:border-blue-800 dark:hover:from-blue-600 dark:hover:to-indigo-600",
    "from-orange-50 to-amber-50 hover:from-orange-500 hover:to-amber-500 border-orange-200 hover:border-orange-500 dark:from-orange-950/30 dark:to-amber-950/30 dark:border-orange-800 dark:hover:from-orange-600 dark:hover:to-amber-600",
    "from-slate-50 to-gray-50 hover:from-slate-600 hover:to-gray-600 border-slate-200 hover:border-slate-600 dark:from-slate-900/30 dark:to-gray-900/30 dark:border-slate-700 dark:hover:from-slate-600 dark:hover:to-gray-600",
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <motion.h3
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
        className="mb-4 cursor-default text-slate-900 dark:text-white"
      >
        {title}
      </motion.h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.03 }}
            whileHover={{ y: -2, scale: 1.05 }}
            className={`px-4 py-2 bg-gradient-to-r ${gradients[index % gradients.length]} text-slate-700 dark:text-slate-300 hover:text-white border rounded-full transition-all cursor-default`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
