/**
 * Standardized typography utilities
 * Consistent text styles across the application
 */

export const typography = {
    // Section Headings
    sectionHeading: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
    sectionHeadingSmall: 'text-3xl md:text-4xl font-bold text-white',

    // Page Headings
    pageHeading: 'text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight',

    // Card Headings
    cardHeading: 'text-3xl md:text-4xl font-bold text-white',
    cardHeadingSmall: 'text-xl md:text-2xl font-bold text-white',
    cardHeadingTiny: 'text-lg sm:text-xl lg:text-lg font-bold text-white',

    // Body Text
    body: 'text-base md:text-lg text-gray-400 leading-relaxed',
    bodySmall: 'text-sm md:text-base text-gray-400 leading-relaxed',
    bodyTiny: 'text-xs sm:text-sm lg:text-[12px] text-gray-400 leading-tight',

    // Labels
    label: 'text-sm font-medium text-gray-300',
    labelSmall: 'text-xs font-medium text-gray-400',

    // Description Text
    description:
        'text-sm md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed',
} as const;

export const spacing = {
    // Section Padding
    sectionPadding: 'py-16 md:py-24 px-4',
    sectionPaddingSmall: 'py-10 md:py-16 px-4',

    // Container Max Widths
    container: 'max-w-6xl mx-auto',
    containerWide: 'max-w-7xl mx-auto',
    containerNarrow: 'max-w-4xl mx-auto',

    // Gap Utilities
    gapSmall: 'gap-4 md:gap-6',
    gapMedium: 'gap-8 md:gap-12',
    gapLarge: 'gap-16 md:gap-24',
} as const;
