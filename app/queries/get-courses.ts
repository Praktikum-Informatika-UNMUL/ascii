import { queryOptions, useQuery } from '@tanstack/react-query';
import { sheetsService } from '@/api/gsheets.server';
import type { QueryConfig } from '@/lib/react-query';
import { courseSchema } from '@/schemas/course';

export const getCourses = async () => {
	const coursesRaw = await sheetsService.getSheetValues('List Matakuliah');

	if (!coursesRaw) {
		throw new Error('Gagal memuat data mata kuliah');
	}

	const courses = sheetsService.transformValuesToObjectsWithSchema(
		coursesRaw,
		courseSchema,
	);

	return courses;
};

export const getCoursesQueryKey = () => ['courses'];

export const getCoursesQueryOptions = () => {
	return queryOptions({
		queryKey: getCoursesQueryKey(),
		queryFn: () => getCourses(),
	});
};

type UseGetCoursesParams = {
	queryConfig?: QueryConfig<typeof getCoursesQueryOptions>;
};

export const useGetCourses = (params: UseGetCoursesParams) => {
	return useQuery({
		...getCoursesQueryOptions(),
		...params.queryConfig,
	});
};
