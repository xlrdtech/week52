"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/placeholder-logo.png"
              alt="52 Weeks Development"
              width={50}
              height={50}
              className="rounded"
            />
            <span className="font-bold text-lg hidden sm:inline">52 Weeks Development</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              HOME
            </Link>
            <Link href="/about-us" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              ABOUT US
            </Link>
            <Link href="/programs" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              PROGRAMS
            </Link>
            <Link
              href="https://square.link/u/OQowKsqR"
              target="_blank"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              DONATE
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-cyan-600 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <Button asChild className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-700">
            <Link href="/contact">Get In Touch</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t text-center">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-cyan-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                href="/about-us"
                className="text-sm font-medium hover:text-cyan-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </Link>
              <Link
                href="/programs"
                className="text-sm font-medium hover:text-cyan-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROGRAMS
              </Link>
              <Link
                href="https://square.link/u/OQowKsqR"
                target="_blank"
                className="text-sm font-medium hover:text-cyan-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                DONATE
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-cyan-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 mt-2">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get In Touch
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
