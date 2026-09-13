import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const photoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches || reduced.matches) return;

    const handler = (e: MouseEvent) => {
      const el = photoRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ rx: Math.max(-2, Math.min(2, -dy * 3)), ry: Math.max(-2, Math.min(2, dx * 3)) });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <motion.div
          style={{ y: orbY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-[120px] animate-glow"
        />
        <motion.div
          style={{ y: orbY, animationDelay: '1.5s' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/15 rounded-full blur-[120px] animate-glow"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-max section-padding w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.78fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="hero-photo-column order-first flex justify-center lg:order-last lg:justify-end"
          >
            <div className="hero-photo-orb" aria-hidden="true" />
            <div
              ref={photoRef}
              className="hero-photo-mask"
              style={{
                transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
            >
              <img
                src="/assets/profile-hero.jpg"
                srcSet="/assets/profile-hero.jpg 900w, /assets/profile-hero@2x.jpg 1800w"
                sizes="(max-width: 768px) 90vw, 45vw"
                alt="SK Saruk Ali, Node.js and MERN full-stack developer"
                width="900"
                height="1200"
                loading="eager"
                fetchPriority="high"
                className="hero-photo"
              />
              <div className="hero-photo-overlay" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="max-w-4xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass dark:glass-dark mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
            </span>
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
          >
            SK SARUK ALI
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-gradient">
              BACKEND-FOCUSED MERN DEVELOPER
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium max-w-2xl leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
          >
            {profile.supportingText}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-500"
          >
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </motion.div>

          {/* Tech chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {profile.heroTechChips.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <button
              onClick={() => scrollTo('projects')}
              data-cursor-label="scroll_to_projects()"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/25"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={profile.resumeUrl || '#'}
              data-cursor-label="download_resume()"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] border ${
                profile.resumeUrl
                  ? 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  : 'border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
              }`}
              aria-disabled={!profile.resumeUrl}
              onClick={(e) => {
                if (!profile.resumeUrl) e.preventDefault();
              }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              data-cursor-label="open_contact()"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-600" />
        </div>
      </motion.div>
    </section>
  );
}
