import { motion } from 'framer-motion';
import { ArrowDown, Brain, Sparkles, BookOpen } from 'lucide-react';
import { aiProgression, aiTechnologies } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

export default function AIEngineering() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="ai" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="AI & LLM Engineering"
          title="AI as an additional engineering capability."
          description="Building practical experience with AI/LLM applications. This is a growing specialization — distinct from professional employment experience."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Progression flow */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-6">
              Learning Progression
            </h3>
            <div className="space-y-1">
              {aiProgression.map((step, i) => (
                <div key={step.stage} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold font-mono ${
                        step.status === 'Professional'
                          ? 'bg-brand-500 text-white'
                          : step.status === 'Building'
                          ? 'bg-accent-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {i + 1}
                    </div>
                    {i < aiProgression.length - 1 && (
                      <ArrowDown className="w-3 h-3 text-slate-300 dark:text-slate-700 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {step.stage}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                          step.status === 'Professional'
                            ? 'bg-brand-100 dark:bg-brand-950/40 text-brand-700 dark:text-brand-400'
                            : step.status === 'Building'
                            ? 'bg-accent-100 dark:bg-accent-950/40 text-accent-700 dark:text-accent-400'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technology grid */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-6">
              Technologies & Tools
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              variants={reduced ? undefined : staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {aiTechnologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={reduced ? undefined : fadeUpItem}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {tech.status === 'Currently Exploring' ? (
                      <BookOpen className="w-3.5 h-3.5 text-amber-500" />
                    ) : tech.status === 'Building' ? (
                      <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                    ) : (
                      <Brain className="w-3.5 h-3.5 text-brand-500" />
                    )}
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 truncate">
                      {tech.name}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] font-mono ${
                      tech.status === 'Currently Exploring'
                        ? 'text-amber-600 dark:text-amber-500'
                        : 'text-accent-600 dark:text-accent-500'
                    }`}
                  >
                    {tech.status}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
