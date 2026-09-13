import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Brain, Wrench } from 'lucide-react';
import { skills } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

const categories = [
  { key: 'programming', label: 'Programming', icon: Code2 },
  { key: 'frontend', label: 'Frontend', icon: Layout },
  { key: 'backend', label: 'Backend & APIs', icon: Server },
  { key: 'databases', label: 'Databases & Data', icon: Database },
  { key: 'ai', label: 'AI / LLM', icon: Brain },
  { key: 'devops', label: 'DevOps / Engineering', icon: Wrench },
] as const;

export default function Skills() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/30">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I work with."
          description="Categorized by domain — no inflated percentages, just what I use professionally and what I'm building with."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={reduced ? undefined : staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.key}
              variants={reduced ? undefined : fadeUpItem}
              className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-50 dark:bg-brand-950/40">
                  <cat.icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
