/**
 * TypeScript interfaces for About section components
 */

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

export interface AboutCardProps {
    data: AboutCardData;
}

export interface AboutSectionProps {
    // Future props can be added here
}
