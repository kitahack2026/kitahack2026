'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { EXTERNAL_URLS } from '@/constants';
import { ui } from '@/lib/ui-constants';
import { typography } from '@/lib/typography';
import { animations } from '@/lib/animations';

type Theme =
    | 'green'
    | 'cyan'
    | 'blue'
    | 'orange'
    | 'yellow'
    | 'purple'
    | 'red'
    | 'violet';

interface ThemeStyles {
    hoverBorder: string;
    hoverBg: string;
    hoverShadow: string;
    glow: string;
}

type NeonThemes = {
    [theme in Theme]: ThemeStyles;
};

const neonThemes: NeonThemes = {
    green: {
        hoverBorder: 'hover:border-green-400',
        hoverBg: 'hover:bg-green-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.6)]',
        glow: 'bg-green-500/20',
    },
    cyan: {
        hoverBorder: 'hover:border-cyan-400',
        hoverBg: 'hover:bg-cyan-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(34,211,238,0.6)]',
        glow: 'bg-cyan-500/20',
    },
    blue: {
        hoverBorder: 'hover:border-blue-400',
        hoverBg: 'hover:bg-blue-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(96,165,250,0.6)]',
        glow: 'bg-blue-500/20',
    },
    orange: {
        hoverBorder: 'hover:border-orange-400',
        hoverBg: 'hover:bg-orange-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(251,146,60,0.6)]',
        glow: 'bg-orange-500/20',
    },
    yellow: {
        hoverBorder: 'hover:border-yellow-300',
        hoverBg: 'hover:bg-yellow-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(253,224,71,0.6)]',
        glow: 'bg-yellow-500/20',
    },
    purple: {
        hoverBorder: 'hover:border-purple-400',
        hoverBg: 'hover:bg-purple-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(192,132,252,0.6)]',
        glow: 'bg-purple-500/20',
    },
    red: {
        hoverBorder: 'hover:border-rose-400',
        hoverBg: 'hover:bg-rose-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(251,113,133,0.6)]',
        glow: 'bg-rose-500/20',
    },
    violet: {
        hoverBorder: 'hover:border-violet-400',
        hoverBg: 'hover:bg-violet-950/30',
        hoverShadow: 'hover:shadow-[0_0_25px_-5px_rgba(167,139,250,0.6)]',
        glow: 'bg-violet-500/20',
    },
};

interface TechCardProps {
    title: string;
    description: string;
    link: string;
    themeColor: Theme;
    icon: string;
    width: string;
    height: string;
    hideText: boolean;
    customIconSize?: string;
}

const TechCard: React.FC<TechCardProps> = ({
    title,
    description,
    link,
    themeColor,
    icon,
    width,
    height,
    hideText,
    customIconSize,
}) => {
    const theme: ThemeStyles = neonThemes[themeColor] || neonThemes.blue;
    const iconSizeClass = customIconSize || 'w-16 h-16';

    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            style={
                {
                    '--d-width': width,
                    '--d-height': height,
                } as React.CSSProperties
            }
            className={`
        group flex flex-col items-center justify-center text-center
        p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-gray-800 bg-gray-900/80 backdrop-blur-md
        ${animations.transition.default} ${animations.hover.lift} cursor-pointer
        relative overflow-hidden
        w-full h-auto min-h-[180px] sm:min-h-[200px]
        lg:w-[var(--d-width)] lg:h-[var(--d-height)]
        ${theme.hoverBorder} ${theme.hoverBg} ${theme.hoverShadow}
        ${animations.focus.ringThin}
      `}
        >
            <div
                className={`absolute -inset-2 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none ${theme.glow}`}
            />

            <div
                className={`mb-3 relative ${iconSizeClass} z-10 transition-transform duration-300 group-hover:scale-110`}
            >
                <Image
                    src={icon}
                    alt={`${title} logo`}
                    fill
                    className='object-contain'
                    sizes='200px'
                />
            </div>

            <h3 className={`${typography.cardHeadingTiny} mb-2 z-10`}>
                {title}
            </h3>

            {!hideText && (
                <p className={`${typography.bodyTiny} px-1 z-10`}>
                    {description}
                </p>
            )}
        </a>
    );
};

export default function TechnologiesSection() {
    return (
        <section className='bg-black min-h-screen w-full flex flex-col justify-start items-center pt-8 sm:pt-12 md:pt-24 pb-10 overflow-x-hidden relative'>
            {/* Background Grid and Glows */}
            <div className='absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[length:40px_40px]' />
            <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none' />
            <div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none' />

            <div
                className={`${ui.containerWide} px-4 sm:px-6 lg:px-8 relative z-10 w-full`}
            >
                <SectionHeading>Google Technologies</SectionHeading>
                <p
                    className={`${typography.description} text-center mt-6 px-2 md:px-4`}
                >
                    Explore the core Google ecosystem driving mobile, web,
                    cloud, and AI innovation.
                    <br className='hidden sm:block' />
                    <span className={`${ui.text.muted} block mt-1`}>
                        Master practical tools to transform your ideas into
                        scalable projects.
                    </span>
                </p>

                {/* Mobile/Tablet: Grid layout */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-5 w-full max-w-2xl mx-auto'>
                    <TechCard
                        title='Android'
                        description='Build native mobile applications for billions of Android devices worldwide.'
                        link={EXTERNAL_URLS.ANDROID}
                        themeColor='green'
                        icon='/logos/android.png'
                        width='260px'
                        height='240px'
                        hideText={false}
                    />
                    <TechCard
                        title='Flutter'
                        description='Build cross-platform apps from a single codebase.'
                        link={EXTERNAL_URLS.FLUTTER}
                        themeColor='cyan'
                        icon='/logos/flutter.png'
                        width='260px'
                        height='160px'
                        hideText={false}
                    />
                    <TechCard
                        title='Google Cloud'
                        description='A powerful cloud platform offering computing, storage, AI, and backend services.'
                        link={EXTERNAL_URLS.GOOGLE_CLOUD}
                        themeColor='blue'
                        icon='/logos/cloud.png'
                        width='260px'
                        height='350px'
                        hideText={false}
                    />
                    <div className='flex flex-col gap-4 sm:gap-5'>
                        <div className='w-full flex justify-center'>
                            <Link
                                href={EXTERNAL_URLS.GOOGLE_PRODUCTS}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button
                                    type='button'
                                    className={`bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full font-bold ${animations.transition.default} ${animations.hover.scale} shadow-lg shadow-blue-900/50 text-sm sm:text-base whitespace-nowrap ${animations.focus.ringThin}`}
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                        <TechCard
                            title='Google Developers'
                            description='Official tools and resources.'
                            link={EXTERNAL_URLS.GOOGLE_DEVELOPERS}
                            themeColor='red'
                            icon='/logos/google.png'
                            width='260px'
                            height='200px'
                            hideText={false}
                        />
                    </div>
                    <TechCard
                        title='Firebase'
                        description='An all-in-one backend platform providing authentication, databases, and hosting.'
                        link={EXTERNAL_URLS.FIREBASE}
                        themeColor='yellow'
                        icon='/logos/firebase.png'
                        width='260px'
                        height='350px'
                        hideText={false}
                    />
                    <TechCard
                        title='TensorFlow'
                        description='An open-source machine learning framework used to build and deploy AI models.'
                        link={EXTERNAL_URLS.TENSORFLOW}
                        themeColor='orange'
                        icon='/logos/tensorflow.png'
                        width='260px'
                        height='240px'
                        hideText={false}
                    />
                    <TechCard
                        title='Google AI Studio'
                        description="Experiment and build applications using Google's AI models."
                        link={EXTERNAL_URLS.GOOGLE_AI_STUDIO}
                        themeColor='purple'
                        icon='/logos/ai.png'
                        width='260px'
                        height='160px'
                        hideText={false}
                    />
                </div>

                {/* Desktop: Original complex layout */}
                <div className='hidden lg:flex lg:flex-row flex-wrap xl:flex-nowrap justify-center gap-4 xl:gap-5 h-auto items-stretch w-full max-w-7xl mx-auto'>
                    <div className='flex flex-col justify-start gap-4 xl:gap-5 w-full lg:w-auto'>
                        <TechCard
                            title='Android'
                            description='Build native mobile applications for billions of Android devices worldwide.'
                            link={EXTERNAL_URLS.ANDROID}
                            themeColor='green'
                            icon='/logos/android.png'
                            width='260px'
                            height='240px'
                            hideText={false}
                        />
                        <TechCard
                            title='Flutter'
                            description='Build cross-platform apps from a single codebase.'
                            link={EXTERNAL_URLS.FLUTTER}
                            themeColor='cyan'
                            icon='/logos/flutter.png'
                            width='260px'
                            height='160px'
                            hideText={false}
                        />
                    </div>

                    <div className='flex flex-col justify-end gap-4 xl:gap-5 w-full lg:w-auto'>
                        <TechCard
                            title='Google Cloud'
                            description='A powerful cloud platform offering computing, storage, AI, and backend services.'
                            link={EXTERNAL_URLS.GOOGLE_CLOUD}
                            themeColor='blue'
                            icon='/logos/cloud.png'
                            width='260px'
                            height='350px'
                            hideText={false}
                        />
                    </div>

                    <div className='flex flex-col justify-between items-center gap-4 xl:gap-5 w-full lg:w-auto'>
                        <div className='w-full flex justify-center py-2 lg:py-0'>
                            <Link
                                href={EXTERNAL_URLS.GOOGLE_PRODUCTS}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button
                                    type='button'
                                    className={`bg-blue-600 hover:bg-blue-500 text-white px-6 lg:px-8 xl:px-10 py-2 lg:py-3 rounded-full font-bold ${animations.transition.default} ${animations.hover.scale} shadow-lg shadow-blue-900/50 text-xs lg:text-sm xl:text-base whitespace-nowrap ${animations.focus.ringThin}`}
                                >
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                        <TechCard
                            title='Google Developers'
                            description='Official tools and resources.'
                            link={EXTERNAL_URLS.GOOGLE_DEVELOPERS}
                            themeColor='red'
                            icon='/logos/google.png'
                            width='260px'
                            height='200px'
                            hideText={false}
                        />
                    </div>

                    <div className='flex flex-col justify-end gap-4 xl:gap-5 w-full lg:w-auto'>
                        <TechCard
                            title='Firebase'
                            description='An all-in-one backend platform providing authentication, databases, and hosting.'
                            link={EXTERNAL_URLS.FIREBASE}
                            themeColor='yellow'
                            icon='/logos/firebase.png'
                            width='260px'
                            height='350px'
                            hideText={false}
                        />
                    </div>

                    <div className='flex flex-col justify-start gap-4 xl:gap-5 w-full lg:w-auto'>
                        <TechCard
                            title='TensorFlow'
                            description='An open-source machine learning framework used to build and deploy AI models.'
                            link={EXTERNAL_URLS.TENSORFLOW}
                            themeColor='orange'
                            icon='/logos/tensorflow.png'
                            width='260px'
                            height='240px'
                            hideText={false}
                        />
                        <TechCard
                            title='Google AI Studio'
                            description="Experiment and build applications using Google's AI models."
                            link={EXTERNAL_URLS.GOOGLE_AI_STUDIO}
                            themeColor='purple'
                            icon='/logos/ai.png'
                            width='260px'
                            height='160px'
                            hideText={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
