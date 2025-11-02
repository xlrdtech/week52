import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about 52 Weeks Development’s mission, vision, and the team empowering second chance opportunities.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us",
    url: "https://www.52weeks.dev/about-us",
    description:
      "Learn about 52 Weeks Development’s mission, vision, and the team empowering second chance opportunities.",
    images: [{ url: "/placeholder.jpg", width: 1200, height: 630, alt: "52 Weeks Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Learn about 52 Weeks Development’s mission, vision, and the team empowering second chance opportunities.",
    images: ["/placeholder.jpg"],
  },
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}