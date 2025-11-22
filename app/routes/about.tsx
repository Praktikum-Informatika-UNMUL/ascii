import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
	return (
		<div className='space-y-32 py-32'>
			<title>
				Struktur Organisasi Asisten Laboratorium Informatika | ASCII
			</title>
			<meta
				name='description'
				content='Struktur Organisasi Asisten Laboratorium Informatika (ASCII)'
			/>
			<section className='max-w-3xl mx-auto w-full space-y-4 text-center'>
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

				<img
					src='/pengurus.png'
					alt='Pengurus ASCII'
					className='mt-16 w-full object-cover'
					loading='lazy'
				/>
			</section>

			<section className='max-w-3xl mx-auto w-full space-y-4 text-center'>
				<Badge className='mx-auto'>Prakikum</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Koordinator Matakuliah Praktikum
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Koordinator matakuliah praktikum bertanggung jawab untuk
					mengelola dan mengawasi pelaksanaan praktikum di
					laboratorium informatika.
				</p>

				<div>
					<img
						src='/koor-1.png'
						alt='Koor'
						className='object-cover w-full'
						loading='lazy'
					/>
					<img
						src='/koor-2.png'
						alt='Koor'
						className='object-cover w-full'
						loading='lazy'
					/>
				</div>
			</section>
		</div>
	);
}
