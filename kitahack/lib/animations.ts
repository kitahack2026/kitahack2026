/**
 * Standardized animation utilities
 * Consistent animation patterns across the application
 */

export const animations = {
    // Transitions
    transition: {
        default: 'transition-all duration-300',
        fast: 'transition-all duration-150',
        slow: 'transition-all duration-500',
    },

    // Hover effects
    hover: {
        scale: 'transform hover:scale-105',
        lift: 'transform hover:-translate-y-2',
        glow: 'hover:shadow-lg hover:shadow-blue-900/20',
    },

    // Focus states
    focus: {
        ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900',
        ringThin: 'focus:outline-none focus:ring-2 focus:ring-blue-500 rounded',
    },

    // Animation classes
    fadeIn: 'animate-in fade-in duration-500',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
} as const;
