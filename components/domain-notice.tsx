"use client"

import { useEffect, useState } from "react"

type Props = {
  canonicalHost?: string
  legacyHosts?: string[]
}

export function DomainNotice({
  canonicalHost = "www.52weeks.dev",
  legacyHosts = ["52weeks-dev.org", "www.52weeks-dev.org", "52weeks.dev"],
}: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname.toLowerCase()
      if (legacyHosts.map((h) => h.toLowerCase()).includes(host)) {
        setVisible(true)
      }
    }
  }, [legacyHosts])

  if (!visible) return null

  return (
    <div className="bg-yellow-50 border-b border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 py-2 text-center text-sm text-yellow-800">
        We’ve moved to
        {" "}
        <a
          href={`https://${canonicalHost}`}
          className="font-semibold underline hover:no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {canonicalHost}
        </a>
        . Please update your bookmarks. This site will redirect soon.
      </div>
    </div>
  )
}