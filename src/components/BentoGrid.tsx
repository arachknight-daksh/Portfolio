import { motion } from "motion/react";
import { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BentoItem({ children, className = "", delay = 0 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
      {children}
    </div>
  );
}
