"use client";

import React from 'react';
import AboutCard from './AboutCard';
import { aboutData } from './aboutData';

/**
 * AboutSection Component
 * Main About section with staggered card layout
 */
const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative min-h-screen py-20 px-4 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Content */}
            <div className="relative z-10">
                {/* Section Title */}
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-16 md:mb-24">
                    About
                </h2>

                {/* Cards Container */}
                <div className="space-y-8">
                    {aboutData.map((card) => (
                        <AboutCard key={card.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
