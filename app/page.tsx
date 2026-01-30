/**
 * In Next.js, app/page.tsx is the home page — when someone visits "/" they get this.
 * We import each section as a component and render them in order; the page is just
 * a stack of sections. SideNav stays fixed on the left and scrolls to each section by id.
 */
import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { VideoSection } from "@/components/video-section"
import { PrinciplesSection } from "@/components/principles-section"
import { RevenueSection } from "@/components/revenue-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      {/* Sections in order: Hero → Problems → Solution → Video → MVP → Revenue → Credits. */}
      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <VideoSection />
        <PrinciplesSection />
        <RevenueSection />
        <ColophonSection />
      </div>
    </main>
  )
}
