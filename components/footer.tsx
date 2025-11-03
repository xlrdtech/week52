import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8 text-center">
          {/* Logo and Description */}
          <div>
            <div className="flex flex-col items-center gap-3 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1390.JPG-r9oNMP7wdPFYTmV0JqgGWfVmP5FESW.jpeg"
                alt="52 Weeks Development"
                width={50}
                height={50}
                className="rounded"
              />
              <span className="font-bold text-lg">52 Weeks Development</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Redeveloping individuals and communities through second chance opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-slate-300">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/about-us" className="hover:text-cyan-400 transition-colors ml-4">About Us</Link>
              <Link href="/programs" className="hover:text-cyan-400 transition-colors ml-4">Programs</Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors ml-4">Contact</Link>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-slate-300 mb-4">
              Serving Broward and Dade Counties
              <a href="mailto:waine@52weeks.dev" className="hover:text-cyan-400 transition-colors ml-4">waine@52weeks.dev</a>
              <a href="https://www.52weeks.dev" target="_blank" className="hover:text-cyan-400 transition-colors ml-4">www.52weeks.dev</a>
              <a href="tel:9546965494" className="hover:text-cyan-400 transition-colors ml-4">(954) 696-5494</a>
            </p>
            <p className="text-slate-300 mb-6">
              Follow us
              <a href="https://instagram.com/52weeksdev" target="_blank" className="hover:text-cyan-400 transition-colors ml-4">Instagram @52weeksdev</a>
              <a href="https://x.com/52weeksdev" target="_blank" className="hover:text-cyan-400 transition-colors ml-4">X @52weeksdev</a>
            </p>
            <Link
              href="https://square.link/u/OQowKsqR"
              target="_blank"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded transition-colors"
            >
              Donate Now
            </Link>
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
