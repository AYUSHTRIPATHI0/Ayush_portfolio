'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Rocket, 
  Users, 
  Activity, 
  HeartHandshake, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react';
import Image from 'next/image';

const ventures = [
  {
    name: 'sitekraft.dev',
    tagline: 'High-Impact Digital Solutions & Web Infrastructure',
    description: 'Digital engineering venture crafting high-conversion web platforms, full-stack applications, and performant tech infrastructure for modern startups and scaling businesses.',
    status: 'Active Venture',
    role: 'Founder & Lead Architect',
    link: 'https://sitekraft.dev',
    icon: Rocket,
    accent: 'from-indigo-500 to-purple-600',
    borderColor: 'group-hover:border-indigo-500/50',
    tags: ['Next.js 14', 'TypeScript', 'TailwindCSS', 'Cloud Architecture'],
    metrics: ['Custom Architectures', 'Sub-second Latency', 'SEO Optimized'],
    image: '/enhanced/night-lab-architecture.jpg',
    imageCaption: 'Architecting wireframes & digital solutions late at night',
  },
  {
    name: 'devQBX.in',
    tagline: 'Collaborative Technology Ecosystem for Builders',
    description: 'A developer-first ecosystem empowering the next generation of engineers, builders, and innovators with tools, open-source resources, and collaborative project development.',
    status: 'Community & Platform',
    role: 'Founder & Ecosystem Lead',
    link: 'https://devQBX.in',
    icon: Users,
    accent: 'from-cyan-500 to-blue-600',
    borderColor: 'group-hover:border-cyan-500/50',
    tags: ['Node.js', 'React', 'MongoDB', 'Open Source', 'APIs'],
    metrics: ['Builder Community', 'Developer Tooling', 'Hackathon Sprints'],
    image: '/enhanced/hackathon-team-sprint.jpg',
    imageCaption: 'devQBX engineering sprint & collaborative team hack',
  },
  {
    name: 'AyuSutra AI',
    tagline: 'AI-Powered Preventive Healthcare & Health Analytics',
    description: 'Intelligent preventive healthcare platform revolutionizing patient milestone tracking, instant AI symptom analysis, and wellness insights based on continuous biometric assessment.',
    status: 'CU TBI Incubator Exhibitor',
    role: 'Co-Founder & AI Product Lead',
    link: 'https://aayusu.netlify.app/',
    icon: Activity,
    accent: 'from-emerald-500 to-teal-600',
    borderColor: 'group-hover:border-emerald-500/50',
    tags: ['Artificial Intelligence', 'HealthTech', 'Python', 'React', 'Predictive ML'],
    metrics: ['Exhibited @ India AI Convergence', 'Chandigarh Univ. TBI', 'Preventive AI'],
    image: '/enhanced/ayusutra-healthcare-booth.jpg',
    imageCaption: 'Ayush demonstrating AyuSutra at India AI Convergence 2026',
  },
  {
    name: 'Luniva AI',
    tagline: 'Revolutionizing Menstrual & Mental Wellness with AI',
    description: 'AI companion app providing real-time cycle forecasting, mood and symptom analytics, doctor consultation access, and personalized psychological wellness guidance.',
    status: "India's 1st AI Fest Showcase",
    role: 'Co-Founder & Tech Builder',
    link: '#',
    icon: HeartHandshake,
    accent: 'from-pink-500 to-rose-600',
    borderColor: 'group-hover:border-pink-500/50',
    tags: ['Conversational AI', 'Wellness Intelligence', 'Mobile App', 'Real-Time Insights'],
    metrics: ['Exhibited at AI Fest 2026', 'CU Tech Business Incubator', 'User Companion'],
    image: '/enhanced/luniva-ai-fest-booth.jpg',
    imageCaption: 'Luniva AI official exhibition booth at India’s First AI Fest',
  },
];

export default function Startups() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="ventures" className="py-28 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Venture Portfolio & Companies</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Founded & Incubated <span className="gradient-text">Ventures</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            From consumer AI platforms exhibited at national summits to high-performance digital agencies and developer ecosystems.
          </p>
        </motion.div>

        {/* 2x2 Grid of Startups */}
        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((v, index) => {
            const IconComponent = v.icon;
            return (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group rounded-3xl overflow-hidden border border-white/10 bg-dark-900/60 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${v.borderColor}`}
              >
                {/* Visual Real Photo Banner */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-dark-950">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />

                  {/* Top Status & Role Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-dark-950/80 backdrop-blur-md border border-white/10 text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {v.status}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono bg-dark-950/80 backdrop-blur-md border border-white/10 text-gray-300">
                      {v.role}
                    </span>
                  </div>

                  {/* Bottom Image Caption Tag */}
                  <div className="absolute bottom-3 left-4 right-4 text-[11px] font-mono text-gray-300 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md inline-block truncate">
                    📍 {v.imageCaption}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Header with Title and Icon */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                          {v.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-indigo-400 mt-1">
                          {v.tagline}
                        </p>
                      </div>

                      <div className={`p-3 rounded-2xl bg-gradient-to-tr ${v.accent} text-white shadow-lg`}>
                        <IconComponent size={22} />
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6 mt-3">
                      {v.description}
                    </p>

                    {/* Impact Highlights */}
                    <div className="space-y-1.5 mb-6">
                      <div className="text-xs uppercase font-mono tracking-wider text-gray-400">Key Highlights</div>
                      <div className="flex flex-wrap gap-2">
                        {v.metrics.map((metric, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200"
                          >
                            <ShieldCheck size={12} className="text-emerald-400" />
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer with Tech Tags & Link */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {v.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {v.link !== '#' ? (
                      <a
                        href={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                      >
                        <span>Visit Platform</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-400">
                        CU TBI Showcase
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
