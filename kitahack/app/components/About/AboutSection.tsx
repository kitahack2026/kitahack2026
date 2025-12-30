import React from 'react';
import AboutCard from './AboutCard';
import { aboutData } from './aboutData';

/**
 * AboutSection Component
 * Displays multiple AboutCard components with alternating layouts
 * Each card has a unique diagonal gradient glow effect
 */
const AboutSection: React.FC = () => {
    return (
        <section id="about" className="relative min-h-screen py-16 md:py-24 px-4 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Content */}
            <div className="relative z-10">
                {/* Section Title */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        About
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                </div>

                {/* Cards */}
                <div className="space-y-16 md:space-y-24">
                    {aboutData.map((card) => (
                        <AboutCard key={card.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
