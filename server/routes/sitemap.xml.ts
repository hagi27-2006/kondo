export default defineEventHandler((event) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://kondo-printing.vercel.app/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://kondo-printing.vercel.app/company-info</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://kondo-printing.vercel.app/visit</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>
</urlset>`

  return new Response(sitemap, {
    headers: {
      'content-type': 'application/xml',
      'cache-control': 'max-age=3600'
    }
  })
}) 