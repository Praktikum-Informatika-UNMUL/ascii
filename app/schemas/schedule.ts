import z from 'zod';

export const scheduleSchema = z.object({
	'Kode Kelas': z.string(),
	Jadwal: z.string(),
	Tempat: z.string(),
});

export type Schedule = z.infer<typeof scheduleSchema>;
