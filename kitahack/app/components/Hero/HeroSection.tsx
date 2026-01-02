'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { EVENT_DATES } from '@/constants';

// Dynamically import the client-only CountdownTimer
const CountdownTimerClient = dynamic(
    () => import('./CountdownTimer.client'),
    { ssr: false } // prevent server side render
);

/**
 * HeroSection Component
 * Main hero section with title, description, countdown timer, and CTA button
 * Follows the Figma design with dark theme and gradient effects
 */
export default function HeroSection() {
    const targetDate = EVENT_DATES.REGISTRATION_CLOSES;

    const handleLearnMore = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-12 pt-24 md:pt-32 overflow-hidden">
            {/* Background with gradient */}
            <div className='absolute inset-0 bg-kitahack-gradient' />

            {/* Subtle grid pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

            {/* Wrapper for glow effect */}
            <div className='relative z-10 max-w-5xl mx-auto w-full'>
                {/* Glowing gradient effect */}
                <div className='absolute -inset-[6px] rounded-[3rem] opacity-90 blur-3xl bg-kitahack-primary-gradient' />

                {/* Content Container with Thin White Border and BLACK background */}
                <div className='relative text-center space-y-6 md:space-y-8 p-6 md:p-12 rounded-[3rem] border border-white bg-black isolate'>
                    {/* Title with Gradient */}
                    <h1 className='text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight'>
                        <span className='text-kitahack-gradient animate-gradient'>
                            Building technology that matters
                        </span>
                    </h1>

                    {/* Description */}
                    <div className='text-sm md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2 md:px-4 space-y-4 text-justify'>
                        <p>
                            KitaHack 2026 is an annual hackathon hosted by Google Developer Groups on Campus Malaysia. This year, we're challenging students to create AI-powered solutions addressing the UN's Sustainable Development Goals.
                        </p>
                        <p>
                            Over the course of three months, you'll master Google's technology stack, from Firebase to Gemini API, through hands-on workshops across seven universities. Learn from Google Developer Experts. Get mentored by industry professionals. Collaborate with Malaysia's brightest innovators.
                        </p>
                        <p>
                            Walk away with a complete, deployable solution ready for both KitaHack and Google's Solution Challenge.
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className='py-4 md:py-8'>
                        <CountdownTimerClient targetDate={targetDate} />
                    </div>

                    {/* CTA Button */}
                    <div className='pt-2 md:pt-4'>
                        <Button
                            onClick={handleLearnMore}
                            size='lg'
                            className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
                            aria-label='Learn more about KitaHack 2026'
                        >
                            LEARN MORE
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
