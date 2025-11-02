import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with 52 Weeks Development for partnerships, programs, and second chance opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact",
    url: "https://www.52weeks.dev/contact",
    description:
      "Get in touch with 52 Weeks Development for partnerships, programs, and second chance opportunities.",
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "52 Weeks Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Get in touch with 52 Weeks Development for partnerships, programs, and second chance opportunities.",
    images: ["/placeholder.jpg"],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}