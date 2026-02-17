import type { Schedule } from '@/schemas/schedule';

export function getTimeFromSchedule(time: string) {
	switch (time) {
		case '07:30 - 09:00':
			return 1;
		case '09:10 - 10:40':
			return 2;
		case '10:50 - 12:20':
			return 3;
		case '13:00 - 14:30':
			return 4;
		case '13:30 - 15:00':
			return 4;
		case '14:40 - 16:10':
			return 5;
		case '15:10 - 16:40':
			return 5;
		case '16:20 - 17:50':
			return 6;
		default:
			return 0;
	}
}

export function mapToScheduleFormat(rawSchedule: Schedule[]) {
	const mappedSchedule = rawSchedule.map((schedule) => {
		const day = schedule.Jadwal.split(',')[0].trim() as
			| 'Senin'
			| 'Selasa'
			| 'Rabu'
			| 'Kamis'
			| 'Jumat';
		const timeRaw = schedule.Jadwal.split(',')[1].trim();
		const time = getTimeFromSchedule(timeRaw);

		return {
			class: schedule['Kode Kelas'],
			time,
			day,
			location: schedule.Tempat,
		};
	});

	return mappedSchedule;
}
