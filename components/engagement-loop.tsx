"use client"

import { Card } from "@/components/ui/card"
import { CreditCard, Target, TrendingUp, Award, BarChart3 } from "lucide-react"

export default function EngagementLoop() {
  const steps = [
    {
      icon: CreditCard,
      label: "Track",
      title: "Payments & Bills",
      description: "Auto-sync transactions, categorize spending, daily reflexive habit (2-3 min/day)",
      color: "emerald",
    },
    {
      icon: BarChart3,
      label: "Optimize",
      title: "Spending Insights",
      description: "Behavioral analytics showing patterns, category breakdowns, anomaly detection",
      color: "blue",
    },
    {
      icon: Target,
      label: "Goal",
      title: "Financial Targets",
      description: "Gamified goal-setting, streaks, milestones, community challenges",
      color: "purple",
    },
    {
      icon: TrendingUp,
      label: "Invest",
      title: "Portfolio & Assets",
      description: "Contextual investment nudges, SIP recommendations, surplus monetization",
      color: "amber",
    },
    {
      icon: Award,
      label: "Achieve",
      title: "Rewards & Milestones",
      description: "Returns visualization, social sharing, milestone celebrations",
      color: "rose",
    },
    {
      icon: CreditCard,
      label: "Credit",
      title: "CIBIL Intelligence",
      description: "Score transparency, improvement tracking, loan eligibility signaling",
      color: "indigo",
    },
  ]

  const colorClasses = {
    emerald: "from-emerald-500/20 to-emerald-500/0 text-emerald-600 dark:text-emerald-400",
    blue: "from-blue-500/20 to-blue-500/0 text-blue-600 dark:text-blue-400",
    purple: "from-purple-500/20 to-purple-500/0 text-purple-600 dark:text-purple-400",
    amber: "from-amber-500/20 to-amber-500/0 text-amber-600 dark:text-amber-400",
    rose: "from-rose-500/20 to-rose-500/0 text-rose-600 dark:text-rose-400",
    indigo: "from-indigo-500/20 to-indigo-500/0 text-indigo-600 dark:text-indigo-400",
  }

  return (
    <section id="product" className="py-20 px-4 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-950/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">The Daily Financial Engagement Loop</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Transform casual transaction tracking into habit-forming wealth-building behavior through a
            scientifically-designed engagement loop.
          </p>
        </div>

        {/* Loop Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            const colorKey = step.color as keyof typeof colorClasses

            return (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 -right-3 w-6 h-0.5 bg-gradient-to-r from-foreground/20 to-transparent hidden lg:block" />
                )}

                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${colorClasses[colorKey]} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <p className="text-sm font-semibold text-foreground/60 mb-2">{step.label}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Loop Closure */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-emerald-200/50 dark:border-emerald-900/30 text-center">
          <p className="text-lg font-semibold text-foreground mb-2">The Loop Returns to TRACK</p>
          <p className="text-foreground/70">
            Deepened financial engagement drives daily habit formation, higher DAU, and multiple monetization
            touchpoints.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { metric: "D1 Retention", value: "50%+", desc: "Payment tracking reflexivity" },
            { metric: "DAU Growth", value: "15-25% MoM", desc: "Habit-driven engagement" },
            { metric: "Cross-Sell Success", value: "40%+", desc: "Multiple monetization hooks" },
          ].map((item, i) => (
            <Card key={i} className="p-6 text-center border-border/50">
              <p className="text-sm text-foreground/60 mb-2">{item.metric}</p>
              <p className="text-2xl font-bold text-foreground mb-1">{item.value}</p>
              <p className="text-xs text-foreground/50">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
