'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Youtube, 
  Instagram, 
  Sparkles, 
  Check, 
  Copy, 
  MessageSquare,
  Award,
  Terminal,
  Cpu
} from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = 'tripathiayush944@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const stats = [
    { value: '4+', label: 'Ventures & Products', hint: 'sitekraft, devQBX, AyuSutra, Luniva' },
    { value: '15+', label: 'Production Ships', hint: 'Web, AI Systems & APIs' },
    { value: '2026', label: 'India AI Convergence', hint: 'CU TBI Exhibitor & Speaker' },
    { value: '100%', label: 'Hands-On Builder', hint: 'From Architecture to Scale' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Branding, Story & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Status Pill */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide font-mono">
                Open for High-Impact AI & Venture Collaborations
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-5 leading-[1.08]">
              Hi, I&apos;m <span className="gradient-text">Ayush Tripathi</span>
            </h1>

            {/* Sub-headline / Role */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-lg sm:text-2xl font-semibold text-gray-200 mb-6">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-sm sm:text-base font-mono">
                Startup Founder
              </span>
              <span className="text-gray-500">•</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-sm sm:text-base font-mono">
                AI Systems Engineer
              </span>
              <span className="text-gray-500">•</span>
              <span className="px-2.5 py-1 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-sm sm:text-base font-mono">
                Full-Stack Builder
              </span>
            </div>

            {/* Bio pitch */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Founder building digital products through <span className="text-indigo-300 font-semibold underline decoration-indigo-500/40 underline-offset-4">sitekraft.dev</span> and developer ecosystems at <span className="text-cyan-300 font-semibold underline decoration-cyan-500/40 underline-offset-4">devQBX.in</span>. Exhibited AI innovations (<span className="text-purple-300 font-medium">AyuSutra</span> & <span className="text-pink-300 font-medium">Luniva AI</span>) at <span className="text-white font-medium">India AI Convergence 2026</span>.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#ventures"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:scale-[1.02] active:scale-[0.98] transition group"
              >
                <span>Explore Ventures & Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/918009651086?text=Hi%20Ayush,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium border border-white/10 hover:border-emerald-500/40 bg-white/5 hover:bg-emerald-950/30 text-gray-200 hover:text-emerald-300 transition"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>WhatsApp Chat</span>
              </a>

              {/* One-click email copy */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-mono border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 transition"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400 text-xs">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span className="text-xs">tripathiayush944@gmail.com</span>
                  </>
                )}
              </button>
            </div>

            {/* Social badges bar */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase font-mono tracking-wider text-gray-400 mr-1">
                Network:
              </span>
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ayushtripathi00/', label: 'LinkedIn', color: 'hover:text-cyan-400 hover:border-cyan-500/40' },
                { icon: Github, href: 'https://github.com/AYUSHTRIPATHI0', label: 'GitHub', color: 'hover:text-purple-400 hover:border-purple-500/40' },
                { icon: Youtube, href: 'https://youtube.com/@realayush00', label: 'YouTube', color: 'hover:text-rose-400 hover:border-rose-500/40' },
                { icon: Instagram, href: 'https://instagram.com/ayush_tripthi', label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-500/40' },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 transition ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-Impact Founder Visual Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Card Frame with Glow Border */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-cyan-500/30 shadow-2xl shadow-indigo-950/60">
              <div className="relative rounded-[22px] overflow-hidden bg-dark-900 aspect-[4/5] sm:aspect-[3/4]">
                
                {/* Clean, Sharp Founder Portrait */}
                <Image
                  src="/enhanced/hero-founder.jpg"
                  alt="Ayush Tripathi - Startup Founder & AI Engineer speaking at conference"
                  fill
                  className="object-cover object-top filter contrast-[1.05]"
                  priority
                />

                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />

                {/* Floating Top Badge: Keynote & Stage */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="px-3 py-1.5 rounded-full border border-white/15 bg-dark-950/80 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={13} className="text-cyan-400" />
                    <span className="text-xs font-medium text-white">Founder & Speaker</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-950/70 backdrop-blur-md flex items-center gap-1">
                    <Award size={12} className="text-indigo-400" />
                    <span className="text-[11px] font-mono text-indigo-300">CU AI Fest &apos;26</span>
                  </div>
                </div>

                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl border border-white/10 bg-dark-950/85 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-cyan-400">Core Focus</p>
                      <p className="text-sm font-semibold text-white">AI Products & Scalable Web</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      <Cpu size={13} />
                      <span>sitekraft.dev</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Badge Left */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl border border-white/10 bg-dark-900/90 backdrop-blur-xl shadow-xl shadow-black/50"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white">
                <Terminal size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-mono">Ecosystem</p>
                <p className="text-sm font-bold text-white">devQBX.in</p>
              </div>
            </motion.div>

            {/* Floating Badge Right */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-5 -right-3 sm:-right-5 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl border border-white/10 bg-dark-900/90 backdrop-blur-xl shadow-xl shadow-black/50"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-gray-200">Chandigarh University TBI</span>
            </motion.div>

          </motion.div>

        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold gradient-text tracking-tight font-mono">
                {s.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-white mt-1">
                {s.label}
              </span>
              <span className="text-xs text-gray-400 mt-0.5">
                {s.hint}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
