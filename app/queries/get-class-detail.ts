import { queryOptions, useQuery } from '@tanstack/react-query';
import { sheetsService } from '@/api/gsheets.server';
import type { QueryConfig } from '@/lib/react-query';
import { classDetailSchema } from '@/schemas/class-detail';
import { studentSchema } from '@/schemas/student';

export const getClassDetail = async (id: string) => {
	const [studentsRaw, classDetailRaw] = await Promise.all([
		sheetsService.getSheetValues(id, 'A:B'),
		sheetsService.getSheetValues(id, 'D2:E12'),
	]);

	if (!classDetailRaw || classDetailRaw.length === 0)
		throw new Error('Kelas tidak ditemukan');

	const students = sheetsService.transformValuesToObjectsWithSchema(
		studentsRaw ?? [],
		studentSchema,
	);

	const classDetail = sheetsService.transformKeyValuePairsToObjectWithSchema(
		classDetailRaw,
		classDetailSchema,
	);

	return { students, classDetail };
};

export const getClassDetailQueryKey = (id: string) => ['classDetail', id];

export const getClassDetailQueryOptions = (id: string) => {
	return queryOptions({
		queryKey: getClassDetailQueryKey(id),
		queryFn: () => getClassDetail(id),
	});
};

type UseGetClassDetailParams = {
	queryConfig?: QueryConfig<typeof getClassDetailQueryOptions>;
	id: string;
};

export const useGetClassDetail = (params: UseGetClassDetailParams) => {
	return useQuery({
		...getClassDetailQueryOptions(params.id),
		...params.queryConfig,
	});
};
