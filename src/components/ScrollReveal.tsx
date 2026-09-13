import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion, fadeUp, sectionViewport, sectionTransition } from '@/lib/animations';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section';
  id?: string;
};

export default function ScrollReveal({ children, className = '', delay = 0, as = 'div', id }: Props) {
  const reduced = usePrefersReducedMotion();
  const Tag = as === 'section' ? motion.section : motion.div;

  if (reduced) {
    const StaticTag = as === 'section' ? 'section' : 'div';
    return <StaticTag id={id} className={className}>{children}</StaticTag>;
  }

  return (
    <Tag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
      variants={fadeUp}
      transition={{ ...sectionTransition, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
