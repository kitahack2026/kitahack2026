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

    /**
     * original code
     *  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    then inside of the use effect it is used like this

    setTimeRemaining(timer.calculateTimeRemaining());

    how it flows it goes with Component renders with zeros, so it shows like
    00 : 00 : 00 : 00
    then the browsers will start painting the UI
    useEffect runs
    State updates to real countdown
    Component re-renders

    result will be have some sort of a sudden flash
    besides: in react strict dev mode, useEffect runs twice, and thus render twice

    in which this could causes the hydration issue.

    how it wil cause -> when the initial states render 
    useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    });

    Server render (or build-time render)                  00 : 00 : 00 : 00
    Client hydration render                               00 : 00 : 00 : 00
    so far it is fine but the mismatch still could happens

    in short:
    First render must be truthful.
    Effects are for updates, not corrections.
    Hope this makes more clear when deal with states :) ! Good job thooo
    */
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => {
        const timer = new TimerLogic(targetDate);
        return timer.calculateTimeRemaining();
    });

    useEffect(() => {
        const timer = new TimerLogic(targetDate);

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
