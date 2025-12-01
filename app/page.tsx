"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import EngagementLoop from "@/components/engagement-loop"
import Features from "@/components/features"
import Roadmap from "@/components/roadmap"
import Monetization from "@/components/monetization"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50 dark:from-background dark:to-slate-950">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <EngagementLoop />
      <Features />
      <Roadmap />
      <Monetization />
      <CTA />
      <Footer />
    </main>
  )
}
