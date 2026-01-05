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

import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SectionHeading } from '@/components/ui/section-heading';
import { StandardCard } from '@/components/ui/card-variants';
import { typography } from '@/lib/typography';

const contacts = [
    {
        name: 'Fong Jia Xin',
        email: 'jxfong357@gmail.com',
        phone: '010-3013940',
        role: 'Co-Director KitaHack 2026'
    },
    {
        name: 'Issye Lailiyah',
        email: 'issye03@gmail.com',
        phone: '014-3277626',
        role: 'Head of External Liaison KitaHack 2026'
    }
];

function CallingForSponsors() {
    return (
        <SectionWrapper>
            <div className='relative z-10'>
                <div className='absolute -inset-[1px] rounded-[3rem] bg-kitahack-primary-gradient opacity-90 blur-3xl' />
                <div className='relative text-center space-y-6 md:space-y-10 p-6 md:p-12 rounded-[3rem] border border-white bg-black isolate'>
                    <SectionHeading>Calling for Sponsors</SectionHeading>

                    <StandardCard
                        variant='default'
                        className='max-w-4xl mx-auto'
                    >
                        <div className='p-8 md:p-10 text-center'>
                            <p
                                className={`${typography.description} text-lg md:text-xl mb-0`}
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
                        </div>
                    </StandardCard>

                    {/* Contact Section */}
                    <div className='max-w-5xl mx-auto pt-4'>
                        <h3 className='text-xl md:text-2xl font-semibold mb-8 text-gray-300'>
                            For sponsorship inquiries, please contact:
                        </h3>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {contacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className='relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-kitahack-blue/50 transition-all duration-300'
                                >
                                    {/* Name and Role */}
                                    <div className='mb-5 pb-4 border-b border-gray-700/50'>
                                        <h4 className='text-xl font-bold text-white mb-1'>
                                            {contact.name}
                                        </h4>
                                        <p className='text-sm text-gray-400 italic'>
                                            {contact.role}
                                        </p>
                                    </div>

                                    {/* Contact Info */}
                                    <div className='space-y-3'>
                                        {/* Email */}
                                        <div className='flex items-start gap-3'>
                                            <div className='flex-shrink-0 mt-0.5'>
                                                <svg className='w-5 h-5 text-kitahack-blue' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                                </svg>
                                            </div>
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className='text-gray-300 hover:text-kitahack-blue transition-colors break-all'
                                            >
                                                {contact.email}
                                            </a>
                                        </div>

                                        {/* Phone */}
                                        <div className='flex items-start gap-3'>
                                            <div className='flex-shrink-0 mt-0.5'>
                                                <svg className='w-5 h-5 text-kitahack-blue' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                                </svg>
                                            </div>
                                            <a
                                                href={`tel:${contact.phone}`}
                                                className='text-gray-300 hover:text-kitahack-blue transition-colors'
                                            >
                                                {contact.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
