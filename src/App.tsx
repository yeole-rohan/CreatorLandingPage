import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/ValueProposition";
import { AILandingPages } from "./components/AILandingPages";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { Showcase } from "./components/Showcase";
import { HowItWorks } from "./components/HowItWorks";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ValueProposition />
      <AILandingPages />
      <Features />
      <Pricing />
      <Showcase />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
