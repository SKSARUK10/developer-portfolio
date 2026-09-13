import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion, sectionViewport } from '@/lib/animations';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, description, align = 'left', children }: Props) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-brand-500 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
