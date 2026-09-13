import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((l) => l.href);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass dark:glass-dark shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-max section-padding h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            data-cursor-label="goto_home()"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <img
              src="/assets/profile-avatar.jpg"
              alt="SK Saruk Ali"
              width="48"
              height="48"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white/80 dark:ring-slate-800"
            />
            <span className="font-mono font-bold text-sm tracking-tight text-slate-900 dark:text-white">
              SK_SARUK_ALI
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  data-cursor-label={`goto_${link.href}()`}
                  className={`nav-link ${activeSection === link.href ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              data-cursor-label="toggle_theme()"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a
              href={`mailto:${profile.email}`}
              data-cursor-label="send_email()"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
                <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1 p-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      data-cursor-label={`goto_${link.href}()`}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.href
                          ? 'bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-5 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`mailto:${profile.email}`}
                  className="block w-full text-center px-4 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-medium transition-colors"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
