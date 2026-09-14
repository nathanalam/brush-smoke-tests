import { Control } from "@/components/landing/Control"
import { DownloadCTA } from "@/components/landing/DownloadCTA"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"
import { Hero } from "@/components/landing/Hero"
import { Integrations } from "@/components/landing/Integrations"
import { Navbar } from "@/components/landing/Navbar"
import { Pricing } from "@/components/landing/Pricing"
import { SocialProof } from "@/components/landing/SocialProof"
import { Testimonials } from "@/components/landing/Testimonials"
import { ViewerSpotlight } from "@/components/landing/ViewerSpotlight"
import { Workflow } from "@/components/landing/Workflow"
import { Confirmation } from "@/components/signup/Confirmation"
import { SignupProvider } from "@/components/signup/SignupFlow"
import { usePath } from "@/lib/nav"

function Landing() {
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
        <SocialProof />
        <Workflow />
        <ViewerSpotlight />
        <Control />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const path = usePath()

  return (
    <SignupProvider>
      {path === "/confirmation" ? <Confirmation /> : <Landing />}
    </SignupProvider>
  )
}
