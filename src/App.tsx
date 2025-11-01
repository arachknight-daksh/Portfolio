import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCategory } from "./components/SkillCategory";
import { BentoGrid, BentoItem } from "./components/BentoGrid";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { FloatingNav } from "./components/FloatingNav";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { motion } from "motion/react";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

export default function App() {
  const skills = [
    {
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Libraries & Frameworks",
      skills: ["NumPy", "SciPy", "Pandas", "AstroPy", "Matplotlib"],
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Canva", "Notion", "Adobe XD"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Jupyter", "Colab", "LaTeX", "MATLAB", "MySQL"],
    },
  ];

  const projects = [
    {
      title: "Estimating the Dynamical Mass of a Galaxy Cluster",
      subtitle: "Self-Initiated | June 2025",
      description: [
        "Estimated galaxy cluster mass using the velocity dispersion method",
        "Processed SDSS DR16 datasets and applied redshift filtering via custom Python scripts",
      ],
    },
    {
      title: "Spectral Line Identification in JWST MIRI Data",
      subtitle: "Self-Initiated | June 2025",
      description: [
        "Analyzed IFU spectral cubes from JWST's MIRI instrument targeting galaxy NGC 7469",
        "Identified mid-infrared emission lines and key spectral features",
      ],
    },
  ];

  const interests = [
    "Cybersecurity",
    "Open Source",
    "Data Science",
    "UI/UX",
    "Scientific Computing",
    "Human–Computer Interaction",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <DarkModeToggle />

      <Hero />

      {/* Education Section */}
      <Section id="education" title="Education">
        <BentoGrid>
          <BentoItem className="md:col-span-2" delay={0}>
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/50 dark:to-sky-900/50 rounded-xl cursor-hover"
              >
                <GraduationCap className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-slate-900 dark:text-white">B.Tech – Computer Science</h3>
                  <span className="text-cyan-600 dark:text-cyan-400 whitespace-nowrap ml-4">2024 – 2028</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-3">
                  University School of Information, Communication & Technology (USICT), GGSIPU
                </p>
                <div className="space-y-2 text-slate-700 dark:text-slate-300">
                  <p>• Currently in 2nd Year</p>
                  <p>• Actively involved in technical communities</p>
                </div>
              </div>
            </div>
          </BentoItem>

          <BentoItem delay={0.1}>
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-900/50 rounded-xl cursor-hover"
              >
                <GraduationCap className="w-6 h-6 text-orange-700 dark:text-orange-400" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-slate-900 dark:text-white">Senior Secondary</h3>
                  <span className="text-orange-600 dark:text-orange-400 whitespace-nowrap ml-4">2024</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-3">Dev Samaj Modern School</p>
                <p className="text-slate-700 dark:text-slate-300">CBSE – PCM + CS</p>
              </div>
            </div>
          </BentoItem>
        </BentoGrid>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="space-y-12">
          {skills.map((category, index) => (
            <SkillCategory
              key={index}
              index={index}
              title={category.title}
              skills={category.skills}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-slate-200 dark:border-slate-800"
          >
            <h3 className="mb-4 text-slate-900 dark:text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Creativity", "Team Collaboration", "Communication"].map(
                (skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full hover:border-slate-900 dark:hover:border-cyan-500 hover:bg-slate-900 dark:hover:bg-cyan-500 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-slate-50 dark:bg-slate-900/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
          className="max-w-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500 transition-all cursor-hover"
        >
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/50 dark:to-sky-900/50 rounded-xl cursor-hover"
            >
              <Briefcase className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-slate-900 dark:text-white">Design Team Member</h3>
                <span className="text-cyan-600 dark:text-cyan-400 whitespace-nowrap ml-4">Oct 2024 – Present</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Google Developer Group, USICT</p>
            </div>
          </div>

          <ul className="space-y-3 pl-[4.5rem]">
            {[
              "Designed digital assets and branding material for technical events and workshops",
              "Collaborated with developer and logistics teams to maintain consistent visual identity",
              "Tools used: Figma, Canva, Adobe Express",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-slate-700 dark:text-slate-300 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-cyan-500 dark:before:bg-cyan-400"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Section>

      {/* Interests Section */}
      <Section id="interests" title="Interests">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-orange-500 dark:text-orange-400" />
            </motion.div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4, rotate: 2, scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-700 text-white rounded-full cursor-default hover:from-cyan-500 hover:to-blue-500 dark:hover:from-cyan-600 dark:hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-500/40 transition-all"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" className="bg-slate-50 dark:bg-slate-900/50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-slate-700 dark:text-slate-300 mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision. Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            {[
              { label: "dakshsaini889@gmail.com", href: "mailto:dakshsaini889@gmail.com" },
              { label: "+91 8929999239", href: "tel:+918929999239" },
              {
                label: "LinkedIn Profile",
                href: "https://linkedin.com/in/daksh889",
                target: "_blank",
              },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target={link.target}
                rel={link.target ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 transition-all group-hover:w-full" />
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="mailto:dakshsaini889@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-500/60 transition-all cursor-pointer"
            >
              Send me a message
            </motion.a>
          </motion.div>
        </motion.div>
      </Section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-slate-200 dark:border-slate-800 py-12 px-4 bg-slate-900 dark:bg-black"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 dark:text-slate-500">
          <motion.p whileHover={{ scale: 1.05 }} className="cursor-default">
            © 2025 Daksh Saini
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="cursor-default flex items-center gap-2"
          >
            Designed with passion
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
