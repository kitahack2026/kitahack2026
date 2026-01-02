/**
 * KitaHack 2026 Design System
 * Centralized design tokens for enterprise-level consistency
 * 
 * Usage:
 * - Import specific tokens: import { colors, typography } from '@/lib/design-system'
 * - Or import all: import * as ds from '@/lib/design-system'
 */

// ============================================
// Color Palette
// ============================================
export const colors = {
    // Brand Colors
    brand: {
        blue: '#3B84F7',
        green: '#47AD7A',
        red: '#CB5C6D',
        yellow: '#D1AC34',
    },
    // Background Colors
    background: {
        dark: '#0A0A0A',
        darker: '#0F0F0F',
        card: '#1A1A1A',
    },
    // Text Colors
    text: {
        primary: 'text-white',
        secondary: 'text-gray-400',
        muted: 'text-gray-500',
        accent: 'text-blue-500',
    },
} as const;

// ============================================
// Typography Scale
// ============================================
export const typography = {
    // Display (Hero/Page titles)
    display: 'text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight',
    
    // Section Headings
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
    h2: 'text-3xl md:text-4xl font-bold text-white',
    h3: 'text-xl md:text-2xl font-bold text-white',
    h4: 'text-lg md:text-xl font-bold text-white',
    
    // Body Text
    body: 'text-base md:text-lg text-gray-400 leading-relaxed',
    bodySmall: 'text-sm md:text-base text-gray-400 leading-relaxed',
    bodyTiny: 'text-xs text-gray-400 leading-relaxed',
    
    // Labels & Captions
    label: 'text-sm font-medium text-gray-300',
    labelSmall: 'text-xs font-medium text-gray-400',
    caption: 'text-xs text-gray-500',
    
    // Utility classes for common patterns
    gradient: 'text-kitahack-gradient animate-gradient',
} as const;

// ============================================
// Spacing System
// ============================================
export const spacing = {
    // Section Padding
    section: {
        default: 'py-16 md:py-24 px-4',
        large: 'py-20 md:py-32 px-4',
        small: 'py-10 md:py-16 px-4',
    },
    // Container Widths
    container: {
        default: 'max-w-6xl mx-auto',
        wide: 'max-w-7xl mx-auto',
        narrow: 'max-w-4xl mx-auto',
        full: 'w-full',
    },
    // Gap Utilities
    gap: {
        small: 'gap-4 md:gap-6',
        medium: 'gap-8 md:gap-12',
        large: 'gap-16 md:gap-24',
    },
} as const;

// ============================================
// Component Styles
// ============================================
export const components = {
    // Buttons
    button: {
        primary: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        secondary: 'bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-all border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        cta: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        ghost: 'bg-transparent hover:bg-white/5 text-white font-medium py-2 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white/20',
    },
    // Cards
    card: {
        default: 'bg-gray-900/50 rounded-xl p-6',
        bordered: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6',
        elevated: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg',
        interactive: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 transition-all hover:border-white/20 hover:shadow-lg cursor-pointer',
    },
    // Section Heading with underline decoration
    sectionHeading: {
        wrapper: 'text-center mb-12 md:mb-16',
        title: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
        underline: 'w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4',
    },
} as const;

// ============================================
// Animation Utilities
// ============================================
export const animation = {
    // Transitions
    transition: {
        default: 'transition-all duration-300',
        fast: 'transition-all duration-150',
        slow: 'transition-all duration-500',
    },
    // Hover Effects
    hover: {
        scale: 'hover:scale-105',
        lift: 'hover:-translate-y-1',
        glow: 'hover:shadow-lg hover:shadow-blue-500/20',
    },
    // Focus States (Accessibility)
    focus: {
        ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900',
    },
} as const;

// ============================================
// Breakpoints (for reference)
// ============================================
export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const;

// ============================================
// Z-Index Scale
// ============================================
export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
    toast: 80,
    max: 100,
} as const;

