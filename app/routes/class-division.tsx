import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { useDebounce } from 'use-debounce';
import { Badge } from '@/components/ui/badge';
import { queryClient } from '@/lib/react-query';
import { getCoursesQueryOptions } from '@/queries/get-courses';
import type { Route } from './+types/class-division';

export async function loader() {
	try {
		const courses = await queryClient.fetchQuery(getCoursesQueryOptions());

		return { courses };
	} catch (error) {
		if (error instanceof Error) {
			throw new Response(error.message, {
				status: 500,
				statusText: error.message,
			});
		}
	}
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
	const response = await serverLoader();
	const courses = response?.courses;
	return { courses };
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

export default function ClassDivision({ loaderData }: Route.ComponentProps) {
	const courses = loaderData.courses || [];
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchTerms, setSearchTerms] = useState(searchParams.get('q') || '');
	const [value] = useDebounce(searchTerms, 300);

	const filteredCourses = courses.filter(
		(course) =>
			course['Nama Kelas'].toLowerCase().includes(value.toLowerCase()) ||
			course['Mata Kuliah'].toLowerCase().includes(value.toLowerCase()) ||
			course['Kode Kelas'].toLowerCase().includes(value.toLowerCase()),
	);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setSearchTerms(newValue);
		setSearchParams(newValue ? { q: newValue } : {});
	};

	const handleClearSearch = () => {
		setSearchTerms('');
	};

	useEffect(() => {
		if (!searchParams.get('q')) {
			setSearchParams({});
		}
	}, [searchParams, setSearchParams]);

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
						value={searchTerms}
						onChange={handleSearchChange}
						placeholder='Cari kelas antum berdasarkan nama kelas...'
						className='p-4 border rounded-2xl w-full'
					/>
					<Search className='absolute right-4 top-1/2 transform -translate-y-1/2 text-fd-muted-foreground' />
					{searchTerms && (
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
