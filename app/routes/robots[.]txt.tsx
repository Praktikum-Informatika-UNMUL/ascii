export const loader = () => {
	const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://example.com';
	const robotText = `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml`;
	return new Response(robotText, {
		headers: { 'Content-Type': 'text/plain' },
	});
};
