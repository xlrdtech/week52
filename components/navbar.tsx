import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-slate-50 border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-12 w-12 relative">
            <Image src="/52_Weeks_Logo.png" alt="52 Weeks Development Logo" fill className="object-contain" />
          </div>
          <span className="text-xl font-bold">52 Weeks Development</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:underline">
            HOME
          </Link>
          <Link href="/about-us" className="text-sm font-medium hover:underline">
            ABOUT US
          </Link>
          <Link href="/programs" className="text-sm font-medium hover:underline">
            PROGRAMS
          </Link>
          <a
            href="https://square.link/u/OQowKsqR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline"
          >
            DONATE
          </a>
          <Link href="/contact" className="text-sm font-medium hover:underline">
            CONTACT
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-sky-600 hover:bg-sky-700">Get In Touch</Button>
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
