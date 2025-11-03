import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 text-center">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1390.JPG-r9oNMP7wdPFYTmV0JqgGWfVmP5FESW.jpeg"
                alt="52 Weeks Development"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="font-bold text-lg">52 Weeks Development</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Broward and Dade Counties</li>
              <li>
                <a href="mailto:waine@52weeks.dev" className="hover:text-cyan-400 transition-colors">
                  waine@52weeks.dev
                </a>
              </li>
              <li>
                <a href="https://www.52weeks.dev" target="_blank" className="hover:text-cyan-400 transition-colors">
                  www.52weeks.dev
                </a>
              </li>
              <li>
                <a href="tel:9546965494" className="hover:text-cyan-400 transition-colors">
                  (954) 696-5494
                </a>
              </li>
              <li className="pt-4">
                <a href="https://instagram.com/52weeksdev" target="_blank" className="hover:text-cyan-400 transition-colors">
                  Instagram: @52weeksdev
                </a>
              </li>
              <li>
                <a href="https://x.com/52weeksdev" target="_blank" className="hover:text-cyan-400 transition-colors">
                  X (Twitter): @52weeksdev
                </a>
              </li>
              <li className="pt-4">
                <Link
                  href="https://square.link/u/OQowKsqR"
                  target="_blank"
                  className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded transition-colors"
                >
                  Donate Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700 mt-12 pt-8 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} 52 Weeks Development. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
