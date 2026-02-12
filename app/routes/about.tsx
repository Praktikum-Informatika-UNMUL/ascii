import { AsistantCard } from '@/components/ui/asistant-card';
import { Badge } from '@/components/ui/badge';
import { koor, pengurus } from '@/constants/asistants';

export default function AboutPage() {
	return (
		<div className='space-y-32 py-32 '>
			<title>
				Struktur Organisasi Asisten Laboratorium Informatika | ASCII
			</title>
			<meta
				name='description'
				content='Struktur Organisasi Asisten Laboratorium Informatika (ASCII)'
			/>
			<section className='space-y-4 text-center'>
				<Badge className='mx-auto'>ASCII</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Struktur Organisasi Asisten Laboratorium Informatika
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Asisten Laboratorium Informatika (ASCII) yang bertujuan
					untuk mendukung kegiatan praktikum, meningkatkan kualitas
					pembelajaran, dan menjembatani komunikasi antara mahasiswa
					dan dosen.
				</p>

				<div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{pengurus.map((item) => (
						<AsistantCard
							key={item.name}
							name={item.name}
							course={item.course}
							imageUrl={item.imageUrl}
						/>
					))}
				</div>
			</section>

			<section className='space-y-4 text-center'>
				<Badge className='mx-auto'>Prakikum</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Koordinator Matakuliah Praktikum
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Koordinator matakuliah praktikum bertanggung jawab untuk
					mengelola dan mengawasi pelaksanaan praktikum di
					laboratorium informatika.
				</p>

				<div className='mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{koor.map((item) => (
						<AsistantCard
							key={item.name}
							name={item.name}
							course={item.course}
							imageUrl={item.imageUrl}
						/>
					))}
				</div>
			</section>
		</div>
	);
}
