"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <nav className="flex flex-col items-center gap-6 p-4">
            <Link href="/" className="text-xl font-medium hover:text-sky-600" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="/about-us" className="text-xl font-medium hover:text-sky-600" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <Link href="/programs" className="text-xl font-medium hover:text-sky-600" onClick={toggleMenu}>
              PROGRAMS
            </Link>
            <Link href="/donate" className="text-xl font-medium hover:text-sky-600" onClick={toggleMenu}>
              DONATE
            </Link>
            <Link href="/contact" className="text-xl font-medium hover:text-sky-600" onClick={toggleMenu}>
              CONTACT
            </Link>
            <Link href="/contact">
              <Button className="mt-4 bg-sky-600 hover:bg-sky-700">Get In Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
