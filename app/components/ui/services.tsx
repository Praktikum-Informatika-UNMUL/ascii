import { BookMarked, CalendarDays, School, ScrollText } from 'lucide-react';
import { Badge } from './badge';
import { ServiceCard } from './service-card';

export default function Services() {
	return (
		<section className='max-w-3xl mx-auto w-full space-y-4 text-center'>
			<Badge className='mx-auto'>Layanan</Badge>
			<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
				Layanan yang Tersedia
			</h2>
			<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
				Kami menyediakan berbagai layanan untuk mendukung proses belajar
				Kamu. Berikut adalah layanan yang tersedia:
			</p>
			<div className='grid gap-4 p-6 mx-auto bg-fd-muted rounded-2xl shadow lg:grid-cols-2'>
				<ServiceCard
					title='Jadwal Praktikum'
					description='Jadwal praktikum yang terupdate dan mudah diakses.'
					link='/jadwal-praktikum'
					icon={CalendarDays}
					variant={'100'}
				/>

				<ServiceCard
					title='Pembagian Kelas'
					description='Pembagian kelas yang jelas dan terstruktur.'
					link='/pembagian-kelas'
					icon={BookMarked}
					variant={'200'}
				/>

				<ServiceCard
					title='Ruangan Praktikum'
					description='Informasi lengkap tentang ruangan laboratorium.'
					link='/ruangan-praktikum'
					icon={School}
					variant={'200'}
				/>

				<ServiceCard
					title='Aturan Praktikum'
					description='Aturan dan tata tertib selama praktikum berlangsung.'
					link='/aturan-praktikum'
					icon={ScrollText}
					variant={'100'}
				/>
			</div>
		</section>
	);
}
