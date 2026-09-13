import { motion } from 'framer-motion';
import { ArrowDown, Cpu, Brain } from 'lucide-react';
import { architectureSteps } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, sectionViewport } from '@/lib/animations';

function FlowDiagram({
  steps,
  accent,
}: {
  steps: { label: string; detail: string }[];
  accent: 'brand' | 'accent';
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="flex flex-col items-stretch">
      {steps.map((step, i) => (
        <div key={step.label} className="flex flex-col items-center">
          <motion.div
            initial={reduced ? undefined : { opacity: 0, scale: 0.95 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={sectionViewport}
            transition={{ duration: 0.3, ease: 'easeOut', delay: i * 0.06 }}
            className={`w-full px-5 py-4 rounded-xl border text-center ${
              accent === 'brand'
                ? 'bg-brand-50 dark:bg-brand-950/30 border-brand-200 dark:border-brand-900/50'
                : 'bg-accent-50 dark:bg-accent-950/20 border-accent-200 dark:border-accent-900/40'
            }`}
          >
            <div className={`text-sm font-semibold text-slate-800 dark:text-slate-100`}>
              {step.label}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
              {step.detail}
            </div>
          </motion.div>
          {i < steps.length - 1 && (
            <ArrowDown className="w-4 h-4 text-slate-300 dark:text-slate-700 my-1" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function Architecture() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="How I Build"
          title="Engineering approach."
          description="How I think about system architecture — for web applications and AI/LLM systems. Not every project follows this exact pattern, but these principles guide my design decisions."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Web architecture */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-50 dark:bg-brand-950/40">
                <Cpu className="w-5 h-5 text-brand-500" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Web Application Architecture
              </h3>
            </div>
            <FlowDiagram steps={architectureSteps.web} accent="brand" />
          </motion.div>

          {/* AI architecture */}
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent-50 dark:bg-accent-950/20">
                <Brain className="w-5 h-5 text-accent-500" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                AI / LLM Agent Architecture
              </h3>
            </div>
            <FlowDiagram steps={architectureSteps.ai} accent="accent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
