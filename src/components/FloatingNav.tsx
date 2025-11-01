import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  const sections = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["education", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-40 hidden md:block"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex items-center gap-1 bg-slate-900/90 dark:bg-black/90 backdrop-blur-lg border border-cyan-500/30 dark:border-cyan-400/30 rounded-full px-2 py-2 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-400/30"
      >
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="relative px-4 py-2 rounded-full text-slate-400 dark:text-slate-500 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-sky-500/20 dark:from-cyan-400/20 dark:to-sky-400/20 rounded-full -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
