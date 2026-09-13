import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

export default function Experience() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience."
          description="2+ years of professional experience across backend services, full-stack development, and production application engineering."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 sm:-translate-x-1/2" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={reduced ? undefined : staggerContainer}
            className="space-y-12"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                variants={reduced ? undefined : fadeUpItem}
                className={`relative pl-8 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-12 ${
                  i % 2 === 0 ? '' : 'sm:[&>*:first-child]:order-2'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 sm:left-1/2 top-2 w-3 h-3 rounded-full bg-brand-500 ring-4 ring-white dark:ring-slate-950 sm:-translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75" />
                  )}
                </div>

                {/* Content card */}
                <div className={`sm:px-8 ${i % 2 === 0 ? 'sm:text-right' : ''}`}>
                  <div className={`inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-500 mb-2 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className={`flex items-center gap-1.5 mt-1 text-xs text-slate-500 dark:text-slate-500 ${i % 2 === 0 ? 'sm:justify-end' : ''}`}>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className={`mt-4 sm:mt-0 sm:px-8 ${i % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'}`}>
                  <ul className={`space-y-2 ${i % 2 === 0 ? '' : ''}`}>
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
