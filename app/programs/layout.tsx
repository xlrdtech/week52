import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore 52 Weeks Development programs, from workforce training to community redevelopment and educational initiatives.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "Programs",
    url: "https://www.52weeks.dev/programs",
    description:
      "Explore 52 Weeks Development programs, from workforce training to community redevelopment and educational initiatives.",
    images: [{ url: "/placeholder.jpg", width: 1200, height: 630, alt: "52 Weeks Development" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs",
    description:
      "Explore 52 Weeks Development programs, from workforce training to community redevelopment and educational initiatives.",
    images: ["/placeholder.jpg"],
  },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}