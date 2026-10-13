'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Instagram, ArrowUp, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ayushtripathi00/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/AYUSHTRIPATHI0', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com/@realayush00', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/ayush_tripthi', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-dark-950/80 backdrop-blur-md pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-dark-900 rounded-[7px] flex items-center justify-center font-bold text-xs text-white">
                  AT
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ayush Tripathi
              </span>
            </Link>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Startup Founder & AI Systems Engineer. Building <span className="text-indigo-400 font-medium">sitekraft.dev</span> and cultivating developer ecosystems through <span className="text-cyan-400 font-medium">devQBX.in</span>.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Shipped from India to the World</span>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold mb-4">
              Explore Portfolio
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <a href="#ventures" className="hover:text-cyan-400 transition">Ventures</a>
              <a href="#milestones" className="hover:text-cyan-400 transition">Milestones & Talks</a>
              <a href="#projects" className="hover:text-cyan-400 transition">Featured Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition">Tech Stack</a>
              <a href="#gallery" className="hover:text-cyan-400 transition">Journey Gallery</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Get In Touch</a>
            </div>
          </div>

          {/* Socials & Connect (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold">
              Connect With Ayush
            </h4>

            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition pt-2"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} Ayush Tripathi. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <span>Crafted with Next.js 14, TailwindCSS & Passion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
