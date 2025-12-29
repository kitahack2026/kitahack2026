"use client";

import React from 'react';
import Image from 'next/image';
import { AboutCardProps } from './types';

/**
 * AboutCard Component
 * Picture and description are SEPARATE elements
 * Two-tone gradient glow applies ONLY to the picture's white border
 */
const AboutCard: React.FC<AboutCardProps> = ({ data }) => {
    const { title, description, imagePath, imageAlt, gradientFrom, gradientTo, imagePosition, id } = data;

    // Determine image display mode
    const isLogoCard = imagePath === '/about-kitahack.png';
    const isSDGCard = id === 3; // Card 3 needs object-contain to show full image without cropping

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-6xl mx-auto mb-16 md:mb-24 ${imagePosition === 'left' ? '' : 'md:grid-flow-dense'
            }`}>
            {/* Picture with Two-Tone Gradient Glow */}
            <div className={`relative ${imagePosition === 'left' ? 'md:col-start-1' : 'md:col-start-2'}`}>
                {/* Gradient glow wrapper - ONLY around the picture */}
                <div className="relative">
                    {/* Two-tone gradient glow effect - DIAGONAL split at corner */}
                    <div className="absolute -inset-[6px] rounded-[3rem] opacity-90 blur-3xl"
                        style={{
                            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientFrom} 50%, ${gradientTo} 50%, ${gradientTo} 100%)`
                        }}
                    />

                    {/* Picture container with white border */}
                    <div className={`relative w-full aspect-video rounded-[3rem] border border-white overflow-hidden ${isSDGCard ? 'bg-white' : 'bg-black'} isolate`}>
                        <Image
                            src={imagePath}
                            alt={imageAlt}
                            fill
                            className={
                                isLogoCard ? "object-contain" :
                                    isSDGCard ? "object-contain p-6" :
                                        "object-cover"
                            }
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={isLogoCard}
                        />
                    </div>
                </div>
            </div>

            {/* Description - SEPARATE from picture */}
            <div className={`flex flex-col justify-center ${imagePosition === 'left' ? 'md:col-start-2' : 'md:col-start-1'}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {title}
                </h3>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AboutCard;
