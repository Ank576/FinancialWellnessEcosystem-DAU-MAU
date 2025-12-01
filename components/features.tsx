"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Wallet, Target, TrendingUp, Users, Zap } from "lucide-react"

export default function Features() {
  const personas = [
    {
      name: "Daily Transactor",
      description: "Urban professionals tracking daily spending and building savings habits",
      features: [
        "Multi-account payment aggregation",
        "Real-time transaction categorization",
        "Weekly spending digests",
        "Payment streaks & gamification",
        "CIBIL score integration",
        "Basic budget tracking",
      ],
      icon: Wallet,
      color: "emerald",
      arpu: "USD 5-12/mo",
    },
    {
      name: "Goal-Oriented Saver",
      description: "Mid-career professionals with structured financial goals and timelines",
      features: [
        "Multi-goal setup & tracking",
        "Automated SIP recommendations",
        "Goal progress visualization",
        "Savings streaks & milestones",
        "Social accountability features",
        "Investment recommendations",
      ],
      icon: Target,
      color: "blue",
      arpu: "USD 12-25/mo",
    },
    {
      name: "Credit-Conscious Borrower",
      description: "Individuals seeking credit access and score improvement pathways",
      features: [
        "CIBIL score transparency",
        "Credit improvement roadmap",
        "Loan eligibility checking",
        "Rate comparison tools",
        "Credit product recommendations",
        "Score tracking & alerts",
      ],
      icon: CreditCard,
      color: "purple",
      arpu: "USD 8-18/mo",
    },
    {
      name: "Wealth Builder",
      description: "High-income individuals managing diversified portfolios and assets",
      features: [
        "Portfolio aggregation",
        "Asset allocation tracking",
        "Tax optimization insights",
        "Rebalancing alerts",
        "Financial health scoring",
        "Premium advisory access",
      ],
      icon: TrendingUp,
      color: "amber",
      arpu: "USD 60-250/mo",
    },
  ]

  const colorMap = {
    emerald:
      "from-emerald-500/20 to-emerald-500/0 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/30",
    blue: "from-blue-500/20 to-blue-500/0 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/30",
    purple:
      "from-purple-500/20 to-purple-500/0 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/30",
    amber:
      "from-amber-500/20 to-amber-500/0 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/30",
  }

  const monetizationStreams = [
    {
      title: "Payment Commissions",
      amount: "INR 20-24Cr/mo",
      description: "UPI, bill payments, transfers at scale",
      icon: CreditCard,
    },
    {
      title: "Premium Subscriptions",
      amount: "USD 935K/mo",
      description: "4 tiers: Premium → Wealth Elite",
      icon: Zap,
    },
    {
      title: "Investment Commissions",
      amount: "INR 4.875Cr/mo",
      description: "0.5-1% AUM on SIPs & portfolios",
      icon: TrendingUp,
    },
    {
      title: "Insurance Commissions",
      amount: "INR 18Cr/mo",
      description: "15-25% commission on premiums",
      icon: Users,
    },
    {
      title: "Lending Origination",
      amount: "INR 3.7Cr/mo",
      description: "1-2% on personal/auto/gold loans",
      icon: CreditCard,
    },
    {
      title: "B2B2C Enterprise",
      amount: "USD 307.5K/mo",
      description: "Corporate financial wellness SaaS",
      icon: Wallet,
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800">
            Product Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Built for Four Key Personas</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Each persona receives tailored features designed to drive daily engagement and specific monetization
            pathways.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {personas.map((persona, index) => {
            const Icon = persona.icon
            const colorClass = colorMap[persona.color as keyof typeof colorMap]

            return (
              <Card
                key={index}
                className={`p-8 border bg-gradient-to-br ${colorClass} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{persona.name}</h3>
                    <p className="text-sm text-foreground/60">{persona.description}</p>
                  </div>
                  <Icon className="w-8 h-8 text-current opacity-60 flex-shrink-0 ml-4" />
                </div>

                <div className="mb-6 p-4 bg-background/40 rounded-lg border border-border/50">
                  <p className="text-sm font-semibold text-foreground">
                    ARPU: <span className="text-emerald-600 dark:text-emerald-400">{persona.arpu}</span>
                  </p>
                </div>

                <ul className="space-y-3">
                  {persona.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-current rounded-full mt-2 opacity-60 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* Monetization Streams */}
        <div className="space-y-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-2">8 Revenue Streams</h3>
            <p className="text-foreground/60">
              Diversified monetization across payment commissions, subscriptions, investments, and enterprise services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {monetizationStreams.map((stream, i) => {
              const Icon = stream.icon
              return (
                <Card key={i} className="p-6 hover:shadow-md transition-all duration-300 border-border/50">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-foreground text-sm">{stream.title}</h4>
                    <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">{stream.amount}</p>
                  <p className="text-xs text-foreground/60">{stream.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
