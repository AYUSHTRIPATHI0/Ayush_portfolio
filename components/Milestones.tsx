'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Mic2, 
  Video, 
  Award, 
  Terminal, 
  MapPin, 
  Calendar, 
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

const milestones = [
  {
    type: 'Media & Summit Feature',
    title: 'Featured AI Visionary Interview at India AI Convergence 2026',
    organization: 'Chandigarh University Technology Business Incubator (TBI)',
    date: 'January 2026',
    location: 'Mohali, Punjab',
    icon: Video,
    accent: 'from-purple-500 to-indigo-600',
    description:
      'Interviewed on-camera by national media as an emerging AI founder and innovator during the India AI Convergence 2026 summit, an official pre-event for the India AI Impact Summit.',
    takeaways: [
      'Showcased AyuSutra healthcare AI system',
      'Discussed the future of generative AI & automated diagnosis in India',
      'Recognized by academic & startup incubator leadership',
    ],
    image: '/enhanced/cu-ai-convergence-interview.jpg',
    imageAlt: 'Ayush Tripathi interviewed on camera at Chandigarh University Technology Business Incubator',
  },
  {
    type: 'Keynote & Speaker Session',
    title: 'Keynote Speaker: "From Idea to POC: How to Win & Scale"',
    organization: 'Developer Community & Tech Summit',
    date: 'March 2026',
    location: 'Campus Auditorium',
    icon: Mic2,
    accent: 'from-blue-500 to-cyan-600',
    description:
      'Delivered an interactive masterclass for 150+ aspiring engineers and founders on transforming napkin sketches into functional MVPs, winning technical hackathons, and architecting scalable backend systems.',
    takeaways: [
      'System design blueprints for 48-hour hackathon builds',
      'Validating market demand before writing extensive code',
      'Integrating AI APIs into production web workflows',
    ],
    image: '/enhanced/keynote-pitch.jpg',
    imageAlt: 'Ayush Tripathi delivering keynote speech with microphone in blazer',
  },
  {
    type: 'Incubator Exhibition',
    title: 'Dual Venture Booth at India’s First AI Fest & AI Convergence',
    organization: 'Chandigarh University AI Fest',
    date: 'January - March 2026',
    location: 'Exhibition Pavilion',
    icon: Award,
    accent: 'from-emerald-500 to-teal-600',
    description:
      'Selected to host dedicated exhibition booths for two distinct AI startups: Luniva AI (cycle & mental wellness platform) and AyuSutra (preventive healthcare engine), demoing live to hundreds of attendees, mentors, and investors.',
    takeaways: [
      'Live interactive software demos on production deployments',
      'Collected early user feedback & mentor validation',
      'Presented venture deck to university incubator evaluators',
    ],
    image: '/enhanced/luniva-ai-fest-booth.jpg',
    imageAlt: 'Luniva AI startup booth at India First AI Fest',
  },
  {
    type: 'Team Leadership & Sprints',
    title: 'Leading Hackathon Teams & Collaborative Midnight Sprints',
    organization: 'devQBX & Competitive Hackathons',
    date: 'Ongoing',
    location: 'Innovation Labs',
    icon: Terminal,
    accent: 'from-cyan-500 to-blue-600',
    description:
      'Leading cross-functional developer squads under the devQBX banner to ideate, prototype, and ship full-stack web and machine learning solutions under strict time constraints.',
    takeaways: [
      'Full-stack rapid prototyping in Next.js, Node, and MongoDB',
      'Coordinating backend API architecture with intuitive frontend UX',
      'Mentoring junior developers through hands-on pair programming',
    ],
    image: '/enhanced/hackathon-team-sprint.jpg',
    imageAlt: 'Ayush with dev team at hackathon tables with laptops',
  },
];

export default function Milestones() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="milestones" className="py-28 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono mb-4">
            <Sparkles size={13} className="text-cyan-400" />
            <span>Proof of Work & Industry Validation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Keynotes, Press & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Real stage presence, verified media interviews, and founder validation at leading technological summits.
          </p>
        </motion.div>

        {/* Timeline / Milestone Cards */}
        <div className="space-y-12">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="rounded-3xl border border-white/10 bg-dark-900/60 backdrop-blur-xl p-6 sm:p-8 lg:p-10 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                  
                  {/* Image Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? '' : 'lg:col-start-8'}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-dark-950 border border-white/10 shadow-lg group">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60" />
                      
                      {/* Floating pill over image */}
                      <div className="absolute bottom-3 left-3 right-3 p-2 rounded-xl bg-dark-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-300 truncate">
                        📸 {item.imageAlt}
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:col-start-1'}`}>
                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.accent} shadow-md`}>
                        {item.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                        <Calendar size={13} className="text-indigo-400" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-gray-400">
                        <MapPin size={13} className="text-cyan-400" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-indigo-400 mb-4">
                      {item.organization}
                    </p>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Takeaways */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <p className="text-xs font-mono uppercase tracking-wider text-gray-400">Impact & Takeaways:</p>
                      <div className="grid sm:grid-cols-1 gap-2">
                        {item.takeaways.map((takeaway, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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
