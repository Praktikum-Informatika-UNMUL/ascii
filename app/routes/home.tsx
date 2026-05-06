import { useLocation } from 'react-router';
import Hero from '@/components/ui/hero';
import News from '@/components/ui/news';
import Services from '@/components/ui/services';
import BuildSeoTags from '@/lib/seo';

export default function Home() {
	const location = useLocation();

	return (
		<div className='space-y-32 py-32'>
			<BuildSeoTags
				title='ASCII | Informatika'
				description='ASCII Informatika Universitas Mulawarman'
				pathname={location.pathname}
			/>
			<Hero />
			<Services />
			<News />
		</div>
	);
}
