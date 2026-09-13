import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/30">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Production systems I've built."
          description="Real backend systems, APIs, and applications built for production — not tutorials or toy projects."
        />

        {/* Featured projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={reduced ? undefined : staggerContainer}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {featured.map((project, i) => (
            <motion.div key={project.id} variants={reduced ? undefined : fadeUpItem}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Remaining projects */}
        {rest.length > 0 && (
          <>
            <motion.h3
              initial={reduced ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.4 }}
              className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-4 mt-8"
            >
              Additional Projects
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={reduced ? undefined : staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {rest.map((project, i) => (
                <motion.div key={project.id} variants={reduced ? undefined : fadeUpItem}>
                  <ProjectCard project={project} index={i} />
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
