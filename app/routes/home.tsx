import Hero from '@/components/ui/hero';
import News from '@/components/ui/news';
import Services from '@/components/ui/services';

export function meta() {
	return [
		{ title: 'ASCII | Informatika' },
		{
			name: 'description',
			content: 'ASCII Informatika Universitas Mulawarman',
		},
	];
}

export default function Home() {
	return (
		<div className='space-y-32 py-32'>
			<Hero />
			<Services />
			<News />
		</div>
	);
}
