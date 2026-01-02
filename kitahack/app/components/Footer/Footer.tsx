import React from 'react';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/constants';
import { typography } from '@/lib/typography';
import { animations } from '@/lib/animations';
import { ui } from '@/lib/ui-constants';

interface SocialLink {
    name: string;
    href: string;
    icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        href: SOCIAL_LINKS.LINKEDIN,
        icon: (
            <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
            >
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: SOCIAL_LINKS.INSTAGRAM,
        icon: (
            <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
            >
                <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                />
            </svg>
        ),
    },
    {
        name: 'Email',
        href: SOCIAL_LINKS.EMAIL,
        icon: (
            <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
            >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
            </svg>
        ),
    },
];

const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Technologies', href: '/#google-tech' },
    { name: 'Judging Criteria', href: '/#judging' },
    { name: 'FAQs', href: '/#faq' },
];

export default function Footer() {
    return (
        <footer className='relative bg-kitahack-bg-darker border-t border-gray-800/50'>
            {/* Decorative gradient borders at top */}
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent' />
            <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-50' />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8'>
                    {/* Brand Section */}
                    <div className='text-center md:text-left'>
                        <div className='mb-4'>
                            <h3 className='text-2xl md:text-3xl font-bold mb-2'>
                                <span className='text-kitahack-gradient'>
                                    KitaHack
                                </span>
                            </h3>
                            <p className={`${typography.bodySmall} text-gray-500`}>
                                Building the future with AI and Google technologies
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='text-center md:text-left'>
                        <h4 className={`${typography.label} mb-4 text-white`}>
                            Quick Links
                        </h4>
                        <nav aria-label='Footer navigation'>
                            <ul className='space-y-2'>
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={`${typography.bodySmall} ${animations.transition.default} hover:text-blue-400 ${animations.focus.ringThin}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className='text-center md:text-left'>
                        <h4 className={`${typography.label} mb-4 text-white`}>
                            Connect With Us
                        </h4>
                        <div className='flex justify-center md:justify-start gap-4'>
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className={`p-2 rounded-lg ${animations.transition.default} ${animations.hover.scale} ${animations.focus.ringThin} text-gray-400 hover:text-white hover:bg-gray-800/50`}
                                    aria-label={`Visit our ${social.name} page`}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='border-t border-gray-800/50 pt-8 mt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        {/* Copyright */}
                        <div className='text-center md:text-left'>
                            <p className={`${typography.labelSmall} text-gray-500`}>
                                © 2026 GDGoC Malaysia. All rights reserved.
                            </p>
                            <p className={`${typography.labelSmall} text-gray-600 mt-1`}>
                                Part of the Google Developer Groups community
                            </p>
                        </div>

                        {/* Brand Logo with Gradient */}
                        <div className='flex items-center gap-2'>
                            <span className='text-kitahack-gradient text-lg font-bold'>
                                + 2026 +
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

