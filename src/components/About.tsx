import { motion } from 'framer-motion';
import { Server, Database, Cpu, Shield } from 'lucide-react';
import { aboutText } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

const focusAreas = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'REST API design, business logic, middleware, and scalable server architecture.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    desc: 'Schema design, indexing, query optimization, and multi-tenant data modeling.',
  },
  {
    icon: Shield,
    title: 'Auth & RBAC',
    desc: 'JWT authentication, role-based access control, and multi-organization security.',
  },
  {
    icon: Cpu,
    title: 'AI / LLM Applications',
    desc: 'OpenAI integrations, AI agents, tool calling, and natural-language data interaction.',
  },
];

export default function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="About"
          title="Backend-focused engineer building for production."
        />

        <div className="grid gap-10">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
            {/* Bio */}
            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/assets/profile-avatar.jpg"
                  alt="SK Saruk Ali"
                  width="160"
                  height="160"
                  loading="lazy"
                  className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-brand-100 dark:ring-brand-950/50 sm:h-32 sm:w-32"
                />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-brand-500">Developer profile</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Node.js · MERN · APIs · AI/LLM</p>
                </div>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {aboutText.primary}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutText.domains}
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutText.ai}
              </p>
              <div className="flex items-start gap-2 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                <span className="text-xs font-medium text-amber-700 dark:text-amber-400 leading-relaxed">
                  <strong className="font-semibold">Note:</strong> {aboutText.aiNote}
                </span>
              </div>
            </motion.div>

            {/* Working shot */}
            <motion.figure
              initial={reduced ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={sectionViewport}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/20"
            >
              <img
                src="/assets/working-4x3.jpg"
                alt="SK Saruk Ali working at his desk, writing code"
                width="1200"
                height="900"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="bg-slate-50 px-4 py-3 text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                Building, testing, and improving real software systems.
              </figcaption>
            </motion.figure>
          </div>

          {/* Focus areas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={reduced ? undefined : staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {focusAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={reduced ? undefined : fadeUpItem}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors group"
              >
                <area.icon className="w-6 h-6 text-brand-500 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
