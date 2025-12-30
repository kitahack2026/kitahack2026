"use client";
import CountdownTimer from "./CountdownTimer";
import { CountdownTimerProps } from "./types";

export default function CountdownTimerClient(props: CountdownTimerProps) {
  return <CountdownTimer {...props} />;
}