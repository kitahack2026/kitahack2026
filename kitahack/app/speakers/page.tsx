import SpeakersSection from "../components/Speakers/SpeakerSection";
import Footer from "../components/Footer/Footer";

export const metadata = {
    title: "Speakers | KitaHack 2026",
    description: "Meet the speakers and workshop leaders at KitaHack 2026"
};

export default function SpeakersPage() {
    return (
        <main className="min-h-screen bg-kitahack-bg-dark text-white">
            <SpeakersSection />
            <Footer />
        </main>
    );
}
