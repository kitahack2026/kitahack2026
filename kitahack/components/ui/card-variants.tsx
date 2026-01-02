import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ui } from '@/lib/ui-constants';

interface StandardCardProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
    variant?: 'default' | 'elevated' | 'bordered';
}

export function StandardCard({
    children,
    title,
    className,
    variant = 'default',
}: StandardCardProps) {
    const variantClass =
        variant === 'elevated'
            ? ui.card.elevated
            : variant === 'bordered'
            ? 'border-2 border-gray-700 bg-gray-900/50 rounded-xl p-6'
            : ui.card.base;

    return (
        <Card className={cn(variantClass, className)}>
            {title && (
                <CardHeader>
                    <CardTitle className='text-2xl font-semibold border-b border-gray-700 pb-2'>
                        {title}
                    </CardTitle>
                </CardHeader>
            )}
            <CardContent>{children}</CardContent>
        </Card>
    );
}

