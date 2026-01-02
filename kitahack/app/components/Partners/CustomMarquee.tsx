import path from 'path';
import { Marquee } from '@devnomic/marquee';
import './marquee.css';
import Logo from './Logo';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { animations } from '@/lib/animations';

interface Partner {
    name: string;
    logo: string;
    page: string;
}

interface CustomMarqueeProps {
    header: string;
    srcFolder: string;
    reverse: boolean;
    partnerList: Partner[];
    duration: number;
    lightTheme?: boolean;
}

export default function CustomMarquee({
    header,
    srcFolder,
    reverse,
    partnerList,
    duration,
    lightTheme = false,
}: CustomMarqueeProps) {
    const sliderClassName = lightTheme
        ? 'bg-[#f5f5f5] border border-gray-300/50 py-5 mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 rounded-2xl'
        : 'bg-gray-900/50 border border-gray-800 py-5 mx-1 md:mx-2 lg:mx-3 xl:mx-4 2xl:mx-6 rounded-2xl';

    return (
        <SectionWrapper ariaLabelledby={`${header.toLowerCase()}-heading`}>
            <SectionHeading id={`${header.toLowerCase()}-heading`}>
                {header}
            </SectionHeading>
            <div className={sliderClassName}>
                <Marquee
                    fade={true}
                    pauseOnHover={true}
                    className={`[--duration:${duration}s]`}
                    reverse={reverse}
                >
                    {partnerList.map((partner, index) => (
                        <a
                            key={`${partner.name}-${index}`}
                            href={partner.page}
                            target='_blank'
                            rel='noopener noreferrer'
                            className={`block ${lightTheme ? 'opacity-80 hover:opacity-100' : 'grayscale-10 opacity-70 hover:grayscale-0 hover:opacity-100'} ${animations.transition.default} ${animations.hover.scale} ${animations.focus.ringThin}`}
                            aria-label={`Visit ${partner.name} website`}
                        >
                            <Logo
                                src={path.join(srcFolder, partner.logo)}
                                name={partner.name}
                            />
                        </a>
                    ))}
                </Marquee>
            </div>
        </SectionWrapper>
    );
}
