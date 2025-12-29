"use client";

import React from 'react';
import { CountdownDisplayProps } from './types';

/**
 * CountdownDisplay Component
 * Displays a single time unit (days, hours, minutes, or seconds)
 * with its label in a styled box
 */
const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white rounded-2xl backdrop-blur-sm min-w-[80px] md:min-w-[100px]">
            <span className="text-3xl md:text-5xl font-bold text-white tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-1">
                {label}
            </span>
        </div>
    );
};

export default CountdownDisplay;
