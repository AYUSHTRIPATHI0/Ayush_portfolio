'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  Terminal, 
  Target, 
  Lightbulb, 
  Code2, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

const pillars = [
  {
    icon: Terminal,
    title: 'Zero-to-One Velocity',
    desc: 'Transforming napkin concepts and system architecture blueprints into deployed production platforms in record time.',
  },
  {
    icon: Target,
    title: 'Applied AI, Not Hype',
    desc: 'Architecting machine learning solutions with real utility—like preventive healthcare diagnostics and wellness tracking.',
  },
  {
    icon: Code2,
    title: 'Engineering Rigor',
    desc: 'Obsessed with clean codebases, type safety, sub-second latency, and scalable microservice architectures.',
  },
  {
    icon: Lightbulb,
    title: 'Community Empowerment',
    desc: 'Building devQBX to mentor emerging builders, lead hackathons, and foster collaborative open-source ecosystems.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Founder Philosophy & Background</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            The Visionary Behind <span className="gradient-text">The Builds</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Bridging technical precision, product intuition, and founder ambition.
          </p>
        </motion.div>

        {/* 2-Column Story Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-dark-900 shadow-2xl p-2">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-dark-950">
                <Image
                  src="/enhanced/keynote-pitch.jpg"
                  alt="Ayush Tripathi speaking on stage with microphone in suit"
                  fill
                  className="object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-dark-950/85 backdrop-blur-md border border-white/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-cyan-400">Founder Statement</p>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    &ldquo;Code is the leverage. Building ventures is the vehicle for impact.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Pillars (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                I am a founder, AI engineer, and systems architect based in India. I operate at the intersection of full-stack engineering and startup venturing, converting ambitious technical ideas into commercially viable, high-performing software platforms.
              </p>
              <p>
                Through <span className="text-indigo-400 font-semibold">sitekraft.dev</span>, I architect modern digital infrastructure and custom web applications for fast-growing businesses. With <span className="text-cyan-400 font-semibold">devQBX.in</span>, I spearhead a collaborative builder ecosystem where developers unite to build open-source tools and participate in competitive hackathons.
              </p>
              <p>
                My work with AI platforms like <span className="text-purple-400 font-semibold">AyuSutra</span> and <span className="text-pink-400 font-semibold">Luniva AI</span> was selected for national-level exhibitions at <span className="text-white font-semibold">Chandigarh University Technology Business Incubator</span> during India AI Convergence 2026.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              {pillars.map((pillar, pIdx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={pIdx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-cyan-400">
                        <Icon size={18} />
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
              >
                <span>Connect with Ayush for consulting or collaboration</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
