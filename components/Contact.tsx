'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  MessageSquare, 
  Copy, 
  Check, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'tripathiayush944@gmail.com';
  const phone = '+91 8009651086';

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto fallback link to ensure client receives the message
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Direct Communication & Inquiries</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let&apos;s Build Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Whether you want to build a high-performance web platform at sitekraft.dev, explore an AI partnership, or discuss an investment opportunity—let&apos;s connect.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* WhatsApp Priority Card */}
            <a
              href="https://wa.me/918009651086?text=Hi%20Ayush,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-950/35 hover:border-emerald-500/50 backdrop-blur-xl transition duration-300 group shadow-lg shadow-emerald-950/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                      Fastest Response
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Direct WhatsApp
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      +91 8009651086 (Instant messaging)
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>

            {/* Email Card with 1-click copy */}
            <div className="p-6 rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-indigo-400 transition"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Call Card */}
            <div className="p-6 rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                      Direct Voice Line
                    </span>
                    <a
                      href={`tel:${phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Location & Response Guarantee */}
            <div className="p-5 rounded-2xl border border-white/5 bg-white/5 text-xs text-gray-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Based in India • IST Timezone</span>
              </span>
              <span className="font-mono text-cyan-400">Response &lt; 24h</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl border border-white/10 bg-dark-900/70 backdrop-blur-xl shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Tell me about your product requirements, venture proposal, or technical needs.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Prepared & Launched!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Your email client has opened with your message. If it didn&apos;t trigger, feel free to WhatsApp me directly at +91 8009651086.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                      Subject / Project Goal
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. sitekraft website build / AI Consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share details about what you want to achieve, timeline, and questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-base sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2"
                  >
                    <span>Dispatch Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
