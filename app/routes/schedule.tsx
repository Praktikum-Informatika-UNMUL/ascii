import { Callout } from 'fumadocs-ui/components/callout';
import { Badge } from '@/components/ui/badge';
import { Kanban } from '@/components/ui/kanban';
import type { Activity } from '@/constants/activities';
import { queryClient } from '@/lib/react-query';
import { getSchedulesQueryOptions } from '@/queries/get-schedules';
import type { Route } from './+types/schedule';

export async function loader() {
	try {
		const schedules = await queryClient.fetchQuery(
			getSchedulesQueryOptions(),
		);

		return { schedules };
	} catch (error) {
		if (error instanceof Error) {
			return new Response(error.message, {
				status: 500,
				statusText: error.message,
			});
		}
	}
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
	const response = await serverLoader();
	return response;
}

clientLoader.hydrate = true as const;

export function HydrateFallback() {
	return (
		<div className='space-y-32 py-32'>
			<div className='text-center space-y-4'>
				<Badge className='mx-auto'>Praktikum</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Memuat Pembagian Kelas Praktikum...
				</h2>
			</div>
		</div>
	);
}

export default function Schedule({ loaderData }: Route.ComponentProps) {
	const schedules = (loaderData?.schedules || []) as Array<Activity>;

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

				<Callout title='Jadwal Ramadhan' className='text-left'>
					Jadwal yang dipakai adalah jadwal yang sudah disesuaikan
					dengan Ramadhan.
				</Callout>

				<Kanban activities={schedules} />
			</section>
		</div>
	);
}
