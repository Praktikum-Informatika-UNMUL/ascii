import { queryOptions, useQuery } from '@tanstack/react-query';
import { sheetsService } from '@/api/gsheets.server';
import type { QueryConfig } from '@/lib/react-query';
import { scheduleSchema } from '@/schemas/schedule';
import { mapToScheduleFormat } from '@/utils/mapToScheduleFormat';

export const getSchedules = async () => {
	const schedulesRaw = await sheetsService.getSheetValues('List Matakuliah');

	if (!schedulesRaw) {
		throw new Error('Gagal memuat data mata kuliah');
	}

	const schedules = sheetsService.transformValuesToObjectsWithSchema(
		schedulesRaw,
		scheduleSchema,
	);

	const formattedSchedule = mapToScheduleFormat(schedules);

	return formattedSchedule;
};

export const getSchedulesQueryKey = () => ['schedules'];

export const getSchedulesQueryOptions = () => {
	return queryOptions({
		queryKey: getSchedulesQueryKey(),
		queryFn: () => getSchedules(),
	});
};

type UseGetSchedulesParams = {
	queryConfig?: QueryConfig<typeof getSchedulesQueryOptions>;
};

export const useGetSchedules = (params: UseGetSchedulesParams) => {
	return useQuery({
		...getSchedulesQueryOptions(),
		...params.queryConfig,
	});
};
