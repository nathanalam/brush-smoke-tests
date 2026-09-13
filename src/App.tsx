import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Comparison } from "@/components/landing/Comparison";
import { Benefits } from "@/components/landing/Benefits";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
