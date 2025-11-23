import { sheetsService } from '@/api/gsheets';
import { Badge } from '@/components/ui/badge';
import { courseSchema } from '@/schemas/course';
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import type { ShouldRevalidateFunctionArgs } from 'react-router';
import { Link } from 'react-router';
import type { Route } from './+types/class-division';

export function shouldRevalidate(arg: ShouldRevalidateFunctionArgs) {
	return true;
}

export async function loader() {
	const response = await sheetsService.getSheetValues('List Matakuliah');

	if (!response) return [];

	const courses = sheetsService.transformValuesToObjectsWithSchema(
		response,
		courseSchema,
	);

	return courses;
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
	const response = await serverLoader();
	return response;
}

clientLoader.hydrate = true as const;

export function HydrateFallback() {
	return <div>Loading...</div>;
}

export default function ClassDivision({ loaderData }: Route.ComponentProps) {
	const courses = loaderData;
	const [searchTerm, setSearchTerm] = useState('');

	const filteredCourses = courses.filter(
		(course) =>
			course['Nama Kelas']
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			course['Mata Kuliah']
				.toLowerCase()
				.includes(searchTerm.toLowerCase()) ||
			course['Kode Kelas']
				.toLowerCase()
				.includes(searchTerm.toLowerCase()),
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const handleClearSearch = () => setSearchTerm('');

	return (
		<div className='space-y-32 py-32'>
			<title>Pembagian Kelas | ASCII</title>
			<meta
				name='description'
				content='Pembagian Kelas Praktikum Informatika Universitas Mulawarman'
			/>
			<section className='space-y-4 text-center'>
				<Badge className='mx-auto'>Praktikum</Badge>
				<h2 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
					Pembagian Kelas Praktikum
				</h2>
				<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
					Berikut adalah pembagian kelas praktikum untuk mahasiswa
					Informatika semester genap tahun akademik 2025/2026.
				</p>

				<div className='relative mt-16'>
					<input
						type='text'
						value={searchTerm}
						onChange={handleSearchChange}
						placeholder='Cari kelas antum berdasarkan nama kelas...'
						className='p-4 border rounded-2xl w-full'
					/>
					<Search className='absolute right-4 top-1/2 transform -translate-y-1/2 text-fd-muted-foreground' />
					{searchTerm && (
						<X
							className='absolute right-12 top-1/2 transform -translate-y-1/2 text-fd-muted-foreground cursor-pointer'
							onClick={handleClearSearch}
						/>
					)}
				</div>

				<div className='grid gap-4 mx-auto lg:grid-cols-2'>
					{filteredCourses.map((course) => (
						<Link
							to={`/pembagian-kelas/${course['Kode Kelas']}`}
							key={course['Kode Kelas']}
							className='p-4 h-full bg-fd-muted rounded-2xl shadow text-left'
						>
							<h3 className='text-xl font-semibold'>
								{course['Nama Kelas']}
							</h3>
							<p className='text-sm text-fd-muted-foreground'>
								{course['Mata Kuliah']}
							</p>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
