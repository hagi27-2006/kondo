export default defineEventHandler((event) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<script id="nimlmejbmnecnaghgmbahmbaddhjbecg"/>
<script/>
<script/>
<!--  created with Free Online Sitemap Generator www.xml-sitemaps.com  -->
<url>
<loc>https://kondo-printing.vercel.app/</loc>
<lastmod>2025-03-23T10:31:05+00:00</lastmod>
<priority>1.00</priority>
</url>
<url>
<loc>https://kondo-printing.vercel.app/company-info</loc>
<lastmod>2025-03-23T10:31:05+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://kondo-printing.vercel.app/visit</loc>
<lastmod>2025-03-23T10:31:05+00:00</lastmod>
<priority>0.80</priority>
</url>
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  setHeader(event, 'Cache-Control', 'max-age=3600')
  return sitemap
}) 