/**
 * Application-wide constants
 * Centralized configuration values for the KitaHack 2026 landing page
 */

// Event Dates
export const EVENT_DATES = {
    REGISTRATION_CLOSES: new Date('2026-01-18T23:59:59+08:00'),
} as const;

// External URLs
export const EXTERNAL_URLS = {
    RUBRIC: 'https://drive.google.com/drive/u/5/folders/1DXumVRpNUqZzpxHE-O3arWUeodO4htbV',
    ANDROID: 'https://developer.android.com',
    FLUTTER: 'https://flutter.dev',
    GOOGLE_CLOUD: 'https://cloud.google.com',
    GOOGLE_DEVELOPERS: 'https://developers.google.com',
    FIREBASE: 'https://firebase.google.com',
    TENSORFLOW: 'https://www.tensorflow.org',
    GOOGLE_AI_STUDIO: 'https://ai.google.dev/',
    GOOGLE_PRODUCTS: 'https://about.google/products/#google-products',
} as const;

// Color Palette
export const COLORS = {
    PRIMARY: {
        BLUE: '#3B84F7',
        GREEN: '#47AD7A',
        RED: '#CB5C6D',
        YELLOW: '#D1AC34',
    },
    BACKGROUND: {
        DARK: '#0A0A0A',
        DARKER: '#0F0F0F',
        CARD: '#1A1A1A',
    },
} as const;

// Navigation Items
export const NAV_ITEMS = [
    { name: 'About', href: '/#about' },
    { name: 'Google Technologies', href: '/#google-tech' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Criteria', href: '/#judging' },
    { name: 'FAQs', href: '/#faq' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
    LINKEDIN: 'https://www.linkedin.com/company/gdgc-malaysia',
    INSTAGRAM: 'https://www.instagram.com/gdgc_malaysia',
    EMAIL: 'mailto:sea.dscmalaysia@gmail.com',
} as const;

