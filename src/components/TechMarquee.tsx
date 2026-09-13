import type { ComponentType, SVGAttributes } from 'react';
import { SiNodedotjs, SiExpress, SiTypescript, SiMongodb, SiPostgresql,
  SiReact, SiNextdotjs, SiGraphql, SiJsonwebtokens, SiDocker,
  SiPython, SiFastapi, SiTailwindcss, SiSupabase,
  SiGit, SiGithub, SiLangchain,
} from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaPlug, FaUserLock, FaRobot } from 'react-icons/fa';
import { usePrefersReducedMotion } from '@/lib/animations';

type IconComponent = ComponentType<SVGAttributes<SVGElement> & { size?: number | string }>;

interface TechItem {
  label: string;
  Icon: IconComponent;
  // Tailwind text-color class matching the brand's official color
  color: string;
  // If true, item has no brand icon — uses a generic icon instead
  generic?: boolean;
}

const TECHS: TechItem[] = [
  { label: 'Node.js',      Icon: SiNodedotjs as IconComponent,   color: 'text-[#5FA04E]' },
  { label: 'TypeScript',   Icon: SiTypescript as IconComponent,  color: 'text-[#3178C6]' },
  { label: 'React.js',     Icon: SiReact as IconComponent,       color: 'text-[#61DAFB]' },
  { label: 'Next.js',      Icon: SiNextdotjs as IconComponent,   color: 'text-black dark:text-white' },
  { label: 'Express.js',   Icon: SiExpress as IconComponent,     color: 'text-black dark:text-white' },
  { label: 'MongoDB',      Icon: SiMongodb as IconComponent,     color: 'text-[#47A248]' },
  { label: 'PostgreSQL',   Icon: SiPostgresql as IconComponent,  color: 'text-[#4169E1]' },
  { label: 'Redis',        Icon: DiRedis as IconComponent,       color: 'text-[#DC382D]' },
  { label: 'Supabase',     Icon: SiSupabase as IconComponent,    color: 'text-[#3FCF8E]' },
  { label: 'REST APIs',    Icon: FaPlug as IconComponent,        color: 'text-slate-500 dark:text-slate-400', generic: true },
  { label: 'GraphQL',      Icon: SiGraphql as IconComponent,     color: 'text-[#E10098]' },
  { label: 'JWT',          Icon: SiJsonwebtokens as IconComponent, color: 'text-black dark:text-white' },
  { label: 'RBAC',         Icon: FaUserLock as IconComponent,    color: 'text-slate-500 dark:text-slate-400', generic: true },
  { label: 'Docker',       Icon: SiDocker as IconComponent,      color: 'text-[#2496ED]' },
  { label: 'Python',       Icon: SiPython as IconComponent,      color: 'text-[#3776AB]' },
  { label: 'OpenAI API',   Icon: FaRobot as IconComponent,       color: 'text-[#10A37F]', generic: true },
  { label: 'LangChain',    Icon: SiLangchain as IconComponent,   color: 'text-[#1C3C3C] dark:text-[#9BD72C]' },
  { label: 'FastAPI',      Icon: SiFastapi as IconComponent,     color: 'text-[#009688]' },
  { label: 'React Native', Icon: SiReact as IconComponent,       color: 'text-[#61DAFB]' },
  { label: 'Tailwind CSS', Icon: SiTailwindcss as IconComponent, color: 'text-[#06B6D4]' },
  { label: 'Git',          Icon: SiGit as IconComponent,         color: 'text-[#F05032]' },
  { label: 'GitHub',       Icon: SiGithub as IconComponent,      color: 'text-black dark:text-white' },
];

function Dot() {
  return (
    <span className="mx-5 text-slate-300 dark:text-slate-700 select-none" aria-hidden="true">
      /
    </span>
  );
}

function TechChip({ label, Icon, color }: TechItem) {
  return (
    <span className="group inline-flex items-center gap-1.5 whitespace-nowrap">
      <Icon
        size={16}
        className={`shrink-0 ${color} transition-opacity duration-200 group-hover:opacity-90`}
        aria-hidden="true"
      />
      <span className="text-sm font-mono font-medium text-slate-600 dark:text-slate-400 transition-colors duration-200 group-hover:text-slate-800 dark:group-hover:text-slate-200">
        {label}
      </span>
    </span>
  );
}

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {TECHS.map((tech, i) => (
        <span key={`${tech.label}-${i}`} className="flex items-center">
          <TechChip {...tech} />
          <Dot />
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="relative w-full overflow-hidden py-4 border-y border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm"
      aria-label="Technology stack"
      role="marquee"
    >
      {/* Left edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      {/* Right edge fade */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      {reduced ? (
        // Static fallback — no animation
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-8">
          {TECHS.map((tech) => (
            <TechChip key={tech.label} {...tech} />
          ))}
        </div>
      ) : (
        <div
          className="flex w-max"
          style={{ animation: 'techMarquee 40s linear infinite' }}
        >
          {/* Two identical tracks — animating -50% produces a seamless loop */}
          <Track />
          <Track ariaHidden />
        </div>
      )}

      <style>{`
        @keyframes techMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
