import {
	index,
	layout,
	route,
	type RouteConfig,
} from '@react-router/dev/routes';

export default [
	layout('./layout/main-layout.tsx', [
		index('routes/home.tsx'),
		route('/tentang-kami', 'routes/about.tsx'),
		route('/berita', 'routes/news.tsx'),
		route('/kontak', 'routes/contact.tsx'),
		route('/pembagian-kelas', 'routes/class-division.tsx'),
	]),

	route('docs/*', 'docs/page.tsx'),
	route('api/search', 'docs/search.ts'),
] satisfies RouteConfig;
