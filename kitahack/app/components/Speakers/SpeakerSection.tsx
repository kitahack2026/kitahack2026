import SpeakerCard from "./SpeakerCard";
import { speakers } from "./speakers-data";

export default function SpeakersSection() {
    return (
        <section className="py-16 md:py-24 bg-kitahack-gradient">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-kitahack-gradient">
                        Speakers & Workshops
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Learn from industry experts and community leaders
                        through hands-on workshops and tech talks.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {speakers.map((speaker) => (
                        <SpeakerCard
                            key={speaker.name}
                            speaker={speaker}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
