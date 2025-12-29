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
        <div className="flex flex-col items-center justify-center p-2 md:p-4 bg-white/5 border border-white rounded-xl md:rounded-2xl backdrop-blur-sm min-w-[60px] md:min-w-[100px]">
            <span className="text-2xl md:text-5xl font-bold text-white tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-sm text-gray-400 uppercase tracking-wider mt-0.5 md:mt-1">
                {label}
            </span>
        </div>
    );
};

export default CountdownDisplay;
