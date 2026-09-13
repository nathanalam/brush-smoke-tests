import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ComparisonStrip } from "@/components/landing/ComparisonStrip";
import { FeaturePillars } from "@/components/landing/FeaturePillars";
import { FeatureSpotlight } from "@/components/landing/FeatureSpotlight";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <ComparisonStrip />
        <FeaturePillars />
        <FeatureSpotlight />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
