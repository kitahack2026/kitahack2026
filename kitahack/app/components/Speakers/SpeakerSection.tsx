// ADD these imports at the top
import React from 'react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import SpeakerCard from "./SpeakerCard";
import { speakers } from "./speakers-data";


export default function SpeakersSection() {
    return (
        <SectionWrapper
            id='speakers'
            className='relative overflow-hidden'
            ariaLabelledby='speakers-heading'
        >
            {/* Background with gradient */}
            <div className='absolute inset-0 bg-kitahack-gradient' />

            {/* Subtle grid pattern overlay */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]' />

            {/* Content */}
            <div className='relative z-10'>
                <SectionHeading id='speakers-heading'>Speakers & Workshops</SectionHeading>
                
                <p className="text-sm md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-2 md:px-4 mb-12 text-center">
                    Learn from industry experts and community leaders
                    through hands-on workshops and tech talks.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.name}
                            speaker={speaker}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
