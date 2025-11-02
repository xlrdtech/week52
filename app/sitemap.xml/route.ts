export const runtime = "edge"

const BASE_URL = "https://www.52weeks.dev"
const routes = ["/", "/about-us", "/programs", "/contact"]

export async function GET() {
  const lastmod = new Date().toISOString()
  const urls = routes
    .map((path) => {
      const priority = path === "/" ? "1.0" : "0.7"
      return `\n  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  })
}