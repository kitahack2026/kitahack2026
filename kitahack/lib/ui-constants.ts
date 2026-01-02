/**
 * UI Constants and Standardized Styles
 * Centralized design tokens for consistent UI across the application
 */

export const ui = {
    // Section Headings - Standardized
    sectionHeading: {
        base: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center',
        withDecoration:
            'text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4',
    },

    // Section Subheadings
    sectionSubheading:
        'text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto text-center',

    // Section Spacing
    sectionPadding: 'py-16 md:py-24 px-4',
    sectionPaddingLarge: 'py-20 md:py-32 px-4',

    // Container Widths
    container: 'max-w-6xl mx-auto',
    containerWide: 'max-w-7xl mx-auto',
    containerNarrow: 'max-w-4xl mx-auto',

    // Decorative Elements
    headingUnderline:
        'w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4',

    // Button Styles
    button: {
        primary:
            'bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        cta: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    },

    // Card Styles
    card: {
        base: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6',
        elevated:
            'bg-gray-900/50 border border-gray-800 rounded-xl p-6 shadow-lg',
    },

    // Text Colors
    text: {
        primary: 'text-white',
        secondary: 'text-gray-400',
        muted: 'text-gray-500',
        accent: 'text-blue-500',
        accentYellow: 'text-[#d1ac34]',
    },
} as const;
