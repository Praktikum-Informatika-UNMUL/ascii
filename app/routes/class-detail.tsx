import { Callout } from 'fumadocs-ui/components/callout';
import { BookMarked, Monitor, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { queryClient } from '@/lib/react-query';
import { getClassDetailQueryOptions } from '@/queries/get-class-detail';
import type { ClassDetail } from '@/schemas/class-detail';
import type { Route } from './+types/class-detail';

export async function loader({ params }: Route.LoaderArgs) {
	const { id } = params;

	try {
		const data = await queryClient.fetchQuery(
			getClassDetailQueryOptions(id),
		);

		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Response(error.message, {
				status: 404,
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
					Memuat detail kelas...
				</h2>
			</div>
		</div>
	);
}

export default function ClassDetailPage({ loaderData }: Route.ComponentProps) {
	const classDetail = loaderData?.classDetail || ({} as ClassDetail);
	const students = loaderData?.students || [];

	return (
		<div className='space-y-32 py-32'>
			<title>
				{`${classDetail['Mata Kuliah']} - ${classDetail['Nama Kelas']} | ASCII`}
			</title>

			<meta
				name='description'
				content={`Detail pembagian kelas praktikum ${classDetail['Mata Kuliah']} untuk mahasiswa Informatika.`}
			/>

			<section className='space-y-4 text-center'>
				<div className='overflow-hidden relative rounded-lg'>
					<div className='flex absolute inset-0 z-10 flex-col gap-4 justify-center items-center text-white'>
						<h1 className='max-w-[80%] text-xl font-bold text-balance lg:text-5xl'>
							{classDetail['Mata Kuliah']}{' '}
							{classDetail['Nama Kelas']}
						</h1>

						<h2 className='text-xs lg:text-base text-balance'>
							{classDetail['Hari Ramadhan']}{' '}
							{classDetail['Jam Ramadhan']}{' '}
							{classDetail['Tempat']}
						</h2>
					</div>
					<img
						src='/class-bg.png'
						alt='Class Background'
						className='relative w-full h-full'
					/>
				</div>

				<div className='flex justify-end mb-12'>
					<div className='space-y-2 w-fit'>
						<div className='flex gap-4 items-center w-fit'>
							{classDetail['Aslab']
								.split(',')
								.map((assistant) => (
									<div key={assistant} className='text-sm'>
										{assistant}
									</div>
								))}
						</div>
						<div className='p-4 w-full rounded border bg-fd-muted text-fd-muted-foreground'>
							<Monitor className='mx-auto' />
						</div>
					</div>
				</div>

				<div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
					{students.map((student) => (
						<div key={student.Nama} className='space-y-2'>
							<div className='p-4 w-full rounded border bg-fd-muted text-fd-muted-foreground'>
								<Monitor className='mx-auto' />
							</div>
							<div className='text-sm'>{student.Nama}</div>
						</div>
					))}
				</div>

				<div className='grid gap-4 mt-12 lg:grid-cols-2 text-left'>
					<a href={classDetail['Link GCR']} target='_blank'>
						<Callout type='idea' icon={<BookMarked />}>
							Google Classroom
						</Callout>
					</a>

					<a href={classDetail['Link GWA']} target='_blank'>
						<Callout type='success' icon={<Phone />}>
							Grup Whatsapp
						</Callout>
					</a>
				</div>
			</section>
		</div>
	);
}
