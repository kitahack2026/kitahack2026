import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import Sponsors from './components/Partners/Sponsors';
import Organizers from './components/Partners/Organizers';
import Timeline from './components/Timeline';
import { TechnologiesSection } from './components/TechnologiesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <HeroSection />
      <AboutSection />
      <Timeline />
      <TechnologiesSection />

      {/* Judging Section */}
      <section id="judging" className="max-w-5xl mx-auto p-8 py-20">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-500">Judging Process & Criteria</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="max-w-xl mx-auto py-10">
            <div className="space-y-0">
              {/* Step 1 */}
              <div className="relative flex items-start pb-12">
                {/* The Connecting Line */}
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-500"></div>

                <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  1
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white">Preliminary Screening</h4>
                  <p className="text-gray-400">Initial check to ensure all submission guidelines are met.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start pb-12">
                {/* The Connecting Line */}
                <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-500"></div>

                <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  2
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white">Technical Evaluation</h4>
                  <p className="text-gray-400">Detailed review of code quality and technical implementation.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start">
                {/* No line needed for the last step */}
                <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shadow-lg">
                  3
                </div>
                <div className="ml-6">
                  <h4 className="text-xl font-bold text-white">Live Pitching</h4>
                  <p className="text-gray-400">Finalists present their projects live to the panel of judges.</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2. Judging Criteria Summary */}
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Judging Criteria</h3>
              <p className="text-gray-300 mb-6">
                Projects are evaluated based on Impact (70%), and Technical Depth (60%).
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-sm border-b border-gray-800 pb-1">
                  <span>Innovation</span>
                  <span className="text-blue-400 font-bold">30%</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-1">
                  <span>Technical Depth</span>
                  <span className="text-blue-400 font-bold">30%</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-1">
                  <span>UX & UI Design</span>
                  <span className="text-blue-400 font-bold">20%</span>
                </div>
                <div className="flex justify-between text-sm border-b border-gray-800 pb-1">
                  <span>Impact & Scale</span>
                  <span className="text-blue-400 font-bold">20%</span>
                </div>
              </div>
            </div>

            {/* Hyperlink Button */}
            <a
              href="https://drive.google.com/drive/u/5/folders/1DXumVRpNUqZzpxHE-O3arWUeodO4htbV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all shadow-lg shadow-blue-900/20"
            >
              View Full Detailed Rubric
            </a>
          </div>
        </div>
      </section>

      <Sponsors />
      <Organizers />
    </main>
  );
}
