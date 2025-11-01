import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-32 px-4 relative ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-16 relative inline-block text-slate-900 dark:text-white">
            {title}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-500 to-orange-500 origin-left rounded-full"
            />
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
