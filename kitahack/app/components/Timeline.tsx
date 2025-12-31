'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

// --- CUSTOM COLORS ---
const colors = {
  green: "#47ad7a",
  blue: "#3b84f7",
  red: "#cb5c6d",
  yellow: "#d1ac34",
};

const events = [
  { title: "Info Session", date: "3rd Jan 2026", type: "Kickoff", color: colors.blue, details: "Join us for the grand reveal of the problem statements and meet the mentors." },
  { title: "Registration Opens", date: "4th-18th Jan", type: "Launch", color: colors.yellow, details: "Secure your spot!" },
  { title: "Workshop 1: Web Dev", date: "31st Jan 2026", type: "Workshop", color: colors.green, details: "Intro to React, Next.js, and Tailwind CSS." },
  { title: "Workshop 2: App Dev", date: "1st Feb 2026", type: "Workshop", color: colors.green, details: "Building your first mobile app with Android Studio and Kotlin." },
  { title: "Workshop 3: Firebase", date: "7th Feb 2026", type: "Workshop", color: colors.green, details: "Backend as a Service: Auth, Firestore, and Cloud Functions." },
  { title: "Workshop 4: Flutter", date: "8th Feb 2026", type: "Workshop", color: colors.green, details: "Cross-platform development magic with Flutter and Dart." },
  { title: "Workshop 5: Gemini API", date: "14th Feb 2026", type: "Workshop", color: colors.green, details: "Integrate AI into your hacks using Google's latest Gemini models." },
  { title: "Workshop 6: Cloud Platform", date: "15th Feb 2026", type: "Workshop", color: colors.green, details: "Deploying and scaling your solution on Google Cloud Platform." },
   { title: "Workshop 7: From Zero To Hero", date: "TBD", type: "Workshop", color: colors.green, details: "Past champions are here to share their experience!" },
  { title: "Round 1 Deadline", date: "28th Feb 2026", type: "Deadline", color: colors.red, details: "Submit your prototype video and slide deck. No code required yet." },
  { title: "Evaluation Period", date: "1st-7th Mar", type: "Judging", color: colors.blue, details: "Our panel of industry experts will review all submissions." },
  { title: "Top 10 Finalists", date: "9th Mar 2026", type: "Result", color: colors.yellow, details: "The best 10 teams will be announced to move to the final round." },
  { title: "Mentoring Session", date: "10th-17th Mar", type: "Mentorship", color: colors.blue, details: "1-on-1 sessions with Google Experts to polish your final product." },
  { title: "Pitch Perfect", date: "TBD", type: "Workshop", color: colors.green, details: "Master the art of the pitch. Learn how to sell your idea." },
  { title: "Demo Day", date: "29th Mar 2026", type: "Grand Finale", location: "Sunway Art Gallery", color: colors.red, details: "The Grand Finale. Live demos, food, networking, and prizes!" },
];

export default function Timeline() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [stars, setStars] = useState<{ top: string; left: string; size: number; duration: string; }[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  // --- MOUSE TRACKING FOR 3D ATOM ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for the 3D tilt effect
  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig); // Tilt X
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig); // Tilt Y

    useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const totalWidth = containerRef.current.scrollWidth;
        setScrollRange(totalWidth - window.innerWidth);
      }
      setIsMobile(window.innerWidth < 768);
    }; 

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  


useEffect(() => {
  const generateStars = () => {
    // REDUCED to 20 stars (was 40)
    return Array.from({ length: 20 }).map(() => ({
      // STARTS at 15% to avoid overlapping the title
      top: `${Math.random() * 85 + 15}%`, 
      // SPREADS horizontally to 200% so stars exist at the end of the scroll
      left: `${Math.random() * 150}%`,
      // LARGER size for mobile visibility
      size: Math.random() * 5 + 4,
      duration: `${Math.random() * 3 + 2}s`,
    }));
  };

  // Delay the state update to avoid cascading render
  const id = requestAnimationFrame(() => {
    setStars(generateStars());
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedEvent(null);
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    cancelAnimationFrame(id);
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);


  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // 1. TIMELINE SCROLL
  const x = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange}px`]);

  // 2. PARALLAX STARS
  const bgX = useTransform(scrollYProgress, [0, 1], ["0px", `-${scrollRange * 0.2}px`]);

  // 3. TITLE ANIMATION
  const titleBgPos = useTransform(scrollYProgress, [0, 1], ["0% 50%", "100% 50%"]);

  // 4. ATOM SPIN (LINKED TO SCROLL)
  const atomRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // STEM HEIGHT: Increased to 50px on mobile to fill vertical space
  const stemHeight = isMobile ? "50px" : "80px"; 

  // AXIS POSITION: Centered at 50%
  const axisPosition = "50%";

  if (isMobile) {
    return (
      <section className="relative min-h-screen bg-[#0A0A0A] py-12 px-4 overflow-hidden">
         {/* Background Stars for Mobile */}
         <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Removed the grid background div here */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0F0F0F] to-[#050505]" />
             {stars.slice(0, 10).map((star, i) => (
                <div 
                  key={i}
                  className="absolute opacity-40 animate-pulse"
                  style={{ top: star.top, left: `${Math.random() * 100}%` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" style={{ animationDuration: star.duration }}>
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="white" />
                  </svg>
                </div>
              ))}
         </div>

         {/* Mobile Spinning Atom Background */}
         <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
            <motion.div
              style={{ perspective: "1000px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-[300px] h-[300px]"
            >
               <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full mix-blend-screen" />
               <svg className="w-full h-full" viewBox="0 0 320 320" style={{ filter: 'drop-shadow(0 0 20px rgba(59, 132, 247, 0.5))' }}>
                  <circle cx="160" cy="160" r="25" fill="white" fillOpacity="0.9" />
                  <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#3b84f7" strokeWidth="4" />
                  <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#cb5c6d" strokeWidth="4" transform="rotate(60 160 160)" />
                  <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#47ad7a" strokeWidth="4" transform="rotate(120 160 160)" />
               </svg>
            </motion.div>
         </div>

         {/* Mobile Title (Box Removed) */}
         <div className="relative z-10 text-center mb-12">
            <h1 className="text-4xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#3b84f7] via-[#cb5c6d] to-[#d1ac34]">
              TIMELINE
            </h1>
            <div className="h-1 w-20 mx-auto mt-2 rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent" />
         </div>

         {/* Vertical Timeline Container */}
         <div className="relative z-10 max-w-md mx-auto space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#3b84f7] via-[#cb5c6d] to-[#d1ac34] opacity-30" />

            {events.map((event, index) => (
              <div key={index} className="relative pl-12">
                {/* Dot */}
                <div 
                  className="absolute left-[13px] top-6 w-3 h-3 rounded-full border-2 bg-[#0F0F0F] -translate-x-1/2 z-20"
                  style={{ borderColor: event.color, boxShadow: `0 0 10px ${event.color}` }}
                />
                
                {/* Card */}
                <div 
                  onClick={() => setSelectedEvent(event)}
                  className="bg-[#111] border border-white/10 rounded-xl p-5 shadow-lg active:scale-95 transition-transform"
                  style={{ borderColor: `${event.color}40` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    {/* Glowing Type Badge */}
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border shadow-[0_0_10px_currentColor]"
                      style={{ 
                        color: "#fff", 
                        borderColor: event.color, 
                        backgroundColor: event.color 
                      }}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">{event.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{event.details}</p>
                  {event.location && (
                    <div className="mt-3 flex items-center text-xs text-gray-500">
                      <span>📍 {event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
         </div>

         {/* Mobile Modal */}
         <AnimatePresence>
            {selectedEvent && (
                <motion.div 
                    className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedEvent(null)}
                >
                    <motion.div 
                        className="bg-[#151515] border border-white/10 w-full max-w-sm rounded-2xl p-6 relative overflow-hidden"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b84f7] via-[#cb5c6d] to-[#d1ac34]" />
                        <span 
                          className="inline-block mb-3 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded border shadow-[0_0_10px_currentColor]"
                          style={{ 
                            color: "#fff", 
                            borderColor: selectedEvent.color, 
                            backgroundColor: selectedEvent.color 
                          }}
                        >
                          {selectedEvent.type}
                        </span>
                        <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.title}</h2>
                        <div className="flex flex-col gap-1 mb-4 text-sm text-gray-400 font-mono">
                           <p>🗓 {selectedEvent.date}</p>
                           {selectedEvent.location && <p>📍 {selectedEvent.location}</p>}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                          {selectedEvent.details}
                        </p>
                        <button 
                          className="w-full mt-6 py-3 bg-white/10 rounded-lg text-white font-bold text-sm"
                          onClick={() => setSelectedEvent(null)}
                        >
                          Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
         </AnimatePresence>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[200vh] md:h-[500vh] bg-[#0A0A0A]">
      
      {/* Global Defs for Gradients */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cb5c6d" />   {/* Red */}
            <stop offset="35%" stopColor="#d1ac34" />   {/* Yellow */}
            <stop offset="70%" stopColor="#47ad7a" />   {/* Green */}
            <stop offset="100%" stopColor="#3b84f7" />  {/* Blue */}
          </linearGradient>

          <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* Sticky Window with Border Glow (Top and Bottom only) */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center perspective-[1000px] border-y-[3px] pb-12 md:pb-0"
        style={{
            borderImage: `linear-gradient(to right, ${colors.blue}, ${colors.red}, ${colors.yellow}) 1`,
            boxShadow: '0 0 30px rgba(59, 132, 247, 0.3), inset 0 0 50px rgba(59, 132, 247, 0.1)'
        }}
      >

        {/* --- BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0F0F0F] to-[#050505]" />
            {/* REMOVED GRID HERE by deleting the grid div that was previously present */}

             {/* Parallax Stars */}
             <motion.div 
              style={{ x: bgX }} 
              className="absolute inset-0 w-[150vw]"
            >
              {stars.map((star, i) => (
                <div 
                  key={i}
                  // FIX: Hide stars with index > 5 on mobile (hidden md:block)
                  className={`absolute ${i > 5 ? 'hidden md:block' : ''}`}
                  style={{ top: star.top, left: star.left }}
                >
                  <svg 
                    width={star.size * 8} 
                    height={star.size * 8} 
                    viewBox="0 0 24 24" 
                    // FIX: Lower opacity on mobile (opacity-40) vs desktop (opacity-90)
                    className="opacity-40 md:opacity-90 animate-pulse"
                    style={{ 
                        filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))',
                        animationDuration: star.duration
                    }}
                  >
                    <path 
                        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" 
                        fill="url(#geminiGradient)" 
                    />
                  </svg>
                </div>
              ))}
            </motion.div>
        </div>

        {/* --- INTERACTIVE 3D ATOM (FIXED CENTER & FLOATING ANIMATION) --- */}
        <div 
            className="absolute w-full z-10 pointer-events-none flex justify-center" 
            style={{ 
                top: axisPosition,             // <--- 1. Locks vertically to the track line
                transform: "translateY(-50%)", // <--- 2. Centers the atom exactly on that line
                perspective: "1000px" 
            }}
        >
          
          <motion.div
            style={{ 
              rotateX: rotateX, 
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            // <--- 3. Adds the idle "bobbing" animation here
            animate={{ y: [-15, 15, -15] }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-[220px] h-[220px] md:w-[450px] md:h-[450px]"
          >
             <div 
                className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen" 
                style={{ transform: "translateZ(-50px)" }}
             />

             <motion.svg
                className="w-full h-full opacity-100"
                viewBox="0 0 320 320"
                style={{ 
                  rotate: atomRotate, 
                  filter: 'drop-shadow(0 0 30px rgba(59, 132, 247, 0.5))',
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)" 
                }}
              >
                <circle cx="160" cy="160" r="25" fill="white" fillOpacity="0.9" filter="drop-shadow(0 0 10px white)" />
                <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#3b84f7" strokeWidth="4" className="opacity-80" />
                <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#cb5c6d" strokeWidth="4" transform="rotate(60 160 160)" className="opacity-80" />
                <ellipse cx="160" cy="160" rx="110" ry="50" fill="none" stroke="#47ad7a" strokeWidth="4" transform="rotate(120 160 160)" className="opacity-80" />
                <ellipse cx="160" cy="160" rx="80" ry="30" fill="none" stroke="#d1ac34" strokeWidth="3" transform="rotate(-30 160 160)" className="opacity-60" />
             </motion.svg>
          </motion.div>
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-20 w-full h-full">
            
            {/* CENTERED TITLE - Size reduced to text-3xl on mobile to prevent overlap */}
            <div className="absolute top-6 left-0 right-0 z-40 flex flex-col items-center justify-center pointer-events-none">
              <motion.h1 
                className="text-3xl md:text-7xl font-black uppercase tracking-widest leading-tight text-center"
                style={{ 
                    backgroundImage: `linear-gradient(90deg, ${colors.blue}, ${colors.red}, ${colors.yellow}, ${colors.blue})`,
                    backgroundSize: "200% auto",
                    backgroundPosition: titleBgPos,
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent" 
                }}
              >
                TIMELINE
              </motion.h1>
              {/* Decorative Bar Below */}
              <div className="h-1 w-16 md:h-1.5 md:w-24 rounded-full mt-2 md:mt-3 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
            </div>

            {/* Central Track Line */}
            <div 
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-y-1/2" 
              style={{ top: axisPosition }}
            />

            {/* Moving Train - INCREASED STARTING PADDING (pl-24) to show first card */}
            <motion.div 
                ref={containerRef}
                style={{ x, top: axisPosition }} 
                className="absolute left-0 flex gap-44 md:gap-96 pl-24 md:pl-60 pr-24 md:pr-96 items-center w-max -translate-y-1/2"
            >
              {events.map((event, index) => {
                const isTop = index % 2 === 0;

                return (
                  <div key={index} className="relative flex flex-col items-center justify-center h-0 mt-0">
                    
                    {/* Connector Dot */}
                    <div 
                      className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full border-2 bg-[#0F0F0F] z-30"
                      style={{ 
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '0', 
                        borderColor: event.color,
                        boxShadow: `0 0 15px ${event.color}`
                      }}
                    />

                    {/* Connector Stem */}
                    <div 
                      className="absolute w-[2px]"
                      style={{
                        height: stemHeight, 
                        left: "50%",
                        top: isTop ? "auto" : "0",    
                        bottom: isTop ? "0" : "auto",
                        transform: 'translateX(-50%)', 
                        background: `linear-gradient(to ${isTop ? "top" : "bottom"}, ${event.color}, transparent)`
                      }}
                    />

                    {/* The Card */}
                    <motion.div
                      onClick={() => setSelectedEvent(event)}
                      className={`
                        absolute flex flex-col justify-between text-left
                        h-[120px] w-[200px] md:min-h-[160px] md:w-[260px] 
                        shrink-0 rounded-[20px] p-3 md:p-5
                        backdrop-blur-md border cursor-pointer
                        transition-all duration-300
                        group hover:scale-105 hover:shadow-2xl
                      `}
                      style={{
                        bottom: isTop ? stemHeight : "auto", 
                        top: isTop ? "auto" : stemHeight,
                        left: "50%",
                        transform: index === 0 ? "translateX(calc(-50% - 8px))" : "translateX(-50%)",
                        
                        // Glow Effect
                        borderColor: `${event.color}`, 
                        backgroundColor: "rgba(10, 10, 10, 0.85)",
                        boxShadow: `0 0 20px ${event.color}40, inset 0 0 10px ${event.color}10`
                      }}
                    >
                      {/* Inner Shine on Hover */}
                      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ boxShadow: `inset 0 0 30px ${event.color}40` }} />

                      <div>
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border shadow-[0_0_10px_currentColor]" 
                              style={{ 
                                color: "#fff", 
                                borderColor: `${event.color}`, 
                                backgroundColor: event.color,
                              }}>
                          {event.type}
                        </span>
                        <h3 className="text-sm md:text-xl font-bold text-white mt-2 md:mt-3 leading-tight drop-shadow-md group-hover:text-[white] line-clamp-2">{event.title}</h3>
                      </div>

                      <div className="mt-1 md:mt-2 pt-2 md:pt-3 border-t border-white/20 flex justify-between items-end">
                        <div className="min-w-0 flex-1 mr-2">
                            <p className="text-[9px] md:text-sm font-mono text-gray-200 drop-shadow-sm">{event.date}</p>
                            {event.location && (
                              <p className="text-[9px] md:text-xs text-gray-400 mt-1 flex items-center gap-1">
                                <span className="shrink-0">📍</span>
                                <span className="truncate">{event.location}</span>
                              </p>
                            )}
                        </div>
                        <div className="text-white/50 text-[9px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                            Details &rarr;
                        </div>
                      </div>
                    </motion.div>

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

       {/* --- DETAIL MODAL --- */}
       <AnimatePresence>
        {selectedEvent && (
            <motion.div 
                className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    onClick={() => setSelectedEvent(null)}
                />

                {/* Modal Content */}
                <motion.div 
                    className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl overflow-hidden"
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                >
                     {/* Decorative Glow */}
                     <div 
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-50"
                        style={{ background: selectedEvent.color }} 
                    />

                    <button 
                        onClick={() => setSelectedEvent(null)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
                    >
                        ✕
                    </button>

                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 border"
                              style={{ 
                                  color: "#fff", 
                                  borderColor: selectedEvent.color,
                                  backgroundColor: selectedEvent.color,
                                  boxShadow: `0 0 10px ${selectedEvent.color}`
                              }}>
                            {selectedEvent.type}
                        </span>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{selectedEvent.title}</h2>
                        <p className="text-gray-400 font-mono text-sm mb-6 flex items-center gap-4">
                            <span>🗓 {selectedEvent.date}</span>
                            {selectedEvent.location && <span>📍 {selectedEvent.location}</span>}
                        </p>

                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                            <h4 className="text-xs uppercase text-gray-500 mb-2 font-bold tracking-widest">About this Event</h4>
                            <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                                {selectedEvent.details}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}