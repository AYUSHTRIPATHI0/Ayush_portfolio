'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Mail, Phone, Code2, ArrowUp } from 'lucide-react';

export default function MobileQuickBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls down past 200px
      setVisible(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 z-40 lg:hidden flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto w-full max-w-sm rounded-2xl border border-white/15 bg-dark-950/85 backdrop-blur-2xl p-2 shadow-2xl shadow-black/80 flex items-center justify-around gap-1.5">
            
            {/* WhatsApp */}
            <a
              href="https://wa.me/918009651086?text=Hi%20Ayush,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Ayush"
              className="flex-1 py-2 px-1 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 active:scale-95 transition"
            >
              <MessageSquare size={17} />
              <span className="text-[10px] font-medium tracking-tight mt-0.5 text-emerald-300">WhatsApp</span>
            </a>

            {/* Email */}
            <a
              href="mailto:tripathiayush944@gmail.com"
              aria-label="Email Ayush"
              className="flex-1 py-2 px-1 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-indigo-400 active:scale-95 transition"
            >
              <Mail size={17} />
              <span className="text-[10px] font-medium tracking-tight mt-0.5 text-indigo-300">Email</span>
            </a>

            {/* Projects / Builds */}
            <a
              href="#projects"
              aria-label="View Projects"
              className="flex-1 py-2 px-1 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-cyan-400 active:scale-95 transition"
            >
              <Code2 size={17} />
              <span className="text-[10px] font-medium tracking-tight mt-0.5 text-cyan-300">Builds</span>
            </a>

            {/* Phone Call */}
            <a
              href="tel:+918009651086"
              aria-label="Call Ayush"
              className="flex-1 py-2 px-1 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-purple-400 active:scale-95 transition"
            >
              <Phone size={17} />
              <span className="text-[10px] font-medium tracking-tight mt-0.5 text-purple-300">Call</span>
            </a>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
