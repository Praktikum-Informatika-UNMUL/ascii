import { useLocation } from 'react-router';
import News from '@/components/ui/news';
import BuildSeoTags from '@/lib/seo';

export default function NewsPage() {
	const location = useLocation();

	return (
		<div className='space-y-32 py-32'>
			<BuildSeoTags
				title='Berita Terbaru Asisten Laboratorium Informatika | ASCII'
				description='Dapatkan informasi terbaru seputar praktikum, termasuk pengumuman, berita, dan update penting lainnya.'
				pathname={location.pathname}
			/>

			<News />
		</div>
	);
}
