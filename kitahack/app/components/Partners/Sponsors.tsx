import CustomMarquee from './CustomMarquee';

// next is not sponsoring lol, just a placeholder logo for now
const sponsors = [
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
    { name: 'next', logo: 'next.svg', page: 'https://nextjs.org/' },
];

import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { StandardCard } from '@/components/ui/card-variants';
import { ui } from '@/lib/ui-constants';
import { typography } from '@/lib/typography';

function CallingForSponsors() {
    return (
        <SectionWrapper>
            <div className='relative z-10'>
                <div className='absolute -inset-[1px] rounded-[3rem] bg-kitahack-primary-gradient opacity-90 blur-3xl' />
                <div className='relative text-center space-y-6 md:space-y-8 p-6 md:p-12 rounded-[3rem] border border-white bg-black isolate'>
                    <SectionHeading>Calling for Sponsors</SectionHeading>
                    <StandardCard
                        variant='default'
                        className='max-w-4xl mx-auto'
                    >
                        <div className='p-8 md:p-10 text-center'>
                            <p
                                className={`${typography.description} text-lg md:text-xl mb-10`}
                            >
                                We are actively seeking sponsors to support
                                KitaHack 2026. By partnering with us, your
                                organization will gain visibility among a
                                diverse group of talented students and tech
                                enthusiasts. Sponsors will have the opportunity
                                to showcase their brand, network with
                                participants, and contribute to the growth of
                                the tech community.
                            </p>
                            <Button asChild className={ui.button.primary}>
                                <a
                                    href='mailto:contact@kitahack.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Contact us about sponsorship'
                                >
                                    Contact Us
                                </a>
                            </Button>
                        </div>
                    </StandardCard>
                </div>
            </div>
        </SectionWrapper>
    );
}

function Sponsors() {
    return (
        <CustomMarquee
            header='Sponsors'
            srcFolder='sponsors'
            reverse={false}
            partnerList={sponsors}
            duration={30}
        />
    );
}

// change below line to export Sponsors when we found sponsors
// else just leave it as CallingForSponsors
export default CallingForSponsors;
