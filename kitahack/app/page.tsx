import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import Sponsors from './components/Partners/Sponsors';
import Organizers from './components/Partners/Organizers';
import Timeline from './components/Timeline';
import { TechnologiesSection } from './components/TechnologiesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* 1. Teammate's Hero Section */}
      <HeroSection />

      {/* 2. Teammate's About Section */}
      <AboutSection />

      {/* 3. Teammate's Timeline */}
      <Timeline />

      {/* 4. YOUR Google Technologies Section */}
      <div id="google-tech" className="py-10">
        <TechnologiesSection />
      </div>

      {/* 5. Teammate's Judging Section */}
      <section id="judging" className="max-w-5xl mx-auto p-8 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-500">Judging Process & Criteria</h2>
        <div className="grid md:grid-cols-2 gap-12">
            {/* Simple placeholder for the Judging text so it doesn't clutter the file. 
                The real content comes from the components/files you downloaded. */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Steps</h3>
                <ul className="space-y-2 text-gray-400">
                    <li>1. Preliminary Screening</li>
                    <li>2. Technical Evaluation</li>
                    <li>3. Live Pitching</li>
                </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Criteria</h3>
                <p className="text-gray-400">Impact (70%) and Technical Depth (60%)</p>
                <div className="mt-4">
                     <a href="#" className="text-blue-400 hover:underline">View Full Rubric</a>
                </div>
            </div>
        </div>
      </section>

      {/* 6. Sponsors & Organizers */}
      <Sponsors />
      <Organizers />
    </main>
  );
}