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
  Activity,
  Receipt,
  Plane,
  Video,
  Store,
  ArrowUpRight
} from 'lucide-react';

const categories = ['All Builds', 'SaaS & AI Platforms', 'Client Projects', 'Incubator Ventures'];

const projectsData = [
  {
    title: 'DroneClean AI – Omnichannel Booking OS',
    category: 'SaaS & AI Platforms',
    clientType: 'Production AI Client Project',
    description: 'Autonomous conversational AI agent turning WhatsApp Cloud, Instagram DM, and Messenger inquiries into confirmed industrial service bookings 24/7 without human intervention.',
    architecture: 'Google Gemini API • Meta Graph API (WhatsApp Cloud, IG, Messenger) • Twilio • Next.js 15 • MongoDB • PDF-Parse',
    tech: ['Gemini API', 'WhatsApp Cloud API', 'Meta Graph', 'Next.js 15', 'MongoDB', 'Twilio'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Bot,
    accent: 'from-purple-500 to-indigo-600',
    stats: '24/7 Automated Bookings',
    origin: 'Sitekraft.dev Build',
  },
  {
    title: 'Billing Studio Pro',
    category: 'SaaS & AI Platforms',
    clientType: 'In-House SaaS Platform',
    description: 'Zero-commission dynamic invoice, quotation, and transactional email studio engineered with an in-house universal UPI QR payment bridge and automatic client-side PDF billing dispatch.',
    architecture: 'Next.js 16 App Router • React 19 • Node.js • Express • UPI QR Server API • Nodemailer • SQLite / JSON DB',
    tech: ['Next.js 16', 'React 19', 'Express', 'UPI QR Bridge', 'Nodemailer', 'REST API'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Receipt,
    accent: 'from-emerald-500 to-teal-600',
    stats: '0% Commission UPI Bridge',
    origin: 'Sitekraft.dev SaaS',
  },
  {
    title: 'eLearnNEarn (ELNN) FinTech',
    category: 'Client Projects',
    clientType: 'Commercial FinTech & EdTech',
    description: 'Next-gen Learn-to-Earn ecosystem transforming skill acquisition, viral multi-tier referrals, and dual-bucket rewards into insured financial security with OCR verification and Razorpay.',
    architecture: 'Next.js 16 • React 19 • Prisma ORM • MongoDB • Razorpay • Tesseract.js OCR • Recharts • Framer Motion',
    tech: ['Next.js 16', 'Prisma ORM', 'MongoDB', 'Razorpay', 'Tesseract OCR', 'Recharts'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Globe,
    accent: 'from-cyan-500 to-blue-600',
    stats: 'Viral Referral Engine',
    origin: 'Sitekraft.dev Build',
  },
  {
    title: 'Clipsoo – Creator Campaign Marketplace',
    category: 'Client Projects',
    clientType: 'Performance Marketing Platform',
    description: 'High-performance creator marketing platform allowing brands to launch campaigns, verify authentic views with fraud protection, and pay creators only for validated organic reach.',
    architecture: 'Next.js 15 • React 19 • Clerk Auth • Cloudinary • Three.js • Docker • MongoDB • Resend • Zod',
    tech: ['Next.js 15', 'Clerk Auth', 'Three.js 3D', 'MongoDB', 'Cloudinary', 'Docker'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Video,
    accent: 'from-pink-500 to-rose-600',
    stats: 'Verified Reach Engine',
    origin: 'Sitekraft.dev Build',
  },
  {
    title: 'Drone Cleaning NT (Australia)',
    category: 'Client Projects',
    clientType: 'Industrial Robotics Platform',
    description: 'Zero-scaffolding high-altitude drone cleaning & instant quote automation platform with interactive 3D particle drone rendering and instant square-footage estimator.',
    architecture: 'Next.js 15 • Three.js 3D • React 19 • Tailwind CSS v4 • Framer Motion • Canvas Confetti • Nodemailer',
    tech: ['Three.js 3D', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Plane,
    accent: 'from-amber-500 to-orange-600',
    stats: '3D Interactive Platform',
    origin: 'Sitekraft.dev Build',
  },
  {
    title: 'Smart Galla Retail ERP',
    category: 'SaaS & AI Platforms',
    clientType: 'Enterprise Retail Automation',
    description: 'High-volume retail automation suite for merchants featuring sub-second WebSocket synchronization, offline-first PWA capabilities, and thermal POS hardware integration.',
    architecture: 'React • Node.js • WebSockets • Offline PWA Caching • MongoDB • Thermal POS Integration',
    tech: ['React', 'WebSockets', 'Offline-First PWA', 'Node.js', 'Hardware POS'],
    liveUrl: 'https://sitekraft.dev',
    githubUrl: null,
    icon: Store,
    accent: 'from-blue-500 to-indigo-600',
    stats: 'Sub-Second Sync',
    origin: 'Sitekraft.dev ERP',
  },
  {
    title: 'AyuSutra AI Healthcare',
    category: 'Incubator Ventures',
    clientType: 'CU TBI Incubator Showcase',
    description: 'Intelligent preventive healthcare diagnostic web platform exhibited at Chandigarh University Technology Business Incubator during India AI Convergence 2026.',
    architecture: 'Python Machine Learning Models • React 18 • RESTful Microservices • Netlify Edge',
    tech: ['Python', 'Machine Learning', 'React', 'TailwindCSS'],
    liveUrl: 'https://aayusu.netlify.app/',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Activity,
    accent: 'from-emerald-500 to-teal-600',
    stats: 'India AI Convergence 2026',
    origin: 'Incubated Venture',
  },
  {
    title: 'devQBX Ecosystem Hub',
    category: 'Incubator Ventures',
    clientType: 'Developer Ecosystem',
    description: 'Centralized collaborative platform for builders and developers to discover tools, coordinate 48-hour hackathon sprints, and build open-source projects.',
    architecture: 'Node.js Express API • MongoDB Atlas • React Client • Docker • JWT Auth',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
    liveUrl: 'https://devQBX.in',
    githubUrl: 'https://github.com/AYUSHTRIPATHI0',
    icon: Database,
    accent: 'from-cyan-500 to-blue-600',
    stats: 'Builder Community',
    origin: 'Incubated Venture',
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Builds');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'All Builds' 
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
            <span>Sitekraft Studio & Incubator Builds</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Production Builds & <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Real commercial SaaS platforms, client software architectures, and AI systems engineered and shipped by Ayush Tripathi at <a href="https://sitekraft.dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-semibold">sitekraft.dev</a>.
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
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/50 transition-all duration-300 group"
                >
                  <div>
                    {/* Header: Icon, Origin Tag & Links */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-tr ${project.accent} text-white shadow-lg`}>
                        <Icon size={22} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300">
                          {project.origin}
                        </span>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Platform"
                            className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Category & Stats Badge */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                        {project.clientType}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.stats}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 leading-snug">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Architecture Details */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-gray-400 font-mono mb-5">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-0.5">Architecture Specs:</span>
                      {project.architecture}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="pt-3.5 border-t border-white/10 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
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

        {/* Bottom Banner linking to sitekraft.dev */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-dark-900/60 to-cyan-950/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Want to see more production builds or commission a sprint?
            </h4>
            <p className="text-sm text-gray-400">
              Explore 30+ engineering hubs, client case studies, and 14-21 day delivery sprints at sitekraft.dev.
            </p>
          </div>
          <a
            href="https://sitekraft.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:scale-105 transition shadow-lg shrink-0"
          >
            <span>Visit sitekraft.dev</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
