import Image from "next/image";
import { Speaker } from "./speakers-data";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
    return (
        <div className="group relative h-full">
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-kitahack-blue via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-xl transition duration-500" />

            {/* Main card */}
            <div className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kitahack-blue via-purple-500 to-pink-500" />

                {/* Content */}
                <div className="relative p-8 flex flex-col gap-6 h-full">
                    {/* Profile section */}
                    <div className="flex items-start gap-5">
                        {speaker.image && (
                            <div className="relative shrink-0">
                                {/* Animated ring */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-kitahack-blue to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition duration-500" />

                                {/* Profile image */}
                                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-gray-900/50">
                                    <Image
                                        src={speaker.image}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Name and title */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                                {speaker.name}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {speaker.title}
                                {speaker.company && (
                                    <>
                                        <br />
                                        <span className="text-kitahack-blue font-medium">
                                            {speaker.company}
                                        </span>
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Workshop section */}
                    <div className="relative">
                        <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-kitahack-blue to-purple-500 rounded-full" />
                        <div className="bg-gradient-to-br from-kitahack-blue/10 to-purple-500/10 border border-kitahack-blue/20 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-5 h-5 text-kitahack-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <p className="text-xs font-bold uppercase tracking-wider text-kitahack-blue">
                                    Workshop
                                </p>
                            </div>
                            <p className="text-base font-semibold text-white leading-relaxed">
                                {speaker.workshop}
                            </p>
                        </div>
                    </div>

                    {/* Bio - with flex-1 to push decorative element to bottom */}
                    <div className="flex-1 flex flex-col">
                        <p className="text-sm text-gray-300 leading-relaxed text-justify whitespace-pre-line">
                            {speaker.bio}
                        </p>
                    </div>

                    {/* Decorative bottom element - will always be at bottom */}
                    <div className="flex items-center gap-2 pt-2 border-t border-white/5 mt-auto">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-kitahack-blue/50 to-transparent" />
                        <div className="w-2 h-2 rounded-full bg-kitahack-blue/50 group-hover:bg-kitahack-blue transition-colors duration-500" />
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
