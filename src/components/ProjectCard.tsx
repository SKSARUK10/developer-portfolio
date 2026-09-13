import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Tag, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/portfolio';

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      data-cursor-label="open_project()"
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
        project.featured
          ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50'
          : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30'
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            {project.label && (
              <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 mb-2">
                {project.label}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white truncate">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Contribution */}
        {project.contribution && (
          <div className="mb-5 p-3 rounded-lg bg-brand-50 dark:bg-brand-950/30 border border-brand-100 dark:border-brand-900/40">
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-brand-600 dark:text-brand-400">Contribution: </span>
              {project.contribution}
            </p>
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            data-cursor-label="toggle_case_study()"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors"
          >
            Case Study
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="open_github()"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed"
              title="URL to be configured"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </span>
          )}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="open_live()"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed"
              title="URL to be configured"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </span>
          )}
        </div>

        {/* Expandable case study */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-5 pt-5 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500 mb-3">
              Case Study
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.caseStudy}
            </p>
          </motion.div>
        )}
      </div>
    </article>
  );
}
