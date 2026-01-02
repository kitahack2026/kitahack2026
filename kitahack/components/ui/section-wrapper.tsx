import React from 'react';
import { cn } from '@/lib/utils';
import { ui } from '@/lib/ui-constants';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    padding?: 'default' | 'large' | 'small';
    container?: 'default' | 'wide' | 'narrow';
    ariaLabelledby?: string;
}

export function SectionWrapper({
    children,
    id,
    className,
    padding = 'default',
    container = 'default',
    ariaLabelledby,
}: SectionWrapperProps) {
    const paddingClass =
        padding === 'large'
            ? ui.sectionPaddingLarge
            : padding === 'small'
            ? 'py-10 md:py-16 px-4'
            : ui.sectionPadding;

    const containerClass =
        container === 'wide'
            ? ui.containerWide
            : container === 'narrow'
            ? ui.containerNarrow
            : ui.container;

    return (
        <section
            id={id}
            className={cn(paddingClass, containerClass, className)}
            aria-labelledby={ariaLabelledby}
        >
            {children}
        </section>
    );
}

