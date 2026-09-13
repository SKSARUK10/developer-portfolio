export const profile = {
  name: 'SK SARUK ALI',
  title: 'Node.js & MERN Full-Stack Developer',
  positioning: 'Backend-focused MERN Developer',
  secondaryPositioning: 'AI / LLM Application Developer',
  experience: '2+ years professional experience',
  location: 'Kolaghat, West Bengal, India',
  email: 'saruksoft2000@gmail.com',
  phone: '8945579402',
  linkedinUrl: 'https://www.linkedin.com/in/sk-saruk-ali-b6723a207/',
  githubUrl: 'https://github.com/tgs-saruk?tab=repositories',
  resumeUrl: '', // TODO: Replace with actual resume URL
  tagline: 'Building production-ready APIs, scalable applications, and practical AI-powered solutions.',
  supportingText:
    '2+ years of professional experience across Node.js, Express.js, React.js, Next.js, MongoDB, PostgreSQL, REST APIs, authentication, RBAC, and production application development.',
  heroTechChips: [
    'Node.js',
    'TypeScript',
    'MongoDB',
    'PostgreSQL',
    'React',
    'Next.js',
    'REST APIs',
    'AI / LLM',
  ],
};

export const aboutText = {
  primary:
    'Full-Stack Developer with 2+ years of professional experience in the Node.js/MERN ecosystem, with stronger focus on backend engineering, REST API development, database architecture, authentication, RBAC, and scalable application development.',
  domains:
    'Worked on production applications across gaming, HR management, healthcare directories, civic-tech, and mobile platforms.',
  ai:
    'Also building practical experience with Python and AI/LLM application development, including OpenAI API integrations, AI agents, tool/function calling, RAG, MCP, LangChain, FastAPI, and CrewAI.',
  aiNote:
    'AI/LLM work is an additional growing specialization — distinct from professional employment experience.',
};

export const experiences = [
  {
    company: 'Teamgrid Solutions Private Limited',
    role: 'Associate Application Developer',
    period: 'July 2024 – Present',
    location: 'Greater Kolkata Area, India',
    current: true,
    responsibilities: [
      'Developed production applications using Node.js, Express.js, React.js, Next.js, REST APIs, and databases, contributing across backend services and React-based frontend features.',
      'Designed and developed the backend for Bracketocracy, a gaming tournament ecosystem supporting 64-team tournaments, automated match progression, score updates, and round advancement from play-in through championship stages.',
      'Implemented dynamic zone-based pairing and tournament progression logic.',
      'Architected a multi-tenant HR Management System using MongoDB, including employee, role, and permission management.',
      'Implemented JWT authentication and Role-Based Access Control (RBAC) across multiple organizations.',
      'Developed backend services for HerPlan, a childcare platform containing 4,000+ provider listings, with search, filtering, and geolocation-based queries using PostgreSQL.',
      'Applied database indexing and query optimization for HerPlan, achieving sub-200ms API response times under load.',
      'Engineered Supabase-powered Bible mobile applications with offline-first synchronization, Row Level Security (RLS), and real-time subscriptions.',
      'Developed legislator scorecard systems for processing and exposing structured legislative voting data through REST APIs.',
      'Applied Redis and in-memory caching strategies, along with database query optimization, to improve API response times and system throughput.',
    ],
  },
  {
    company: 'OS4ED – Open Solutions for Education, Inc.',
    role: 'Full-Stack Developer (Trainee)',
    period: 'June 2023 – March 2024',
    location: 'Kolkata, West Bengal, India',
    current: false,
    responsibilities: [
      'Contributed to full-stack feature development for open-source education platforms using the MERN stack.',
      'Developed REST API endpoints using Node.js.',
      'Contributed to React-based user interface components.',
      'Integrated third-party APIs and authentication flows.',
      'Worked in an Agile development environment.',
      'Gained experience with production deployment and code review workflows.',
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  label?: string;
  description: string;
  contribution?: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'bracketocracy',
    name: 'Bracketocracy',
    category: 'Gaming / Tournament Platform',
    description:
      'Backend for a gaming tournament ecosystem supporting 64-team tournaments, automated match progression, score updates, and round advancement from play-in through championship stages.',
    contribution: 'Designed and developed backend functionality and tournament progression logic.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    highlights: [
      'Tournament progression logic',
      'Dynamic zone-based pairing',
      'Match progression automation',
      'Score updates',
      'Automated round advancement',
      '64-team bracket support',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    caseStudy:
      'Bracketocracy required a backend capable of managing complex tournament state machines. The system handles 64-team brackets with play-in rounds, automated match progression, zone-based pairing, and championship advancement. The backend exposes REST APIs for tournament creation, match scoring, and real-time bracket updates. The core challenge was designing tournament progression logic that correctly handles edge cases like bye rounds, zone assignments, and concurrent match states.',
  },
  {
    id: 'hr-system',
    name: 'Multi-Tenant HR Management System',
    category: 'HR / SaaS',
    description:
      'A multi-tenant HR management platform designed around employee, role, organization, and permission management.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC'],
    highlights: [
      'Multi-tenant architecture',
      'JWT authentication',
      'Role-Based Access Control (RBAC)',
      'Organization-level data isolation',
      'Permission management',
      'Employee & role management',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    caseStudy:
      'The HR system was architected for multi-tenancy from the ground up, ensuring complete data isolation between organizations. MongoDB\'s document model allowed flexible schema design for employee records, roles, and permissions. JWT-based authentication combined with RBAC ensured users could only access resources within their organization and permission scope. The permission system supports granular role definitions, allowing administrators to configure access at module, action, and resource levels.',
  },
  {
    id: 'herplan',
    name: 'HerPlan',
    category: 'Healthcare / Directory Platform',
    description:
      'Backend services for a childcare provider directory containing 4,000+ listings with search, filtering, and geolocation-based queries.',
    techStack: ['Node.js', 'PostgreSQL', 'REST APIs'],
    highlights: [
      '4,000+ provider listings',
      'Geolocation-based queries',
      'Advanced search & filtering',
      'Database indexing',
      'Query optimization',
      'Sub-200ms API response times under load',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    caseStudy:
      'HerPlan required efficient querying across 4,000+ provider listings with geolocation-based search. PostgreSQL was chosen for its robust geospatial query support. Database indexing on frequently queried columns (location, category, availability) combined with query optimization techniques brought API response times to sub-200ms under load. The backend supports complex filtering combinations including proximity, service type, and availability — all served through clean REST API endpoints.',
  },
  {
    id: 'bible-app',
    name: 'Supabase Bible Mobile Applications',
    category: 'Mobile / Offline-first',
    description:
      'Cross-device Bible mobile applications with offline-first synchronization, Row Level Security, and real-time subscriptions powered by Supabase.',
    techStack: ['React Native', 'Supabase', 'SQLite'],
    highlights: [
      'Offline-first synchronization',
      'Row Level Security (RLS)',
      'Real-time subscriptions',
      'Cross-device content access',
      'Local persistence with SQLite',
    ],
    githubUrl: '',
    liveUrl: '',
    featured: true,
    caseStudy:
      'The Bible mobile apps were built with an offline-first architecture, allowing users to access content without connectivity. Supabase provides the backend layer with Row Level Security ensuring users only see authorized content. Real-time subscriptions push updates when connectivity is restored. SQLite handles local persistence, with a sync layer reconciling local and remote state. The architecture ensures a seamless experience whether online or offline.',
  },
  {
    id: 'legislator-scorecard',
    name: 'Legislator Scorecard System',
    category: 'Civic Tech',
    description:
      'Systems for processing and exposing structured legislative voting data through REST APIs.',
    techStack: ['Node.js', 'REST APIs'],
    highlights: [
      'Structured legislative data processing',
      'REST API exposure',
      'Database-backed application',
      'Voting data aggregation',
    ],
    githubUrl: '',
    liveUrl: '',
    caseStudy:
      'The legislator scorecard system processes raw legislative voting data into structured, queryable formats. The backend handles data ingestion, normalization, and exposes clean REST API endpoints for retrieving legislator voting records, bill summaries, and scorecard calculations. The system enables transparent access to legislative voting patterns.',
  },
  {
    id: 'ai-meeting-summarizer',
    name: 'AI Meeting Summarizer Agent',
    category: 'AI / LLM',
    label: 'Personal / Learning Project',
    description:
      'A Python-based AI agent using the OpenAI API to process meeting transcripts and generate structured meeting summaries.',
    techStack: ['Python', 'OpenAI API', 'AI Agent'],
    highlights: [
      'Transcript processing',
      'Structured output generation',
      'AI agent workflow',
      'File-based output generation',
    ],
    githubUrl: '',
    liveUrl: '',
    caseStudy:
      'Built a Python-based AI agent that takes meeting transcripts as input, processes them through the OpenAI API, and generates structured meeting summaries including key decisions, action items, and discussion points. The agent produces file-based output for easy sharing and archival.',
  },
  {
    id: 'csv-query-agent',
    name: 'CSV / Excel Data Query & Reporting Agent',
    category: 'AI / LLM',
    label: 'Personal / Learning Project',
    description:
      'An AI agent capable of working with CSV and Excel datasets, answering natural-language questions about the data.',
    techStack: ['Python', 'OpenAI API', 'Tool / Function Calling'],
    highlights: [
      'Natural-language to data operations',
      'Filtering records',
      'Aggregating salary data',
      'Sorting by seniority',
      'Summary report generation',
    ],
    githubUrl: '',
    liveUrl: '',
    caseStudy:
      'Built an AI agent that accepts CSV and Excel datasets and answers natural-language questions. Using tool/function calling, the agent translates user queries into data operations — filtering records, aggregating salary data, sorting employees by seniority — and generates natural-language summary reports from the results.',
  },
  {
    id: 'database-agent',
    name: 'Database Agent',
    category: 'AI / LLM',
    label: 'Personal / Learning Project',
    description:
      'An AI-powered database agent that allows users to interact with database records through natural-language prompts.',
    techStack: ['Python', 'OpenAI / GenAI', 'Database'],
    highlights: [
      'Natural-language database interaction',
      'LLM reasoning',
      'Tool/function execution',
      'Adding records',
      'Displaying records',
      'AI-driven workflow',
    ],
    githubUrl: '',
    liveUrl: '',
    caseStudy:
      'Built an AI-powered database agent that enables natural-language interaction with database records. Users can add records, display records, and perform operations through conversational prompts. The agent uses LLM reasoning to interpret intent and executes tool/function calls to perform the corresponding database operations.',
  },
];

export const aiProgression = [
  { stage: 'MERN / Backend Engineering', status: 'Professional' },
  { stage: 'Python', status: 'Building' },
  { stage: 'OpenAI API', status: 'Building' },
  { stage: 'AI Agents', status: 'Building' },
  { stage: 'Tool / Function Calling', status: 'Building' },
  { stage: 'RAG / MCP', status: 'Currently Exploring' },
  { stage: 'FastAPI / CrewAI', status: 'Currently Exploring' },
];

export const aiTechnologies = [
  { name: 'OpenAI API', status: 'Building' },
  { name: 'Generative AI', status: 'Building' },
  { name: 'LLM-powered Applications', status: 'Building' },
  { name: 'Python AI Agents', status: 'Building' },
  { name: 'Tool / Function Calling', status: 'Building' },
  { name: 'Prompt Engineering', status: 'Building' },
  { name: 'RAG', status: 'Currently Exploring' },
  { name: 'MCP', status: 'Currently Exploring' },
  { name: 'LangChain', status: 'Currently Exploring' },
  { name: 'FastAPI', status: 'Currently Exploring' },
  { name: 'CrewAI', status: 'Currently Exploring' },
];

export const skills = {
  programming: ['JavaScript ES6+', 'TypeScript', 'Python', 'SQL'],
  frontend: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native'],
  backend: [
    'Node.js',
    'Express.js',
    'REST APIs',
    'API Integration',
    'GraphQL',
    'Microservices',
    'JWT Authentication',
    'OAuth2',
    'RBAC',
  ],
  databases: [
    'MongoDB',
    'PostgreSQL',
    'Supabase',
    'Redis',
    'Database Schema Design',
    'Query Optimization',
    'Supabase RLS',
    'Realtime Subscriptions',
  ],
  ai: [
    'OpenAI API',
    'Generative AI',
    'LLM Applications',
    'Python AI Agents',
    'Tool / Function Calling',
    'Natural-language Data Query Agents',
    'CSV/Excel Data Agents',
    'Database Agents',
    'Prompt Engineering',
    'RAG',
    'MCP',
    'LangChain',
    'FastAPI',
    'CrewAI',
  ],
  devops: ['Git', 'GitHub', 'Docker', 'CI/CD (Basic)', 'AWS (Basic)', 'Linux', 'PM2', 'Agile/Scrum'],
};

export const highlights = [
  { value: '2+', label: 'Years Professional Experience' },
  { value: '64', label: 'Team Tournament Backend' },
  { value: '4,000+', label: 'Provider Listings' },
  { value: '<200ms', label: 'API Response Under Load' },
  { value: 'Multi-Tenant', label: 'HR Architecture' },
  { value: 'JWT + RBAC', label: 'Auth Implementation' },
  { value: 'Redis', label: 'Caching & Optimization' },
  { value: 'Offline-first', label: 'Mobile Applications' },
];

export const education = [
  {
    institution: 'Maulana Abul Kalam Azad University of Technology (MAKAUT), WB',
    degree: 'Bachelor of Technology',
    field: 'Electronics Communication & Engineering',
    period: '2021 – 2024',
  },
  {
    institution: 'WBSCT&VE&SD',
    degree: 'Diploma',
    field: 'Computer Science',
    period: '2017 – 2020',
  },
];

export const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'AI', href: 'ai' },
  { label: 'Contact', href: 'contact' },
];

export const architectureSteps = {
  web: [
    { label: 'Client', detail: 'Browser / Mobile App' },
    { label: 'React / React Native', detail: 'UI Layer' },
    { label: 'REST / GraphQL API', detail: 'API Gateway' },
    { label: 'Node.js / Express.js', detail: 'Application Server' },
    { label: 'Business Logic', detail: 'Services & Middleware' },
    { label: 'MongoDB / PostgreSQL', detail: 'Data Layer' },
    { label: 'Redis / External APIs', detail: 'Caching & Integration' },
  ],
  ai: [
    { label: 'User', detail: 'Natural Language Input' },
    { label: 'LLM', detail: 'Reasoning Engine' },
    { label: 'Tool / Function Calling', detail: 'Action Dispatch' },
    { label: 'Database / Files / APIs', detail: 'Data Sources' },
    { label: 'Structured Result', detail: 'Processed Output' },
    { label: 'Natural Language Response', detail: 'User-Facing Answer' },
  ],
};
