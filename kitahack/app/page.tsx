import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <HeroSection />
      <AboutSection />
    </main>
  );
}

