import z from 'zod';

export const classDetailSchema = z.object({
	'Kode Kelas': z.string(),
	'Nama Kelas': z.string(),
	'Mata Kuliah': z.string(),
	Aslab: z.string(),
	'Hari ': z.string(),
	Jam: z.string(),
	Tempat: z.string(),
	'Hari Ramadhan': z.string(),
	'Jam Ramadhan': z.string(),
	'Link GCR': z.string(),
	'Link GWA': z.string(),
});

export type ClassDetail = z.infer<typeof classDetailSchema>;
