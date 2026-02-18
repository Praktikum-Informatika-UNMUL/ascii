import z from 'zod';

export const scheduleSchema = z.object({
	'Kode Kelas': z.string(),
	'Mata Kuliah': z.string(),
	Hari: z.string(),
	Jam: z.string(),
	Tempat: z.string(),
	'Hari Ramadhan': z.string(),
	'Jam Ramadhan': z.string(),
});

export type Schedule = z.infer<typeof scheduleSchema>;
