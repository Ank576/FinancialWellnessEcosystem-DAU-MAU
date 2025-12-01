"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export default function Monetization() {
  const revenueStreams = [
    {
      name: "Payment Commissions",
      month6: "INR 3Cr",
      month12: "INR 15Cr",
      month18: "INR 22Cr",
      description: "UPI, bill payments, transfers",
      color: "from-emerald-500 to-green-500",
    },
    {
      name: "Premium Subscriptions",
      month6: "USD 90K",
      month12: "USD 570K",
      month18: "USD 935K",
      description: "4 tiers (Premium → Wealth Elite)",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "SIP/Investment Commissions",
      month6: "INR 31.25L",
      month12: "INR 1.5Cr",
      month18: "INR 4.875Cr",
      description: "0.5-1% AUM on portfolios",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Insurance Commissions",
      month6: "INR 1.5Cr",
      month12: "INR 9Cr",
      month18: "INR 18Cr",
      description: "15-25% on premiums",
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Lending Origination",
      month6: "INR 36L",
      month12: "INR 1.75Cr",
      month18: "INR 3.7Cr",
      description: "1-2% on personal/auto loans",
      color: "from-rose-500 to-red-500",
    },
    {
      name: "B2B2C Enterprise",
      month6: "USD 25K",
      month12: "USD 125K",
      month18: "USD 307.5K",
      description: "Corporate wellness SaaS",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  const metrics = [
    { label: "Gross Margin", m6: "56%", m12: "57%", m18: "58%", target: "55-60%" },
    { label: "CAC (Cost)", m6: "USD 2", m12: "USD 2.5", m18: "USD 2.2", target: "USD 1.5-3" },
    { label: "LTV (Value)", m6: "USD 55", m12: "USD 80", m18: "USD 110", target: "USD 50-100" },
    { label: "LTV:CAC Ratio", m6: "27:1", m12: "32:1", m18: "50:1", target: "15-30:1" },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800">
            Revenue Model
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">8 Revenue Streams, 6.3x Growth</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Diversified monetization across payment commissions, subscriptions, investments, insurance, and enterprise
            services.
          </p>
        </div>

        {/* Revenue Streams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {revenueStreams.map((stream, i) => (
            <Card
              key={i}
              className="p-6 hover:shadow-lg transition-all border-border/50 overflow-hidden relative group"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stream.color} opacity-0 group-hover:opacity-5 transition-opacity`}
              />

              <div className="relative z-10">
                <h4 className="font-semibold text-foreground mb-1">{stream.name}</h4>
                <p className="text-xs text-foreground/60 mb-4">{stream.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-xs text-foreground/50">Month 6</span>
                    <span className="font-semibold text-sm text-foreground">{stream.month6}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span className="text-xs text-foreground/50">Month 12</span>
                    <span className="font-semibold text-sm text-foreground">{stream.month12}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-xs text-foreground/50">Month 18</span>
                    <span
                      className={`font-bold text-sm bg-gradient-to-r ${stream.color} bg-clip-text text-transparent`}
                    >
                      {stream.month18}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Total MRR Growth */}
        <div className="mb-12 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/20 dark:to-blue-950/20 rounded-xl p-8 border border-emerald-200/50 dark:border-emerald-900/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-sm text-foreground/60 mb-2">Total Monthly Recurring Revenue</p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-foreground/50 mb-1">Month 6</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">USD 1.1M</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                  <p className="text-xs text-foreground/50">+464%</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-1">Month 18</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">USD 7M</p>
                </div>
              </div>
            </div>

            {/* Annual Revenue */}
            <div className="flex-1 text-center lg:text-right">
              <p className="text-sm text-foreground/60 mb-4">Annualized Revenue Trajectory</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-foreground/50 mb-1">Year 1 (Month 6)</p>
                  <p className="text-2xl font-bold">USD 13.2M</p>
                </div>
                <div>
                  <p className="text-xs text-foreground/50 mb-1">Year 2.5 (Month 18)</p>
                  <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">USD 84M</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unit Economics */}
        <div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">Unit Economics & Health Metrics</h3>
            <p className="text-foreground/60">
              Demonstrating strong profitability fundamentals across customer lifetime value and capital efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, i) => (
              <Card key={i} className="p-6 border-border/50 hover:shadow-md transition-all">
                <p className="text-sm font-semibold text-foreground/70 mb-4">{metric.label}</p>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">M6</p>
                    <p className="text-lg font-bold text-foreground">{metric.m6}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">M12</p>
                    <p className="text-lg font-bold text-foreground">{metric.m12}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 mb-1">M18</p>
                    <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{metric.m18}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-foreground/50">Target Range</p>
                  <p className="text-sm font-semibold text-foreground/70">{metric.target}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Path to Profitability */}
        <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8 border border-blue-200/50 dark:border-blue-900/30">
          <h3 className="text-xl font-bold text-foreground mb-6">Path to Profitability</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { milestone: "Break-even", timeline: "Month 16-18", ebitda: "5-8% margin", revenue: "USD 6-7M" },
              { milestone: "Sustainable", timeline: "Month 22-24", ebitda: "15-20% margin", revenue: "USD 8-10M" },
              { milestone: "Scale", timeline: "Month 30-36", ebitda: "25-30% margin", revenue: "USD 12-15M" },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <p className="font-semibold text-foreground">{item.milestone}</p>
                <div className="space-y-1">
                  <p className="text-sm text-foreground/70">
                    <span className="text-foreground/50">Timeline:</span> {item.timeline}
                  </p>
                  <p className="text-sm text-foreground/70">
                    <span className="text-foreground/50">EBITDA:</span> {item.ebitda}
                  </p>
                  <p className="text-sm text-foreground/70">
                    <span className="text-foreground/50">Revenue:</span> {item.revenue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
