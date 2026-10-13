'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Cpu, 
  Globe, 
  Server, 
  Compass, 
  Sparkles, 
  CheckCircle,
  Terminal,
  Workflow
} from 'lucide-react';

const skillTiers = [
  {
    title: 'AI & Intelligent Systems',
    subtitle: 'Machine Learning, LLM Workflows & Predictive Engines',
    icon: Cpu,
    accent: 'from-purple-500 to-indigo-600',
    borderHover: 'group-hover:border-purple-500/50',
    skills: [
      { name: 'Python', level: 'Advanced', tag: 'Core Language' },
      { name: 'Scikit-Learn & ML', level: 'Proficient', tag: 'Supervised Models' },
      { name: 'OpenAI & Gemini APIs', level: 'Advanced', tag: 'LLM Integration' },
      { name: 'RAG & Vector Search', level: 'Intermediate', tag: 'Retrieval' },
      { name: 'Prompt Architecture', level: 'Advanced', tag: 'System Prompts' },
      { name: 'Data Preprocessing', level: 'Proficient', tag: 'Pandas & NumPy' },
    ],
  },
  {
    title: 'Frontend & Web Platforms',
    subtitle: 'Next-Gen Interactive User Interfaces & Responsive Systems',
    icon: Globe,
    accent: 'from-blue-500 to-cyan-500',
    borderHover: 'group-hover:border-cyan-500/50',
    skills: [
      { name: 'Next.js 14 (App Router)', level: 'Advanced', tag: 'SSR & SSG' },
      { name: 'React 18', level: 'Advanced', tag: 'Hooks & Architecture' },
      { name: 'TypeScript', level: 'Proficient', tag: 'Type Safety' },
      { name: 'TailwindCSS', level: 'Advanced', tag: 'Design Systems' },
      { name: 'Framer Motion', level: 'Proficient', tag: 'Interactive Physics' },
      { name: 'Performance Optimization', level: 'Advanced', tag: 'Core Web Vitals' },
    ],
  },
  {
    title: 'Backend & Cloud APIs',
    subtitle: 'Scalable Microservices, Databases & Cloud Deployments',
    icon: Server,
    accent: 'from-emerald-500 to-teal-500',
    borderHover: 'group-hover:border-emerald-500/50',
    skills: [
      { name: 'Node.js & Express', level: 'Advanced', tag: 'RESTful APIs' },
      { name: 'MongoDB & Mongoose', level: 'Proficient', tag: 'Document DB' },
      { name: 'Firebase Ecosystem', level: 'Advanced', tag: 'Auth & Firestore' },
      { name: 'FastAPI (Python)', level: 'Intermediate', tag: 'High-speed APIs' },
      { name: 'JWT & Security Protocols', level: 'Proficient', tag: 'User Auth' },
      { name: 'Vercel & Netlify Edge', level: 'Advanced', tag: 'CI/CD Cloud' },
    ],
  },
  {
    title: 'Founder & Venture Velocity',
    subtitle: 'Product Architecture, Hackathons & Rapid Prototyping',
    icon: Compass,
    accent: 'from-amber-500 to-rose-500',
    borderHover: 'group-hover:border-amber-500/50',
    skills: [
      { name: 'Rapid 48h MVP Prototyping', level: 'Expert', tag: 'Hackathon Winning' },
      { name: 'System Architecture Design', level: 'Advanced', tag: 'End-to-End Specs' },
      { name: 'Technical Keynotes & Pitching', level: 'Advanced', tag: 'Stage Presentations' },
      { name: 'Developer Community Leadership', level: 'Advanced', tag: 'devQBX Lead' },
      { name: 'SEO & Growth Engineering', level: 'Advanced', tag: 'Organic Indexing' },
      { name: 'Git & Agile Sprint Delivery', level: 'Advanced', tag: 'Version Control' },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono mb-4">
            <Workflow size={13} className="text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering & Founder <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            The multi-disciplinary toolkit I leverage to design, construct, and scale production systems.
          </p>
        </motion.div>

        {/* 2x2 Grid of Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillTiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl p-7 sm:p-8 hover:border-white/20 transition-all duration-300 group ${tier.borderHover}`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${tier.accent} text-white shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tier.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-0.5">
                      {tier.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {tier.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm font-semibold text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-300">
                          {skill.level}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-gray-400">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
