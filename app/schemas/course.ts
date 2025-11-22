import z from 'zod';

export const courseSchema = z.object({
	'Kode Kelas': z.string(),
	'Nama Kelas': z.string(),
	'Mata Kuliah': z.string(),
});

export type Course = z.infer<typeof courseSchema>;
