import z from 'zod';

export const classDetailSchema = z.object({
	'Kode Kelas': z.string(),
	'Nama Kelas': z.string(),
	'Mata Kuliah': z.string(),
	Aslab: z.string(),
	Jadwal: z.string(),
	Tempat: z.string(),
	'Tanggal Mulai': z.string(),
	'Tanggal Selesai': z.string(),
	'Link GCR': z.string(),
	'Link GWA': z.string(),
});

export type ClassDetail = z.infer<typeof classDetailSchema>;
