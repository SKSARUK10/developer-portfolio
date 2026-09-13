import { Code2, Linkedin, Github, Download, Mail } from 'lucide-react';
import { profile, navLinks } from '@/data/portfolio';

export default function Footer() {
  const handleNavClick = (href: string) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container-max section-padding py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-brand-500" />
              <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                SK SARUK ALI
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              {profile.title}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    data-cursor-label={`goto_${link.href}()`}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                data-cursor-label="send_email()"
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedinUrl || '#'}
                data-cursor-label="open_linkedin()"
                onClick={(e) => { if (!profile.linkedinUrl) e.preventDefault(); }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  profile.linkedinUrl
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                }`}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.githubUrl || '#'}
                data-cursor-label="open_github()"
                onClick={(e) => { if (!profile.githubUrl) e.preventDefault(); }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  profile.githubUrl
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                }`}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.resumeUrl || '#'}
                data-cursor-label="download_resume()"
                onClick={(e) => { if (!profile.resumeUrl) e.preventDefault(); }}
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  profile.resumeUrl
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed'
                }`}
                aria-label="Resume"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} SK Saruk Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
