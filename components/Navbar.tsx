'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowUpRight, 
  Sparkles, 
  MessageSquare, 
  Phone,
  Github,
  Linkedin
} from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#ventures', label: 'Ventures' },
    { href: '#milestones', label: 'Milestones & Talks' },
    { href: '#projects', label: 'Projects & Builds' },
    { href: '#skills', label: 'Tech Stack' },
    { href: '#gallery', label: 'Journey' },
    { href: '#contact', label: 'Connect' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-6 pointer-events-none"
    >
      <div
        className={`w-full max-w-6xl transition-all duration-300 pointer-events-auto rounded-2xl ${
          scrolled || isOpen
            ? 'glass bg-dark-950/90 shadow-2xl shadow-black/60 border border-white/10 px-4 sm:px-5 py-3 sm:py-3.5'
            : 'bg-dark-950/40 backdrop-blur-md border border-white/5 px-4 sm:px-6 py-3.5 sm:py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition">
              <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300">
                  AT
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white flex items-center gap-1.5 text-sm sm:text-lg">
                Ayush Tripathi
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 tracking-wider uppercase -mt-0.5">
                Founder • sitekraft.dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-cyan-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition text-gray-300 hover:text-white"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition"
            >
              <Sparkles size={14} className="text-cyan-200" />
              <span>Let&apos;s Build</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-white/10 bg-white/5 text-gray-300"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden border-t border-white/10 mt-3 pt-3"
            >
              <div className="flex flex-col gap-1 py-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="text-gray-500" />
                  </a>
                ))}

                {/* Mobile Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-3 mt-1 border-t border-white/10">
                  <a
                    href="https://wa.me/918009651086?text=Hi%20Ayush,%20I%20saw%20your%20portfolio!"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+918009651086"
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-xs font-semibold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 flex items-center justify-center gap-1.5"
                  >
                    <Phone size={14} />
                    <span>Direct Call</span>
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 text-center py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-1.5"
                >
                  <Sparkles size={14} />
                  <span>Start a Project Sprint</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
