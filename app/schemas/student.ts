import z from 'zod';

export const studentSchema = z.object({
	Nama: z.string(),
	Kelas: z.string(),
});

export type Student = z.infer<typeof studentSchema>;
