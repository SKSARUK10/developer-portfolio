import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';
import SectionHeading from './SectionHeading';
import { usePrefersReducedMotion, staggerContainer, fadeUpItem, sectionViewport } from '@/lib/animations';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const reduced = usePrefersReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:+91${profile.phone}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
    { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: profile.linkedinUrl || null },
    { icon: Github, label: 'GitHub', value: 'Profile', href: profile.githubUrl || null },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-slate-950">
      <div className="container-max section-padding">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="Open to Node.js, backend, MERN, and full-stack roles. Also interested in AI/LLM application opportunities."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={sectionViewport}
            variants={reduced ? undefined : staggerContainer}
            className="space-y-3"
          >
            {contactItems.map((item) => (
              <motion.div
                key={item.label}
                variants={reduced ? undefined : fadeUpItem}
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-50 dark:bg-brand-950/40 shrink-0">
                  <item.icon className="w-5 h-5 text-brand-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-slate-500 dark:text-slate-500">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      data-cursor-label={
                        item.label === 'LinkedIn' ? 'open_linkedin()' :
                        item.label === 'GitHub' ? 'open_github()' :
                        item.label === 'Email' ? 'send_email()' :
                        'click()'
                      }
                      className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={reduced ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={sectionViewport}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about the role or project..."
              />
            </div>
            <button
              type="submit"
              data-cursor-label="send_email()"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-500/25"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
            <p className="text-[11px] text-slate-400 dark:text-slate-600 text-center">
              Opens your email client with the message pre-filled.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
