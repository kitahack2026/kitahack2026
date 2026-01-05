'use client';

import { Button } from '@/components/ui/button';
import { EXTERNAL_URLS, COLORS } from '@/constants';
import { ui } from '@/lib/ui-constants';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';

// --- JUDGING STEPS DATA ---
const JUDGING_STEPS = [
    {
        number: 1,
        title: 'Preliminary Screening',
        description:
            'All submissions are reviewed to ensure they meet the basic requirements, including proper documentation and submission format.',
        color: COLORS.PRIMARY.BLUE,
    },
    {
        number: 2,
        title: 'Technical Evaluation',
        description:
            'Expert judges evaluate the technical depth, code quality, architecture, and use of AI/Google technologies.',
        color: COLORS.PRIMARY.GREEN,
    },
    {
        number: 3,
        title: 'Live Pitching',
        description:
            'Selected finalists present their projects live, demonstrating functionality and answering questions from the judging panel.',
        color: COLORS.PRIMARY.RED,
    },
];

// --- JUDGING CRITERIA DATA (Final Round) ---
const JUDGING_CRITERIA = [
    {
        name: 'Innovation & Impact',
        weight: 20,
        description:
            'How well the solution addresses real-world problems and its potential impact on addressing SDG-related challenges.',
        color: COLORS.PRIMARY.BLUE,
    },
    {
        name: 'Presentation',
        weight: 40,
        description:
            'Quality of the live presentation, clarity of communication, ability to demonstrate the solution effectively, and engagement with the judging panel.',
        color: COLORS.PRIMARY.GREEN,
    },
    {
        name: 'Technical',
        weight: 40,
        description:
            'Technical depth, code quality, architecture, effective use of AI and Google technologies, and robustness of the implementation.',
        color: COLORS.PRIMARY.RED,
    },
];

export default function JudgingSection() {
    return (
        <SectionWrapper
            id='judging'
            container='narrow'
            ariaLabelledby='judging-heading'
        >
            <SectionHeading id='judging-heading'>
                Judging Process & Criteria
            </SectionHeading>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16'>
                {/* Judging Process Timeline */}
                <div className='relative'>
                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left'>
                        Our Process
                    </h3>

                    {/* Vertical Gradient Line */}
                    <div
                        className='absolute left-5 lg:left-6 top-20 bottom-0 w-0.5 rounded-full opacity-50'
                        style={{
                            background: `linear-gradient(to bottom, ${COLORS.PRIMARY.BLUE}, ${COLORS.PRIMARY.GREEN}, ${COLORS.PRIMARY.RED})`,
                        }}
                    />

                    <div className='space-y-8 md:space-y-10'>
                        {JUDGING_STEPS.map((step) => (
                            <div
                                key={step.number}
                                className='relative flex items-start gap-6 group'
                            >
                                {/* Step Number Circle - Improved touch target */}
                                <div
                                    className='relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full text-white font-bold text-lg md:text-xl shadow-lg transition-all duration-300 group-hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50'
                                    style={{
                                        backgroundColor: step.color,
                                        boxShadow: `0 0 20px ${step.color}60`,
                                    }}
                                    tabIndex={0}
                                    role='img'
                                    aria-label={`Step ${step.number}`}
                                >
                                    {step.number}
                                </div>

                                {/* Step Content */}
                                <div className='flex-1 pb-2'>
                                    <h4 className='text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors'>
                                        {step.title}
                                    </h4>
                                    <p className='text-sm md:text-base text-gray-400 leading-relaxed'>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Judging Criteria */}
                <div className='bg-kitahack-bg-card border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl'>
                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-6 text-center lg:text-left'>
                        Final Round Evaluation Criteria
                    </h3>
                    <p className='text-sm md:text-base text-gray-400 mb-8 leading-relaxed'>
                        Final round projects are evaluated across key dimensions to ensure
                        fairness and recognize excellence.
                    </p>

                    <div className='space-y-6'>
                        {JUDGING_CRITERIA.map((criterion) => (
                            <div key={criterion.name} className='group'>
                                <div className='flex justify-between items-center mb-3'>
                                    <span className='text-sm md:text-base font-medium text-white group-hover:text-blue-300 transition-colors'>
                                        {criterion.name}
                                    </span>
                                    <span
                                        className='text-sm md:text-base font-bold px-3 py-1 rounded-full bg-white/5 border'
                                        style={{
                                            color: criterion.color,
                                            borderColor: `${criterion.color}40`,
                                        }}
                                    >
                                        {criterion.weight}%
                                    </span>
                                </div>

                                {/* Progress Bar with ARIA */}
                                <div
                                    className='w-full bg-gray-800 rounded-full h-3 mb-2 overflow-hidden'
                                    role='progressbar'
                                    aria-valuenow={criterion.weight}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    aria-label={`${criterion.name}: ${criterion.weight}%`}
                                >
                                    <div
                                        className='h-full rounded-full transition-all duration-1000 ease-out'
                                        style={{
                                            width: `${criterion.weight}%`,
                                            background: `linear-gradient(to right, ${criterion.color}80, ${criterion.color})`,
                                        }}
                                    />
                                </div>

                                <p className='text-xs md:text-sm text-gray-500 leading-relaxed'>
                                    {criterion.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Rubric Link Button - Improved touch target */}
                    <div className='mt-8'>
                        <Button
                            asChild
                            className={`w-full min-h-[48px] text-base md:text-lg ${ui.button.primary}`}
                        >
                            <a
                                href={EXTERNAL_URLS.RUBRIC}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='View full detailed rubric in Google Drive (opens in new tab)'
                            >
                                View Full Detailed Rubric
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

