import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Redirect legacy and non-canonical domains to the new canonical domain
export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.toLowerCase() || ""
  const url = req.nextUrl

  // Define canonical domain
  const canonical = "www.52weeks.dev"

  // Redirect from legacy domain(s)
  const legacyHosts = new Set(["52weeks-dev.org", "www.52weeks-dev.org"])
  if (legacyHosts.has(host)) {
    const redirectURL = new URL(url.pathname + url.search, `https://${canonical}`)
    return NextResponse.redirect(redirectURL, 308)
  }

  // Redirect apex to www for consistency
  if (host === "52weeks.dev") {
    const redirectURL = new URL(url.pathname + url.search, `https://${canonical}`)
    return NextResponse.redirect(redirectURL, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/:path*",
}