import { Badge } from '@/components/ui/badge';
import { Kanban } from '@/components/ui/kanban';

export default function Schedule() {
	return (
		<div className='space-y-32 py-32'>
			<title>Jadwal Praktikum | ASCII</title>
			<meta name='description' content='Jadwal Praktikum Informatika' />
			<section className='space-y-4 text-center'>
				<Badge className='mx-auto'>Jadwal</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Jadwal Praktikum Informatika
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Semester Genap 2025/2026
				</p>

				<Kanban />
			</section>
		</div>
	);
}
