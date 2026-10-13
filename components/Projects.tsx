'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Code2, 
  Layers, 
  Sparkles, 
  Cpu, 
  Database, 
  Globe, 
  Bot,
  Activity
} from 'lucide-react';

const categories = ['All', 'AI & ML', 'Full-Stack Platforms', 'Developer Ecosystem'];

const projectsData = [
  {
    title: 'Sitekraft Digital Platform',
    category: 'Full-Stack Platforms',
    description: 'High-performance digital engineering infrastructure engineered for fast-growing startups and agencies. Delivers sub-second page loads and modern UI architectures.',
    architecture: 'Next.js 14 App Router • TailwindCSS • TypeScript • Framer Motion • Edge Deployments',
    tech: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Vercel Edge'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Globe,
    accent: 'from-indigo-500 to-purple-600',
    stats: '100% Performance Score',
  },
  {
    title: 'AyuSutra AI Health Engine',
    category: 'AI & ML',
    description: 'Intelligent preventive healthcare diagnostic web platform that analyzes reported symptoms, provides holistic lifestyle guidance, and tracks continuous patient milestones.',
    architecture: 'Python Machine Learning Models • React 18 • RESTful Microservices • Netlify',
    tech: ['Python', 'Machine Learning', 'React', 'TailwindCSS'],
    liveUrl: 'https://aayusu.netlify.app/',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Activity,
    accent: 'from-emerald-500 to-teal-600',
    stats: 'Exhibited @ India AI 2026',
  },
  {
    title: 'devQBX Ecosystem Hub',
    category: 'Developer Ecosystem',
    description: 'Centralized platform for developers to discover resources, collaborate on open-source codebases, participate in hackathon sprints, and share technical knowledge.',
    architecture: 'Node.js Express API • MongoDB Atlas • React Client • JWT Authentication',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
    liveUrl: 'https://devQBX.in',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Database,
    accent: 'from-cyan-500 to-blue-600',
    stats: 'Developer Community',
  },
  {
    title: 'Luniva AI Wellness Companion',
    category: 'AI & ML',
    description: 'Conversational wellness engine revolutionizing menstrual cycle tracking and mental health symptom correlation with personalized LLM guidance and clinical routing.',
    architecture: 'Conversational AI Pipelines • React • Fast API • Natural Language Processing',
    tech: ['NLP', 'FastAPI', 'React', 'Predictive Modeling'],
    liveUrl: 'https://github.com/AYUSHTRIPATHI0',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Bot,
    accent: 'from-pink-500 to-rose-600',
    stats: "CU AI Fest '26 Showcase",
  },
  {
    title: 'CivicTrack Smart Governance',
    category: 'Full-Stack Platforms',
    description: 'Civic infrastructure portal developed during a national hackathon, connecting citizens directly with municipal departments for GPS-tagged grievance logging and resolution tracking.',
    architecture: 'Geospatial Querying • React Dashboard • Express REST API • Leaflet Maps',
    tech: ['React', 'Node.js', 'Leaflet', 'MongoDB'],
    liveUrl: 'https://github.com/AYUSHTRIPATHI0',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Layers,
    accent: 'from-amber-500 to-orange-600',
    stats: 'Hackathon Sprint Build',
  },
  {
    title: 'AI Medical Risk Classifier',
    category: 'AI & ML',
    description: 'Supervised predictive classification system for early disease risk detection using multi-parameter physiological health records and feature importance analysis.',
    architecture: 'Scikit-Learn • Pandas • NumPy • Flask Microservice • Data Preprocessing Pipeline',
    tech: ['Python', 'Scikit-Learn', 'Flask', 'Pandas'],
    liveUrl: 'https://github.com/AYUSHTRIPATHI0',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Cpu,
    accent: 'from-violet-500 to-indigo-600',
    stats: '94% Validation Accuracy',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono mb-4">
            <Code2 size={13} className="text-cyan-400" />
            <span>Production Architecture & Code</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured Engineering <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Real software systems, AI pipelines, and web applications built from scratch with modern production standards.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-dark-900/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/50 transition-all duration-300 group"
                >
                  <div>
                    {/* Header: Icon, Category & Links */}
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className={`p-3 rounded-2xl bg-gradient-to-tr ${project.accent} text-white shadow-lg`}>
                        <Icon size={22} />
                      </div>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo"
                            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category & Stats Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.stats}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Architecture Details */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-400 font-mono mb-6">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-1">Architecture:</span>
                      {project.architecture}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
