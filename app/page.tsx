// CHANGE: We added { } to import the specific Named Export
import { TechnologiesSection } from "./components/TechnologiesSection";

export default function Home() {
  return (
    <main>
      <TechnologiesSection />
    </main>
  );
}