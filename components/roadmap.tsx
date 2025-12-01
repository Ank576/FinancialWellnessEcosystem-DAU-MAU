"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation",
      duration: "Q1-Q2 (6 months)",
      dau: "50K → 100K",
      color: "emerald",
      status: "current",
      milestones: [
        "Multi-account payment aggregation",
        "Real-time transaction sync & categorization",
        "CIBIL score integration",
        "Weekly spending digests",
        "Streak gamification",
        "Basic budget creation",
        "Credit product recommendations",
        "Savings goal foundation",
      ],
      revenue: "USD 200-400K MRR",
    },
    {
      phase: "Phase 2",
      title: "Engagement & Gamification",
      duration: "Q3-Q4 (6 months)",
      dau: "250K → 500K",
      color: "blue",
      status: "upcoming",
      milestones: [
        "Advanced budget & goal management",
        "Financial streaks & challenges",
        "SIP investment integration",
        "CIBIL gamification deep-dive",
        "Insurance cross-sell foundation",
        "Intelligent portfolio dashboard",
        "Financial health score",
        "Loan & credit recommendations",
      ],
      revenue: "USD 3-4M MRR",
    },
    {
      phase: "Phase 3",
      title: "Scaling & Profitability",
      duration: "Q5-Q6 (6 months)",
      dau: "750K → 1M+",
      color: "purple",
      status: "future",
      milestones: [
        "Robo-advisor & managed portfolios",
        "Tax optimization & planning",
        "Wealth aggregation & management",
        "Advanced CIBIL monitoring",
        "Investment marketplace",
        "Multi-product offering",
        "Retirement planning suite",
        "B2B2C enterprise expansion",
      ],
      revenue: "USD 6-8.5M MRR",
    },
  ]

  const colorClasses = {
    emerald:
      "from-emerald-50 to-emerald-50/50 dark:from-emerald-950/20 dark:to-emerald-950/5 border-emerald-200/50 dark:border-emerald-900/30",
    blue: "from-blue-50 to-blue-50/50 dark:from-blue-950/20 dark:to-blue-950/5 border-blue-200/50 dark:border-blue-900/30",
    purple:
      "from-purple-50 to-purple-50/50 dark:from-purple-950/20 dark:to-purple-950/5 border-purple-200/50 dark:border-purple-900/30",
  }

  const badgeColors = {
    emerald:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    purple:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  }

  return (
    <section
      id="roadmap"
      className="py-20 px-4 bg-gradient-to-b from-background via-slate-50/50 to-background dark:via-slate-950/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800">
            18-Month Vision
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Build, Scale, Dominate</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A structured 18-month roadmap transforming 50K DAU into 1M+ daily active users across three strategic
            phases.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-6 mb-12">
          {phases.map((phase, index) => (
            <Card
              key={index}
              className={`p-8 border bg-gradient-to-br ${colorClasses[phase.color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300`}
            >
              {/* Phase Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-6 border-b border-border/20">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={badgeColors[phase.color as keyof typeof badgeColors]}>{phase.phase}</Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {phase.duration}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-sm text-foreground/60">
                    DAU Growth: <span className="font-semibold text-foreground">{phase.dau}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-foreground/60 mb-1">Revenue Target</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    {phase.revenue}
                  </p>
                </div>
              </div>

              {/* Milestones */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-4">Key Features & Milestones</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phase.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 opacity-60" />
                      <span className="text-sm text-foreground/80">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Growth Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Starting DAU", value: "50K", month: "Month 3" },
            { label: "Month 12 DAU", value: "500K", month: "Engagement Peak" },
            { label: "Final DAU", value: "1M+", month: "Month 18" },
            { label: "Revenue Growth", value: "1.1M → 7M MRR", month: "6.3x in 18 months" },
          ].map((metric, i) => (
            <Card key={i} className="p-6 border-border/50 hover:shadow-md transition-all">
              <p className="text-xs text-foreground/60 mb-2">{metric.label}</p>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{metric.value}</p>
              <p className="text-xs text-foreground/50">{metric.month}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
