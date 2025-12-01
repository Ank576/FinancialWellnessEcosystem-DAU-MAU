"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Resources", href: "#resources" },
    { label: "Company", href: "#company" },
  ]

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FW</span>
            </div>
            <span className="text-lg font-semibold text-foreground hidden sm:inline">FinWell</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:opacity-90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
