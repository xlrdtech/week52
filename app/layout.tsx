import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "52 Weeks Development - Second Chance Opportunities",
    template: "%s | 52 Weeks Development",
  },
  description:
    "Redeveloping individuals and communities through second chance opportunities. Providing housing, job training, and support for justice-involved individuals.",
  generator: "v0.app",
  // Canonical base URL for metadata and generated links
  metadataBase: new URL("https://www.52weeks.dev"),
  applicationName: "52 Weeks Development",
  authors: [{ name: "52 Weeks Development" }],
  icons: {
    icon: [
      { url: "/placeholder-logo.png" },
      { url: "/placeholder-logo.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/placeholder-logo.png" }],
    apple: [{ url: "/placeholder-logo.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.52weeks.dev",
    title: "52 Weeks Development - Second Chance Opportunities",
    description:
      "Redeveloping individuals and communities through second chance opportunities. Providing housing, job training, and support for justice-involved individuals.",
    siteName: "52 Weeks Development",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1391.JPG-Afkt1HNUb0Ldf2QdjE16rHZIuxXb4O.jpeg",
        width: 1200,
        height: 630,
        alt: "52 Weeks Development Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "52 Weeks Development - Second Chance Opportunities",
    description:
      "Redeveloping individuals and communities through second chance opportunities. Providing housing, job training, and support for justice-involved individuals.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1391.JPG-Afkt1HNUb0Ldf2QdjE16rHZIuxXb4O.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Center text on all screen sizes */}
      <body className={`${inter.className} font-sans antialiased text-center`}>
        {/* Domain notice banner is already handled in the client-side Header component */}
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
