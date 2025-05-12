import Link from "next/link"
import { Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-300 hover:text-white">
                About Us
              </Link>
              <Link href="/programs" className="text-gray-300 hover:text-white">
                Programs
              </Link>
              <Link href="/donate" className="text-gray-300 hover:text-white">
                Donate
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Our Programs</h3>
            <ul className="space-y-2">
              <li className="text-center md:text-left">
                <Link href="/programs#housing" className="text-gray-300 hover:text-white">
                  Temporary Supportive Housing
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/programs#workforce" className="text-gray-300 hover:text-white">
                  Workforce Development & Job Training
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/programs#mental-health" className="text-gray-300 hover:text-white">
                  Mental Health & Trauma Counseling
                </Link>
              </li>
              <li className="text-center md:text-left">
                <Link href="/programs#education" className="text-gray-300 hover:text-white">
                  Educational Advancement
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-sky-400" />
                <div className="text-gray-300">Southeast Florida (Dade County)</div>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 mr-2 text-sky-400" />
                <a href="mailto:Waine@52weeksdev.org" className="text-gray-300 hover:text-white">
                  Waine@52weeksdev.org
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 mr-2 text-sky-400" />
                <a href="tel:+19546965494" className="text-gray-300 hover:text-white">
                  (954) 696-5494
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">52 Weeks Development</h3>
            <p className="text-gray-300 mb-4 text-center md:text-left">
              Redeveloping individuals and communities through second chance opportunities.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="https://twitter.com/52weeksdev" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter (X)</span>
              </Link>
              <Link href="https://www.instagram.com/52weeksdev" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
