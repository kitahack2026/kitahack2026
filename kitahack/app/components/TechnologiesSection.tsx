"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const neonThemes: any = {
  green: {
    hoverBorder: "hover:border-green-400",
    hoverBg: "hover:bg-green-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.6)]", 
  },
  cyan: {
    hoverBorder: "hover:border-cyan-400",
    hoverBg: "hover:bg-cyan-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.6)]",
  },
  blue: {
    hoverBorder: "hover:border-blue-400",
    hoverBg: "hover:bg-blue-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(96,165,250,0.6)]",
  },
  orange: {
    hoverBorder: "hover:border-orange-400",
    hoverBg: "hover:bg-orange-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.6)]",
  },
  yellow: {
    hoverBorder: "hover:border-yellow-300", 
    hoverBg: "hover:bg-yellow-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(253,224,71,0.6)]",
  },
  purple: {
    hoverBorder: "hover:border-purple-400",
    hoverBg: "hover:bg-purple-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(192,132,252,0.6)]",
  },
  red: {
    hoverBorder: "hover:border-rose-400",
    hoverBg: "hover:bg-rose-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(251,113,133,0.6)]",
  },
  violet: {
    hoverBorder: "hover:border-violet-400",
    hoverBg: "hover:bg-violet-950/30",
    hoverShadow: "hover:shadow-[0_0_25px_-5px_rgba(167,139,250,0.6)]",
  }
};

const TechCard = ({ title, description, link, themeColor, icon, width, height, hideText, customIconSize }: any) => {
  const theme = neonThemes[themeColor] || neonThemes.blue;
  const iconSizeClass = customIconSize || "w-16 h-16";

  return (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ 
        '--d-width': width, 
        '--d-height': height 
    } as React.CSSProperties}
    className={`
      flex flex-col items-center justify-center text-center
      p-5 rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-md
      transition-all duration-300 hover:-translate-y-2 cursor-pointer
      relative overflow-hidden shrink-0
      w-full h-auto min-h-[200px] mb-2
      md:w-[var(--d-width)] md:h-[var(--d-height)] md:mb-0
      ${theme.hoverBorder} ${theme.hoverBg} ${theme.hoverShadow}
    `}
  >
    <div className={`mb-3 relative ${iconSizeClass} z-10`}>
      <Image 
        src={icon} 
        alt={`${title} logo`} 
        fill 
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>

    <h3 className="text-xl md:text-lg font-bold text-white mb-2 z-10">{title}</h3>
    
    {!hideText && (
      <p className="text-sm md:text-[12px] text-gray-400 leading-tight px-1 z-10">
        {description}
      </p>
    )}
  </a>
)};

export function TechnologiesSection() {
  return (
    <section className="bg-black min-h-screen w-full flex flex-col justify-start items-center pt-12 md:pt-24 pb-10 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Google Technologies</h2>
          
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Explore the core Google ecosystem driving mobile, web, cloud, and AI innovation.
            <br className="hidden md:block" />
            <span className="text-gray-500 block mt-1">
              Master practical tools to transform your ideas into scalable projects.
            </span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-nowrap justify-center gap-5 h-auto items-stretch w-full">

          <div className="flex flex-col justify-start gap-5 w-full md:w-auto">
            <TechCard
              title="Android"
              description="Build native mobile applications for billions of Android devices worldwide."
              link="https://developer.android.com"
              themeColor="green"
              icon="/logos/android.png" 
              width="260px" 
              height="240px" 
              hideText={false}
            />
            <TechCard
              title="Flutter"
              description="Build cross-platform apps from a single codebase."
              link="https://flutter.dev"
              themeColor="cyan"
              icon="/logos/flutter.png" 
              width="260px" 
              height="160px" 
              hideText={false} 
            />
          </div>

          <div className="flex flex-col justify-end gap-5 w-full md:w-auto"> 
            <TechCard
              title="Google Cloud"
              description="A powerful cloud platform offering computing, storage, AI, and backend services."
              link="https://cloud.google.com"
              themeColor="blue"
              icon="/logos/cloud.png" 
              width="260px" 
              height="350px" 
              hideText={false}
            />
          </div>

          <div className="flex flex-col justify-between items-center gap-5 w-full md:w-auto">
             <div className="w-full flex justify-center py-2 md:py-0">
               <Link href="https://about.google/products/#google-products" target="_blank">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-900/50 text-base whitespace-nowrap">
                  Learn More
                </button>
               </Link>
             </div>

             <TechCard
              title="Google Developers"
              description="Official tools and resources."
              link="https://developers.google.com"
              themeColor="red"
              icon="/logos/google.png" 
              width="260px" 
              height="200px" 
              hideText={false} 
            />
          </div>

          <div className="flex flex-col justify-end gap-5 w-full md:w-auto">
             <TechCard
              title="Firebase"
              description="An all-in-one backend platform providing authentication, databases, and hosting."
              link="https://firebase.google.com"
              themeColor="yellow"
              icon="/logos/firebase.png" 
              width="260px" 
              height="350px" 
              hideText={false}
            />
          </div>

          <div className="flex flex-col justify-start gap-5 w-full md:w-auto">
            <TechCard
              title="TensorFlow"
              description="An open-source machine learning framework used to build and deploy AI models."
              link="https://www.tensorflow.org"
              themeColor="orange"
              icon="/logos/tensorflow.png" 
              width="260px" 
              height="240px" 
              hideText={false}
            />
            <TechCard
              title="Google AI Studio"
              description="Experiment and build applications using Google’s AI models."
              link="https://ai.google.dev/"
              themeColor="purple"
              icon="/logos/ai.png" 
              width="260px" 
              height="160px" 
              hideText={false}  
            />
          </div>

        </div>
      </div>
    </section>
  );
}
