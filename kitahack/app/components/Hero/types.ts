/**
 * TypeScript interfaces for Hero Section components
 * Defines the shape of data and props for type safety
 */

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownTimerProps {
  targetDate: Date;
}

export interface CountdownDisplayProps {
  value: number;
  label: string;
}
