'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MapPin, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    src: '/enhanced/cu-ai-convergence-interview.jpg',
    title: 'National Media Interview at India AI Convergence 2026',
    category: 'Startups & Summits',
    location: 'Chandigarh University TBI',
    caption: 'On-camera interview by media covering emerging young AI innovators and startup founders at India AI Convergence 2026.',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-square sm:aspect-[4/3] md:aspect-auto h-full',
  },
  {
    id: 2,
    src: '/enhanced/keynote-pitch.jpg',
    title: 'Keynote Speaker: Idea to POC & Scaling',
    category: 'Keynotes & Talks',
    location: 'Tech Auditorium',
    caption: 'Delivering keynote presentation on rapid prototyping, winning hackathons, and architecting scalable backend systems.',
    span: 'md:col-span-1',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 3,
    src: '/enhanced/luniva-ai-fest-booth.jpg',
    title: 'Luniva AI Booth at India’s First AI Fest',
    category: 'Startups & Summits',
    location: 'AI Fest Pavilion',
    caption: 'Exhibiting Luniva AI at Chandigarh University Technology Business Incubator, demonstrating cycle & mental wellness companion to attendees.',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    src: '/enhanced/ayusutra-healthcare-booth.jpg',
    title: 'AyuSutra Exhibition Booth at AI Convergence',
    category: 'Startups & Summits',
    location: 'Incubation Centre',
    caption: 'Live demo workstation for AyuSutra (aayusu.netlify.app), showcasing real-time preventive health analysis.',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 5,
    src: '/enhanced/night-lab-architecture.jpg',
    title: 'Late-Night Battlestation & System Architecture',
    category: 'Engineering & Lab',
    location: 'Ayush’s Workstation',
    caption: '“AYUSH - In Search of Limitless” glowing screen alongside handwritten database wireframes and architecture blueprints.',
    span: 'md:col-span-1',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    src: '/enhanced/hackathon-team-sprint.jpg',
    title: 'Hackathon Sprint with devQBX Team',
    category: 'Engineering & Lab',
    location: 'Hackathon Arena',
    caption: 'Team collaboration with live analytics dashboards and multiple workstation laptops during high-stakes prototyping sprint.',
    span: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 7,
    src: '/enhanced/keynote-poster.jpg',
    title: 'Speaker Banner: From Idea to POC',
    category: 'Keynotes & Talks',
    location: 'Conference Media',
    caption: 'Official keynote feature banner: “FROM IDEA TO POC: How to Win Hackathons & Scale Startups”.',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
  },
  {
    id: 8,
    src: '/enhanced/tech-talk-stage.jpg',
    title: 'Academic & Technical Pitch on Stage',
    category: 'Keynotes & Talks',
    location: 'Campus Stage',
    caption: 'Addressing developer students on stage, discussing cloud architectures and full-stack software development.',
    span: 'md:col-span-1',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 9,
    src: '/enhanced/grounded-life.jpg',
    title: 'Life Outside Code & Grounded Mindset',
    category: 'Personal Life',
    location: 'Outdoors',
    caption: 'Staying grounded and calm beyond screens—recharging in nature with a playful puppy on the grass.',
    span: 'md:col-span-1',
    aspect: 'aspect-square',
  },
];

const categories = ['All', 'Startups & Summits', 'Keynotes & Talks', 'Engineering & Lab', 'Personal Life'];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((selectedIdx + 1) % galleryItems.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-mono mb-4">
            <Camera size={13} className="text-cyan-400" />
            <span>Behind The Scenes & Live Events</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Founder Journey & <span className="gradient-text">Visual Archive</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Real captured moments from tech summits, hackathon battle-stations, stage keynotes, and life beyond the keyboard.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-dark-900/80 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => {
                const globalIndex = galleryItems.findIndex(g => g.id === item.id);
                setSelectedIdx(globalIndex);
              }}
              className={`${item.span} group relative rounded-3xl overflow-hidden border border-white/10 bg-dark-900/60 cursor-pointer shadow-lg hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 min-h-[260px]`}
            >
              <div className={`relative w-full ${item.aspect} min-h-[260px]`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 filter contrast-[1.03] brightness-[0.97]"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-dark-950/80 backdrop-blur-md border border-white/10 text-cyan-300">
                    {item.category}
                  </span>
                  <div className="p-1.5 rounded-full bg-dark-950/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={13} />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-300 mb-1">
                    <MapPin size={12} className="text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-5xl w-full bg-dark-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition"
              >
                <X size={20} />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={() => setSelectedIdx((selectedIdx - 1 + galleryItems.length) % galleryItems.length)}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => setSelectedIdx((selectedIdx + 1) % galleryItems.length)}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition"
              >
                <ChevronRight size={22} />
              </button>

              {/* Image viewport */}
              <div className="relative w-full h-[50vh] sm:h-[65vh] bg-dark-950">
                <Image
                  src={galleryItems[selectedIdx].src}
                  alt={galleryItems[selectedIdx].title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Bottom Details Bar */}
              <div className="p-6 sm:p-8 border-t border-white/10 bg-dark-900/90">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                      {galleryItems[selectedIdx].category}
                    </span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                      <MapPin size={13} className="text-cyan-400" />
                      {galleryItems[selectedIdx].location}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-gray-500">
                    {selectedIdx + 1} of {galleryItems.length}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {galleryItems[selectedIdx].title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {galleryItems[selectedIdx].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
