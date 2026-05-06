import { getCourses } from '@/queries/get-courses';

export const loader = async () => {
	const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://example.com';

	// Static routes
	const staticRoutes = [
		{ path: '/', priority: '1.0', changefreq: 'weekly' },
		{ path: '/jadwal-praktikum', priority: '0.8', changefreq: 'weekly' },
		{ path: '/pembagian-kelas', priority: '0.8', changefreq: 'weekly' },
		{ path: '/berita', priority: '0.7', changefreq: 'daily' },
		{ path: '/kontak', priority: '0.6', changefreq: 'monthly' },
		{ path: '/tentang-kami', priority: '0.6', changefreq: 'monthly' },
		{ path: '/docs', priority: '0.5', changefreq: 'weekly' },
	];

	// Dynamic routes from database
	let dynamicRoutes: Array<{
		path: string;
		priority: string;
		changefreq: string;
	}> = [];
	try {
		const courses = await getCourses();
		dynamicRoutes = courses.map((course) => ({
			path: `/pembagian-kelas/${course['Kode Kelas']}`,
			priority: '0.7',
			changefreq: 'weekly',
		}));
	} catch (error) {
		// Fallback to static routes only if API fails
		// biome-ignore lint/suspicious/noConsole: explain
		console.error('Error fetching courses for sitemap:', error);
	}

	// Combine all routes
	const allRoutes = [...staticRoutes, ...dynamicRoutes];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
	.map(
		(route) => `  <url>
    <loc>${siteUrl}${route.path}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
	)
	.join('\n')}
</urlset>`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml' },
	});
};
