'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { StandardCard } from '@/components/ui/card-variants';
import { EXTERNAL_URLS } from '@/constants';
import { ui } from '@/lib/ui-constants';
import { typography } from '@/lib/typography';
import { animations } from '@/lib/animations';
import { FileCheck, Code2, Presentation } from 'lucide-react';

const JUDGING_STEPS = [
    {
        number: 1,
        title: 'Initial Submission Review',
        description:
            'Judges review all submissions based on the criteria. Teams submit prototypes, videos, and documentation.',
    },
    {
        number: 2,
        title: 'Technical Evaluation',
        description:
            'In-depth review of technical implementation, code quality, and use of Google technologies.',
    },
    {
        number: 3,
        title: 'Final Presentation',
        description:
            'Top finalists present their projects to the judging panel with live demos and Q&A.',
    },
];

const JUDGING_CRITERIA = [
    { name: 'Impact', weight: '70%' },
    { name: 'Technical Depth', weight: '60%' },
    { name: 'Innovation', weight: '30%' },
];

export default function JudgingSection() {
    return (
        <SectionWrapper id='judging' container='narrow'>
            <SectionHeading>Judging Process & Criteria</SectionHeading>

            <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
                {/* Judging Process Timeline */}
                <div className='max-w-xl mx-auto py-10'>
                    <div className='space-y-0'>
                        {JUDGING_STEPS.map((step, index) => {
                            const Icon =
                                step.number === 1
                                    ? FileCheck
                                    : step.number === 2
                                    ? Code2
                                    : Presentation;
                            const stepColor =
                                step.number === 1
                                    ? ui.colors.accentBlue
                                    : step.number === 2
                                    ? ui.colors.accentGreen
                                    : ui.colors.accentRed;

                            return (
                                <motion.div
                                    key={step.number}
                                    className='relative flex items-start pb-12 last:pb-0'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: 'easeOut',
                                    }}
                                >
                                    {/* Connecting Line */}
                                    {index < JUDGING_STEPS.length - 1 && (
                                        <div
                                            className='absolute left-4 top-8 bottom-0 w-0.5'
                                            style={{
                                                background: `linear-gradient(to bottom, ${stepColor}, transparent)`,
                                            }}
                                        />
                                    )}

                                    {/* Step Number/Icon */}
                                    <div
                                        className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-white font-bold shadow-lg ${stepColor}`}
                                    >
                                        <Icon size={18} />
                                    </div>

                                    {/* Step Content */}
                                    <div className='ml-6'>
                                        <h4 className={typography.cardHeadingSmall}>
                                            {step.title}
                                        </h4>
                                        <p className={typography.bodySmall}>
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Judging Criteria Summary */}
                <StandardCard
                    title='Judging Criteria'
                    variant='elevated'
                    className='flex flex-col justify-between'
                >
                    <div>
                        <p className={`${typography.description} mb-6`}>
                            Projects are evaluated based on Impact (70%), and
                            Technical Depth (60%).
                        </p>
                        <div className='space-y-3 mb-8'>
                            {JUDGING_CRITERIA.map((criterion, index) => {
                                const percentage = parseInt(criterion.weight);
                                const gradientColor =
                                    index === 0
                                        ? ui.colors.accentBlue
                                        : index === 1
                                        ? ui.colors.accentGreen
                                        : ui.colors.accentRed;

                                return (
                                    <motion.div
                                        key={criterion.name}
                                        className={`flex justify-between ${typography.labelSmall} border-b border-gray-800 pb-1 relative overflow-hidden`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + index * 0.1,
                                            ease: 'easeOut',
                                        }}
                                    >
                                        <motion.div
                                            className='absolute inset-0 h-full rounded-full opacity-20'
                                            style={{
                                                width: `${percentage}%`,
                                                background: `linear-gradient(to right, ${gradientColor}, transparent)`,
                                            }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${percentage}%` }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5 + index * 0.1,
                                                ease: 'easeOut',
                                            }}
                                        />
                                        <span className='relative z-10'>
                                            {criterion.name}
                                        </span>
                                        <span
                                            className='font-bold relative z-10'
                                            style={{ color: gradientColor }}
                                        >
                                            {criterion.weight}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Rubric Link Button */}
                    <Button
                        asChild
                        className={`w-full ${ui.button.primary} ${animations.hover.glow}`}
                    >
                        <a
                            href={EXTERNAL_URLS.RUBRIC}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View full detailed rubric in Google Drive'
                        >
                            View Full Detailed Rubric
                        </a>
                    </Button>
                </StandardCard>
            </div>
        </SectionWrapper>
    );
}
