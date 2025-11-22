import { Badge } from './badge';
import NewsCard from './news-card';

export default function News() {
	return (
		<section className='max-w-3xl mx-auto w-full space-y-4 text-center'>
			<Badge className='mx-auto'>Berita</Badge>
			<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
				Berita Seputar Praktikum
			</h2>
			<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
				Dapatkan informasi terbaru seputar praktikum, termasuk
				pengumuman, berita, dan update penting lainnya.
			</p>
			<div className='grid gap-4 mx-auto rounded-2xl lg:grid-cols-2'>
				<NewsCard
					title='Selamat Datang Aslab Baru Semester Ganjil 2025/2026'
					description='Selamat atas bergabungnya asisten laboratorium baru di Praktikum Universitas Mulawarman.'
					image='/aslab-baru.png'
					link='https://www.instagram.com/p/DNsgFnS4nKG/?img_index=1'
					date='Sabtu, 23 Agustus 2025'
				/>

				<NewsCard
					title='Upgrading Asisten Laboratorium'
					description='Asisten laboratorium mengikuti kegiatan upgrading untuk meningkatkan keterampilan dan pengetahuan mereka.'
					image='/upgrading.JPG'
					link='/'
					date='Senin, 25 Agustus 2025'
				/>

				<NewsCard
					title='Sosialisasi Praktikum Semester Ganjil 2025/2026'
					description='Sosialisasi praktikum untuk semester ganjil tahun akademik 2025/2026 akan diadakan pada tanggal 29 Agustus 2025.'
					image='/sosialisasi-praktikum.jpeg'
					link='/'
					date="Jum'at, 29 Agustus 2025"
				/>

				<NewsCard
					title='Pengumuman Mulai Praktikum Semester Ganjil 2025/2026'
					description='Praktikum akan dimulai pada tanggal 08 September 2025. Pastikan Kamu sudah siap.'
					image='/hero-ascii.png'
					link='/jadwal-praktikum'
					date='Kamis, 04 September 2025'
				/>
			</div>
		</section>
	);
}
