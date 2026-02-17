export type Activity = {
	class: string;
	time: number;
	day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
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
		time: 5,
		day: 'Kamis',
		location: 'D208',
	},
	{
		class: 'APL-A2-25',
		time: 5,
		day: 'Kamis',
		location: 'D203',
	},
	{
		class: 'APL-B1-25',
		time: 2,
		day: 'Senin',
		location: 'D208',
	},
	{
		class: 'APL-B2-25',
		time: 2,
		day: 'Senin',
		location: 'D203',
	},

	{
		class: 'APL-C1-25',
		time: 3,
		day: 'Kamis',
		location: 'D208',
	},
	{
		class: 'APL-C2-25',
		time: 3,
		day: 'Kamis',
		location: 'D203',
	},
	{
		class: 'BDA-A1-25',
		time: 5,
		day: 'Rabu',
		location: 'D208',
	},
	{
		class: 'BDA-A2-25',
		time: 5,
		day: 'Rabu',
		location: 'D203',
	},
	{
		class: 'BDA-B1-25',
		time: 5,
		day: 'Rabu',
		location: 'D203',
	},
];
