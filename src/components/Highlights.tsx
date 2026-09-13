import { motion } from 'framer-motion';
import { highlights } from '@/data/portfolio';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';
import { useCountUp } from '@/hooks/useCountUp';

function parseNumericValue(value: string): { numeric: number; prefix: string; suffix: string } | null {
  const match = value.match(/^([\D]*?)(\d[\d,]*)(.*)$/);
  if (!match) return null;
  const num = parseInt(match[2].replace(/,/g, ''), 10);
  if (isNaN(num)) return null;
  return { numeric: num, prefix: match[1], suffix: match[3] };
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const parsed = parseNumericValue(value);
  const reduced = usePrefersReducedMotion();
  const { ref, count } = useCountUp(parsed?.numeric ?? 0, 1200);

  if (!parsed || reduced) {
    return (
      <div ref={ref} className="text-center sm:text-left p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
        <div className="text-2xl sm:text-3xl font-bold text-gradient font-mono">{value}</div>
        <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">{label}</div>
      </div>
    );
  }

  const formatted = count.toLocaleString();

  return (
    <div ref={ref} className="text-center sm:text-left p-4 sm:p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow">
      <div className="text-2xl sm:text-3xl font-bold text-gradient font-mono">
        {parsed.prefix}{formatted}{parsed.suffix}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">{label}</div>
    </div>
  );
}

export default function Highlights() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container-max section-padding">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={reduced ? undefined : staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {highlights.map((h) => (
            <motion.div key={h.label} variants={reduced ? undefined : fadeUpItem}>
              <AnimatedStat value={h.value} label={h.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
