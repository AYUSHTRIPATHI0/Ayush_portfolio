import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Rocket, Cpu, Award, Globe, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Ayush Tripathi | Startup Founder, Chief Architect & AI Systems Engineer',
  description: 'In-depth background, founder journey, and technical philosophy of Ayush Tripathi — Founder of sitekraft.dev and devQBX.in, exhibited at India AI Convergence 2026.',
  keywords: [
    'About Ayush Tripathi',
    'Who is Ayush Tripathi',
    'Ayush Tripathi biography',
    'Ayush Tripathi Sitekraft',
    'Ayush Tripathi devQBX',
    'Ayush Tripathi Chandigarh University',
  ],
  alternates: {
    canonical: 'https://tripathiayush.in/about-ayush-tripathi',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition mb-8 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft size={14} />
          <span>Back to Main Portfolio</span>
        </Link>

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 pb-8 border-b border-white/10">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/15 bg-dark-900 shrink-0 shadow-xl">
            <Image
              src="/enhanced/sitekraft-founder.png"
              alt="Ayush Tripathi"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-2">
              <span>Executive Profile & Bio</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About <span className="gradient-text">Ayush Tripathi</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 mt-1 font-mono">
              Startup Founder • Chief Architect at sitekraft.dev • AI Product Engineer
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-gray-300 text-base sm:text-lg leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Who is Ayush Tripathi?
            </h2>
            <p>
              Ayush Tripathi is an Indian technology founder, full-stack systems architect, and artificial intelligence product engineer. He is the Founder and Chief Architect of <a href="https://sitekraft.dev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 font-semibold underline underline-offset-4">sitekraft.dev</a>, a high-velocity software engineering studio that builds production-ready SaaS platforms, scalable MVPs, and automated AI systems for startups and scaling businesses.
            </p>
            <p>
              In addition to client engineering at Sitekraft, Ayush is the founder of <a href="https://devQBX.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold underline underline-offset-4">devQBX.in</a>, a collaborative ecosystem dedicated to empowering builders and engineers through open developer tooling, mentorship, and high-intensity hackathon sprints.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Incubation & AI Summit Recognitions
            </h2>
            <p>
              Ayush’s AI platforms have been recognized at national-level summits:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-base mb-1">AyuSutra AI Healthcare</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  Selected for exhibition at the Chandigarh University Technology Business Incubator during India AI Convergence 2026, an official pre-event for the India AI Impact Summit.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-bold text-white text-base mb-1">Luniva AI Wellness</h3>
                <p className="text-xs text-gray-400 leading-normal">
                  Exhibited live at India’s First AI Fest, demoing conversational mental health and menstrual wellness companion systems to hundreds of founders and mentors.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Engineering Philosophy & Sprints
            </h2>
            <p>
              Ayush advocates for the <strong>21-day sprint model</strong>: eliminating months of corporate agency bureaucracy to ship battle-tested software in 2 to 3 weeks. His core architectural stack includes Next.js 14/16 (App Router), React 19, TypeScript, Python Machine Learning, MongoDB, PostgreSQL, and LLM orchestration with Google Gemini and OpenAI APIs.
            </p>
          </section>

          {/* Connect Section */}
          <section className="p-7 rounded-3xl bg-dark-900 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white">Interested in collaborating with Ayush?</h3>
              <p className="text-xs sm:text-sm text-gray-400">Available for product sprints, AI consultations, and seed ventures.</p>
            </div>
            <Link
              href="/#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-xs sm:text-sm shrink-0"
            >
              Get In Touch
            </Link>
          </section>

        </div>

      </div>
    </main>
  );
}
