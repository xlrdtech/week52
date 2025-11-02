export const runtime = "edge"

export async function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Sitemap: https://www.52weeks.dev/sitemap.xml",
    "",
  ].join("\n")

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  })
}