import type { ReactNode } from 'react';

export type SEOOptions = {
	title: string;
	description?: string;
	pathname?: string;
	image?: string;
	siteUrl?: string;
};

export function BuildSeoTags({
	title,
	description = '',
	pathname = '/',
	image = '/hero-ascii.png',
	siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://example.com',
}: SEOOptions): ReactNode {
	const url = new URL(pathname, siteUrl).toString();
	const imageUrl = new URL(image, siteUrl).toString();
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: title,
		description,
		url,
		image: imageUrl,
		publisher: {
			'@type': 'Organization',
			name: 'ASCII Informatika',
			url: siteUrl,
		},
	};

	return (
		<>
			<title>{title}</title>
			<link rel='canonical' href={url} />
			<meta name='description' content={description} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:type' content='website' />
			<meta property='og:url' content={url} />
			<meta property='og:image' content={imageUrl} />
			<meta property='og:site_name' content='ASCII Informatika' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={imageUrl} />
			<script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
		</>
	);
}

export default BuildSeoTags;
