import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import NavBar from '../components/layout/NavBar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'KitaHack 2026 | GDGoC Malaysia',
    description:
        'GDGoC KitaHack 2026 is an open-ended hackathon designed to enable students to conceptualise and build technology solutions aligned with the United Nations Sustainable Development Goals using AI and Google technologies.',
    keywords: [
        'hackathon',
        'KitaHack',
        'GDGoC',
        'Google Developer Groups',
        'Malaysia',
        'SDG',
        'AI',
        'Google Technologies',
        '2026',
    ],
    authors: [{ name: 'GDGoC Malaysia' }],
    openGraph: {
        title: 'KitaHack 2026 | GDGoC Malaysia',
        description:
            'Join GDGoC KitaHack 2026 - Build SDG-aligned solutions using AI and Google technologies',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NavBar></NavBar>
                {children}
            </body>
        </html>
    );
}
