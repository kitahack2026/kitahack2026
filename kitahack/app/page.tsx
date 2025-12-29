import HeroSection from './components/Hero/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <HeroSection />
      {/* About section will be added here later */}
      <div id="about" className="min-h-screen"></div>
    </main>
  );
}

