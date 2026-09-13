import { DownloadCTA } from "@/components/landing/DownloadCTA"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"
import { Hero } from "@/components/landing/Hero"
import { Integrations } from "@/components/landing/Integrations"
import { Navbar } from "@/components/landing/Navbar"
import { Pricing } from "@/components/landing/Pricing"
import { ViewerSpotlight } from "@/components/landing/ViewerSpotlight"
import { Workflow } from "@/components/landing/Workflow"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#090A0F]"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <Integrations />
        <Workflow />
        <ViewerSpotlight />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
