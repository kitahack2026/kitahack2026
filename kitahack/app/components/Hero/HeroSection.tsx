"use client";

import React from 'react';
import dynamic from "next/dynamic";
import { Button } from '@/components/ui/button';

// Dynamically import the client-only CountdownTimer
const CountdownTimerClient = dynamic(
  () => import("./CountdownTimer.client"),
  { ssr: false } // prevent server side render 
);

/**
 * HeroSection Component
 * Main hero section with title, description, countdown timer, and CTA button
 * Follows the Figma design with dark theme and gradient effects
 */
const HeroSection: React.FC = () => {
    // Target date: January 18th, 2026, 11:59 PM MYT (Registration Closes)
    const targetDate = new Date('2026-01-18T23:59:59+08:00');

    const handleLearnMore = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-12 overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Wrapper for glow effect */}
            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Glowing gradient effect - ENHANCED for testing */}
                {/* Previous settings (revert if needed): opacity-70 blur-2xl -inset-[4px] */}
                <div className="absolute -inset-[6px] rounded-[3rem] bg-gradient-to-r from-[#3B84F7] via-[#47AD7A] via-[#CB5C6D] to-[#D1AC34] opacity-90 blur-3xl" />

                {/* Content Container with Thin White Border and BLACK background */}
                <div className="relative text-center space-y-6 md:space-y-8 p-6 md:p-12 rounded-[3rem] border border-white bg-black isolate">

                    {/* Title with Gradient */}
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="bg-gradient-to-r from-[#3B84F7] via-[#47AD7A] via-[#CB5C6D] to-[#D1AC34] bg-clip-text text-transparent animate-gradient">
                            KitaHack 2026
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2 md:px-4">
                        GDGoC KitaHack 2026 is an open-ended hackathon designed to enable students to conceptualise
                        and build technology solutions aligned with the United Nations Sustainable Development Goals.
                        Participants apply AI and Google technologies through guided workshops, mentorship, and
                        collaborative development, preparing them for real-world problem-solving.
                    </p>

                    {/* Countdown Timer */}
                    <div className="py-4 md:py-8">
                        <CountdownTimerClient targetDate={targetDate} />
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2 md:pt-4">
                        <Button
                            onClick={handleLearnMore}
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            LEARN MORE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
