"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" onClick={() => setOpen(false)} className="text-lg font-medium py-2 hover:text-sky-600">
            Home
          </Link>
          <Link href="/about-us" onClick={() => setOpen(false)} className="text-lg font-medium py-2 hover:text-sky-600">
            About Us
          </Link>
          <Link href="/programs" onClick={() => setOpen(false)} className="text-lg font-medium py-2 hover:text-sky-600">
            Programs
          </Link>
          <a
            href="https://square.link/u/OQowKsqR"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-2 hover:text-sky-600"
          >
            Donate
          </a>
          <Link href="/contact" onClick={() => setOpen(false)} className="text-lg font-medium py-2 hover:text-sky-600">
            Contact
          </Link>
          <div className="mt-4">
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-sky-600 hover:bg-sky-700">Get In Touch</Button>
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
