import type { Schedule } from '@/schemas/schedule';

export function getTimeFromSchedule(time: string) {
	switch (time) {
		case '08:00 - 09:00':
			return 1;
		case '09:15 - 10:15':
			return 2;
		case '10:30 - 11:30':
			return 3;
		case '13:00 - 14:00':
			return 4;
		case '13:00 - 14:00 ':
			return 4;
		case '14:15 - 15:15':
			return 5;
		case '15:30 - 16:30':
			return 6;
		case '13:30 - 14:30':
			return 4;
		case '14:45 - 15:45':
			return 5;
		case '16:00 - 17:00':
			return 6;
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
