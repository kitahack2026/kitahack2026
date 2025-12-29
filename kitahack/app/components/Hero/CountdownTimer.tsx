"use client";

import React, { useState, useEffect } from 'react';
import { CountdownTimerProps, TimeRemaining } from './types';
import CountdownDisplay from './CountdownDisplay';

/**
 * CountdownTimer Component
 * Implements OOP-style timer logic with real-time countdown
 * Calculates and displays days, hours, minutes, and seconds until target date
 */
class TimerLogic {
    private targetDate: Date;

    constructor(targetDate: Date) {
        this.targetDate = targetDate;
    }

    /**
     * Calculate time remaining until target date
     * @returns TimeRemaining object with days, hours, minutes, seconds
     */
    calculateTimeRemaining(): TimeRemaining {
        const now = new Date().getTime();
        const target = this.targetDate.getTime();
        const difference = target - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = new TimerLogic(targetDate);

        // Initial calculation
        setTimeRemaining(timer.calculateTimeRemaining());

        // Update every second
        const interval = setInterval(() => {
            setTimeRemaining(timer.calculateTimeRemaining());
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-col items-center gap-3 md:gap-4">
            {/* Label */}
            <p className="text-xs md:text-lg text-gray-400 uppercase tracking-widest font-semibold">
                Registration Closes In
            </p>

            {/* Countdown Display with Colons */}
            <div className="flex gap-1.5 md:gap-3 justify-center items-center">
                <CountdownDisplay value={timeRemaining.days} label="Days" />
                <span className="text-2xl md:text-5xl font-bold text-white/50">:</span>
                <CountdownDisplay value={timeRemaining.hours} label="Hours" />
                <span className="text-2xl md:text-5xl font-bold text-white/50">:</span>
                <CountdownDisplay value={timeRemaining.minutes} label="Minutes" />
                <span className="text-2xl md:text-5xl font-bold text-white/50">:</span>
                <CountdownDisplay value={timeRemaining.seconds} label="Seconds" />
            </div>
        </div>
    );
};

export default CountdownTimer;
