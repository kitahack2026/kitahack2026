'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


// --- CUSTOM COLORS ---
const colors = {
  green: "#47ad7a",
  blue: "#3b84f7",
  red: "#cb5c6d",
  yellow: "#d1ac34",
};

const events = [
  { title: "Info Session", date: "3rd Jan 2026", type: "Kickoff", color: colors.blue },
  { title: "Registration Opens", date: "4th-18th Jan", type: "Launch", color: colors.yellow },
  { title: "Workshop 1: Web Dev", date: "31st Jan 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 2: App Dev (Android Studio)", date: "1st Feb 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 3: Firebase Foundation (Backend)", date: "7th Feb 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 4: Flutter Workshop (Frontend)", date: "8th Feb 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 5: Gemini API Masterclass", date: "14th Feb 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 6: Google Cloud Platform", date: "15th Feb 2026", type: "Workshop", color: colors.green },
  { title: "Workshop 7: KitaHack 2025 Champions Sharing", date: "TBD", type: "Workshop", color: colors.green },
  { title: "Round 1 Deadline", date: "28th Feb 2026", type: "Deadline", color: colors.red },
  { title: "Evaluation Period", date: "1st-7th Mar", type: "Judging", color: colors.blue },
  { title: "Top 10 Finalists", date: "9th Mar 2026", type: "Result", color: colors.yellow },
  { title: "Mentoring Session", date: "10th-17th Mar", type: "Mentorship", color: colors.blue },
  { title: "Workshop 8: Pitch Perfect", date: "TBD", type: "Workshop", color: colors.green },
  { title: "Demo Day", date: "29th Mar 2026", type: "Grand Finale", location: "Auditorium", color: colors.red },
];



export default function Timeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Calculation: Total Width - Screen Width
        // The reduced padding (pr-20) below ensures this calculation doesn't leave huge gaps
        setScrollRange(totalWidth - viewportWidth); 
      }
    };

    const timeoutId = setTimeout(updateWidth, 500);
    window.addEventListener('resize', updateWidth);
    return () => {
        window.removeEventListener('resize', updateWidth);
        clearTimeout(timeoutId);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // 1. TIMELINE SCROLL
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  // 2. TITLE ANIMATION (Color Shift Only - No Movement)
  // This ensures the title stays exactly where it is but still looks interactive
  const titleBgPos = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#0A0A0A]">
      
      {/* Sticky Window */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">

        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* --- ANIMATED SVG (Google Atom Replacement) --- */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <motion.svg
            width="320" height="320" viewBox="0 0 320 320"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            style={{ filter: 'drop-shadow(0 0 32px #3b84f7aa)' }}
          >
            {/* Core */}
            <circle cx="160" cy="160" r="38" fill="#fff" fillOpacity="0.95" />
            {/* Blue ring */}
            <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#3b84f7" strokeWidth="6" />
            {/* Red ring */}
            <ellipse cx="160" cy="160" rx="90" ry="38" fill="none" stroke="#cb5c6d" strokeWidth="5" transform="rotate(30 160 160)" />
            {/* Yellow ring */}
            <ellipse cx="160" cy="160" rx="120" ry="60" fill="none" stroke="#d1ac34" strokeWidth="4" transform="rotate(-25 160 160)" />
            {/* Green ring */}
            <ellipse cx="160" cy="160" rx="100" ry="44" fill="none" stroke="#47ad7a" strokeWidth="5" transform="rotate(60 160 160)" />
          </motion.svg>
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-20 w-full h-full flex items-center">
            
            {/* TITLE: Fixed in place, only color animates */}
            <div className="absolute top-8 left-8 md:left-12 z-40">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold uppercase tracking-widest drop-shadow-lg"
                style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.blue}, ${colors.red}, ${colors.yellow}, ${colors.blue})`,
                    backgroundSize: "200% auto",
                    backgroundPosition: titleBgPos, // Links gradient to scroll
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent" 
                }}
              >
                KITAHACK 2026 TIMELINE
              </motion.h1>
            </div>

            {/* Central Track Line */}
            <div className="absolute top-[60%] left-0 w-full h-[2px] bg-white/20 -translate-y-1/2" />

            {/* Moving Train */}
            <motion.div 
                ref={containerRef}
                style={{ x }} 
                // pl-36:  Slightly less left padding to tighten start
                // pr-32:  More right padding to ensure the last card is fully visible
                className="flex gap-48 pl-44 pr-40 items-center w-max"
            >
              {events.map((event, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div key={index} className="relative flex flex-col items-center justify-center h-0 mt-[20vh]">
                    
                    {/* Connector Dot */}
                    <div 
                      className="absolute w-4 h-4 rounded-full border-2 bg-[#0F0F0F] z-30"
                      style={{ 
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '0', 
                        borderColor: event.color,
                        boxShadow: `0 0 10px ${event.color}`
                      }}
                    />

                    {/* Connector Stem */}
                    <div 
                      className="absolute w-[2px] bg-white/30"
                      style={{
                        height: "80px", 
                        left: "50%",
                        top: isTop ? "auto" : "0",    
                        bottom: isTop ? "0" : "auto",
                        transform: 'translateX(-50%)', 
                        background: `linear-gradient(to ${isTop ? "top" : "bottom"}, ${event.color}, transparent)`
                      }}
                    />

                    {/* The Card */}
                    <div 
                      className={`
                        absolute flex flex-col justify-between
                        h-[180px] w-[260px] 
                        shrink-0 rounded-[20px] p-5
                        backdrop-blur-md border
                        transition-all duration-500
                        group hover:scale-105
                      `}
                      style={{
                        bottom: isTop ? "80px" : "auto", 
                        top: isTop ? "auto" : "80px",
                        left: "50%",
                        // Nudge the first card slightly left for visual balance
                        transform: index === 0 ? "translateX(calc(-50% - 8px))" : "translateX(-50%)",
                        
                        borderColor: `${event.color}40`,
                        backgroundColor: "rgba(15, 15, 15, 0.85)",
                        boxShadow: `0 0 20px -5px ${event.color}20`
                      }}
                    >
                      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ boxShadow: `inset 0 0 20px ${event.color}30` }} />

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border" 
                              style={{ color: event.color, borderColor: `${event.color}40`, backgroundColor: `${event.color}10` }}>
                          {event.type}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-3 leading-tight">{event.title}</h3>
                      </div>

                      <div className="mt-2 pt-3 border-t border-white/10">
                        <p className="text-sm font-mono text-gray-300">{event.date}</p>
                        {event.location && <p className="text-xs text-gray-500 mt-1 flex items-center gap-2">📍 {event.location}</p>}
                      </div>
                    </div>

                  </div>
                );
              })}
            </motion.div>
        </div>
        
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 h-1.5 origin-left z-50"
        style={{ scaleX: scrollYProgress, background: `linear-gradient(to right, ${colors.blue}, ${colors.red}, ${colors.yellow})` }} 
      />
    </section>
  );
}