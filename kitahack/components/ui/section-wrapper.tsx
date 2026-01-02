import React from 'react';
import { cn } from '@/lib/utils';
import { ui } from '@/lib/ui-constants';
import type { SectionWrapperProps } from '@/types';

/**
 * SectionWrapper Component
 * 
 * A standardized wrapper for page sections that provides
 * consistent padding, container widths, and accessibility features.
 * 
 * @example
 * <SectionWrapper id="about" padding="large" container="wide">
 *   <SectionHeading>About Us</SectionHeading>
 *   <p>Content here...</p>
 * </SectionWrapper>
 */
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
