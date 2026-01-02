/**
 * Centralized TypeScript type definitions
 * All shared types should be defined here for consistency
 */

// ============================================
// Navigation Types
// ============================================
export interface NavItem {
    name: string;
    href: string;
}

// ============================================
// Event & Timeline Types
// ============================================
export interface TimelineEvent {
    title: string;
    date: string;
    type: string;
    color: string;
    details: string;
    location?: string;
}

// ============================================
// FAQ Types
// ============================================
export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export interface FAQCategory {
    category: string;
    items: FAQItem[];
}

// ============================================
// About Section Types
// ============================================
export interface AboutCardData {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    imageAlt: string;
    gradientFrom: string;
    gradientTo: string;
    imagePosition: 'left' | 'right';
}

// ============================================
// Partner/Sponsor Types
// ============================================
export interface Partner {
    name: string;
    logo: string;
    page: string;
}

// ============================================
// Countdown Timer Types
// ============================================
export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface CountdownTimerProps {
    targetDate: Date;
}

// ============================================
// Judging Types
// ============================================
export interface JudgingCriteria {
    name: string;
    weight: number;
    description: string;
    icon: React.ReactNode;
    color: string;
    gradient: string;
}

export interface JudgingStep {
    number: number;
    title: string;
    description: string;
    detailedDescription: string;
    icon: React.ReactNode;
    color: string;
    gradient: string;
}

// ============================================
// Component Props Types
// ============================================
export interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    padding?: 'default' | 'large' | 'small';
    container?: 'default' | 'wide' | 'narrow';
    ariaLabelledby?: string;
}

export interface SectionHeadingProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    withUnderline?: boolean;
    as?: 'h1' | 'h2' | 'h3';
}

export interface StandardCardProps {
    children: React.ReactNode;
    variant?: 'default' | 'bordered' | 'elevated';
    className?: string;
    title?: string;
}

