"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight, Mail, Smartphone } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  const benefits = [
    "Exclusive early access to platform beta",
    "Priority onboarding & enterprise support",
    "Custom financial integration pathway",
    "Direct access to founding team",
    "Lifetime premium tier benefits",
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Card */}
        <div className="bg-gradient-to-br from-emerald-600 to-blue-600 rounded-2xl p-0 overflow-hidden shadow-2xl mb-16">
          <div className="relative p-12 md:p-16 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 backdrop-blur-sm">
                Limited Early Access
              </Badge>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Join the Financial Wellness Revolution
              </h2>

              <p className="text-lg sm:text-xl text-white/90 mb-8 text-balance leading-relaxed">
                Be among the first to experience the platform transforming 50K into 1M+ daily active users. Get
                exclusive early access, founding member benefits, and shape the future of financial wellness.
              </p>

              {/* Benefits List */}
              <div className="space-y-3 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Email Signup */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:bg-white/30 focus:border-white/50"
                    required
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-white/90 font-semibold px-8 whitespace-nowrap"
                  onClick={handleSubmit}
                >
                  {submitted ? "Joining..." : "Get Early Access"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              {submitted && (
                <p className="text-white/80 text-sm mt-4">
                  Check your email for next steps. We're excited to have you on board!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Why Join Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Smartphone,
              title: "Shape the Product",
              description:
                "Your feedback directly influences product development and feature prioritization as we scale.",
            },
            {
              icon: Mail,
              title: "Founding Member Perks",
              description: "Lifetime premium access, custom integrations, and VIP support for early adopters.",
            },
            {
              icon: ArrowRight,
              title: "Investment Opportunity",
              description: "Selected partners will have access to Series A investment opportunities starting Q3 2025.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Card key={i} className="p-8 text-center hover:shadow-lg transition-all border-border/50">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-20 bg-background rounded-xl border border-border p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">Launch Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                phase: "Phase 1",
                date: "Q1 2025",
                status: "In Progress",
                items: ["Closed Alpha", "Payment Tracking", "CIBIL Integration"],
              },
              {
                phase: "Phase 2",
                date: "Q2 2025",
                status: "Upcoming",
                items: ["Open Beta", "100K DAU", "Premium Launch"],
              },
              {
                phase: "Phase 3",
                date: "Q3 2025",
                status: "Planned",
                items: ["Series A", "500K DAU", "Investment Products"],
              },
              {
                phase: "Phase 4",
                date: "Q4 2025",
                status: "Planned",
                items: ["Public Launch", "1M DAU", "Enterprise SaaS"],
              },
            ].map((timeline, i) => (
              <Card key={i} className="p-6 border-border/50">
                <Badge variant="outline" className="mb-3">
                  {timeline.status}
                </Badge>
                <h4 className="font-bold text-foreground mb-1">{timeline.phase}</h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-4">{timeline.date}</p>
                <ul className="space-y-2">
                  {timeline.items.map((item, j) => (
                    <li key={j} className="text-xs text-foreground/60 flex items-start gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
