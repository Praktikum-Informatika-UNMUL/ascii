export type Activity = {
	class: string;
	time: number;
	day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | "Jum'at";
	location:
		| 'D208'
		| 'D203'
		| 'Lab Network'
		| 'Lab Web Engineering'
		| 'Lab Multimedia'
		| 'Lab Robotik';
};

export const activities: Array<Activity> = [
	{
		class: 'APL-A1-25',
		time: 1,
		day: 'Senin',
		location: 'D208',
	},
	{
		class: 'APL-A2-25',
		time: 2,
		day: 'Senin',
		location: 'D208',
	},
	{
		class: 'APL-B1-25',
		time: 3,
		day: 'Selasa',
		location: 'D203',
	},
	{
		class: 'APL-B2-25',
		time: 4,
		day: 'Selasa',
		location: 'D203',
	},

	{
		class: 'APL-C1-25',
		time: 4,
		day: 'Selasa',
		location: 'D203',
	},
	{ class: 'APL-C2-25', time: 5, day: 'Selasa', location: 'D203' },
];
