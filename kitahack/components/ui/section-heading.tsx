import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    withUnderline?: boolean;
    as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
    children,
    id,
    className,
    withUnderline = true,
    as: Component = 'h2',
}: SectionHeadingProps) {
    return (
        <div className='text-center mb-12 md:mb-16'>
            <Component
                id={id}
                className={cn(
                    'text-4xl md:text-5xl lg:text-6xl font-bold text-white',
                    className
                )}
            >
                {children}
            </Component>
            {withUnderline && (
                <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4' />
            )}
        </div>
    );
}

