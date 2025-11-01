import { motion, useScroll, useTransform } from "motion/react";
import { AnimatedText, SplitText } from "./AnimatedText";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-black dark:via-slate-950 dark:to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, transparent 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-4xl w-full">
        <AnimatedText>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 text-cyan-400"
          >
            Available for opportunities
          </motion.div>
        </AnimatedText>

        <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-100 to-orange-100 bg-clip-text text-transparent">
          <SplitText text="Daksh Saini" delay={0.2} />
        </h1>

        <AnimatedText delay={0.6}>
          <p className="text-cyan-400 mb-2">New Delhi, India</p>
        </AnimatedText>

        <AnimatedText delay={0.7}>
          <p className="text-slate-300 mb-12 leading-relaxed max-w-2xl">
            Second-year Computer Science undergraduate specializing in{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-cyan-300">scientific computing</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 origin-left"
              />
            </span>
            {" "}and{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-300">UI/UX design</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-400 to-amber-400 origin-left"
              />
            </span>
            . Creating efficient, user-centered digital solutions through analytical problem-solving and design thinking.
          </p>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact">Get in Touch</MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-wrap gap-6 text-slate-400"
        >
          <a href="mailto:dakshsaini889@gmail.com" className="hover:text-cyan-400 transition-colors group">
            <span className="relative">
              dakshsaini889@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-sky-400 transition-all group-hover:w-full" />
            </span>
          </a>
          <a href="tel:+918929999239" className="hover:text-orange-400 transition-colors group">
            <span className="relative">
              +91 8929999239
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-orange-400 to-amber-400 transition-all group-hover:w-full" />
            </span>
          </a>
          <a
            href="https://linkedin.com/in/daksh889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors group"
          >
            <span className="relative">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-sky-400 to-blue-400 transition-all group-hover:w-full" />
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
