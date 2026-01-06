import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import Timeline from './components/Timeline';
import TechnologiesSection from './components/TechnologiesSection';
import JudgingSection from './components/Judging/JudgingSection';
import FAQSection from './components/FAQ/FAQSection';
import Sponsors from './components/Partners/Sponsors';
import Organizers from './components/Partners/Organizers';
import Footer from './components/Footer/Footer';
import RegisterFloatingButton from './components/RegisterFloatingButton';

/**
 * Home Page - KitaHack 2026 Landing Page
 *
 * This is the main landing page for the KitaHack 2026 hackathon.
 * All sections are server components by default for optimal performance.
 */
export default function Home() {
    return (
        <main className='min-h-screen text-white bg-kitahack-bg-dark'>
            <HeroSection />
            <AboutSection />
            <Timeline />
            <section id='google-tech' className='py-16 md:py-24'>
                <TechnologiesSection />
            </section>
            <JudgingSection />
            <FAQSection />
            <Sponsors />
            <Organizers />
            <Footer />
            <RegisterFloatingButton/>
        </main>
    );
}
