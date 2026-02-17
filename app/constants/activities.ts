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
