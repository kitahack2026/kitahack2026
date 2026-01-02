import React from 'react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import AboutCard from './AboutCard';
import { aboutData } from './aboutData';

/**
 * AboutSection Component
 * Displays multiple AboutCard components with alternating layouts
 * Each card has a unique diagonal gradient glow effect
 */
export default function AboutSection() {
    return (
        <SectionWrapper
            id='about'
            className='relative min-h-screen overflow-hidden'
            ariaLabelledby='about-heading'
        >
            {/* Background with gradient */}
            <div className='absolute inset-0 bg-kitahack-gradient' />

            {/* Subtle grid pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

            {/* Content */}
            <div className='relative z-10'>
                <SectionHeading id='about-heading'>About</SectionHeading>

                {/* Cards */}
                <div className='space-y-16 md:space-y-24'>
                    {aboutData.map((card) => (
                        <AboutCard key={card.id} data={card} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
