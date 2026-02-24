import type { Schedule } from '@/schemas/schedule';

export function getTimeFromSchedule(time: string) {
	switch (time) {
		case '08:00 - 09:10':
			return 1;
		case '09:20 - 10:30':
			return 2;
		case '10:40 - 11:50':
			return 3;
		case '12:40 - 13:45':
		case '13:30 - 14:40':
			return 4;
		case '13:50 - 15:00':
		case '14:50 - 16:00':
			return 5;
		default:
			return 0;
	}
}

export function mapToScheduleFormat(rawSchedule: Schedule[]) {
	const mappedSchedule = rawSchedule.map((schedule) => {
		const day = schedule['Hari Ramadhan'];
		const timeRaw = schedule['Jam Ramadhan'];
		const time = getTimeFromSchedule(timeRaw);

		return {
			class: schedule['Kode Kelas'],
			course: schedule['Mata Kuliah'],
			time,
			day,
			location: schedule.Tempat,
		};
	});

	return mappedSchedule;
}
