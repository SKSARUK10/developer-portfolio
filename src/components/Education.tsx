import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { education } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

export default function Education() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/30">
      <div className="container-max section-padding">
        <SectionHeading eyebrow="Education" title="Academic background." />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={reduced ? undefined : staggerContainer}
          className="grid sm:grid-cols-2 gap-5"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.institution}
              variants={reduced ? undefined : fadeUpItem}
              className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-brand-50 dark:bg-brand-950/40 shrink-0">
                  <GraduationCap className="w-6 h-6 text-brand-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-brand-600 dark:text-brand-400 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                    {edu.field}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500 dark:text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
