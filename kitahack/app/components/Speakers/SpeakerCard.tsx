import Image from "next/image";
import { Speaker } from "./speakers-data";

export default function SpeakerCard({ speaker }: { speaker: Speaker }) {
    return (
        <div className="bg-kitahack-bg-card border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 transition">
            {speaker.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div>
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">
                    {speaker.title}
                    {speaker.company && ` • ${speaker.company}`}
                </p>
            </div>

            <div className="text-sm">
                <p className="font-medium text-kitahack-blue mb-1">
                    Workshop
                </p>
                <p>{speaker.workshop}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
                {speaker.bio}
            </p>
        </div>
    );
}
