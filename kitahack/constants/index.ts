/**
 * Application Constants
 * Centralized constants for the KitaHack 2026 application
 */

// Event Dates
export const EVENT_DATES = {
    REGISTRATION_CLOSES: new Date('2026-01-18T23:59:59'), // 18th Jan 2026 - Registration closes date
} as const;

// Navigation Items
export const NAV_ITEMS = [
    { name: 'About', href: '/#about' },
    { name: 'Technologies', href: '/#google-tech' },
    { name: 'Timeline', href: '/#timeline' },
    { name: 'Judging', href: '/#judging' },
    { name: 'FAQs', href: '/#faq' },
] as const;

// External URLs
export const EXTERNAL_URLS = {
    // Google Technologies
    ANDROID: 'https://developer.android.com',
    FLUTTER: 'https://flutter.dev',
    FIREBASE: 'https://firebase.google.com',
    GOOGLE_CLOUD: 'https://cloud.google.com',
    TENSORFLOW: 'https://www.tensorflow.org',
    GOOGLE_AI_STUDIO: 'https://aistudio.google.com',
    GOOGLE_DEVELOPERS: 'https://developers.google.com',
    GOOGLE_PRODUCTS: 'https://developers.google.com/products',
    
    // Judging & Resources
    RUBRIC: 'https://drive.google.com/file/d/your-rubric-id/view',
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
    LINKEDIN: 'https://www.linkedin.com/company/gdgc-malaysia',
    INSTAGRAM: 'https://www.instagram.com/gdgc_malaysia',
    EMAIL: 'mailto:contact@kitahack.com',
} as const;

