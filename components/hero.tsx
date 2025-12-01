"use client"

import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-blue-50/30 to-transparent dark:from-emerald-950/20 dark:via-blue-950/10 dark:to-transparent" />

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-emerald-300/20 to-blue-300/20 rounded-full blur-3xl dark:from-emerald-500/10 dark:to-blue-500/10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-300/20 to-purple-300/20 rounded-full blur-3xl dark:from-blue-500/10 dark:to-purple-500/10" />

      <div className="relative max-w-5xl mx-auto text-center space-y-8">
        {/* Announcement Badge */}
        <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 px-4 py-2 text-sm font-medium">
          <TrendingUp className="w-4 h-4 mr-2 inline" />
          50K → 1M+ DAU in 18 months
        </Badge>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Transform Daily Spending Into
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Wealth Building Habits
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto text-balance leading-relaxed">
            The complete financial wellness ecosystem combining payment tracking, credit intelligence, goal
            gamification, and investment cross-sell to drive sustainable DAU growth and high-frequency monetization.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:opacity-90 px-8">
            Request Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View Roadmap
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
          {[
            { icon: Target, label: "Financial Goals", value: "Gamified" },
            { icon: Zap, label: "Daily Engagement", value: "50%+ D1" },
            { icon: TrendingUp, label: "Revenue Growth", value: "15-25% MoM" },
          ].map((metric, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="text-sm text-foreground/60">{metric.label}</p>
              <p className="font-semibold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
