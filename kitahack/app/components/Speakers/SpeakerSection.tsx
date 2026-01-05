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

                <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 md:px-4 mb-16 text-center md:text-justify">
                    Learn from industry experts and community leaders through hands-on workshops and tech talks. Our speakers bring real-world experience and cutting-edge knowledge to help you level up your skills.
                </p>

                <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
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
