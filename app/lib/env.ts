import z from 'zod';

const envSchema = z.object({
	VITE_GOOGLE_CLIENT_EMAIL: z
		.string()
		.min(1, { error: 'VITE_GOOGLE_CLIENT_EMAIL is required' }),
	VITE_GOOGLE_PRIVATE_KEY: z
		.string()
		.min(1, { error: 'VITE_GOOGLE_PRIVATE_KEY is required' }),
	VITE_GOOGLE_SHEET_ID: z
		.string()
		.min(1, { error: 'VITE_GOOGLE_SHEET_ID is required' }),
});

const parse = envSchema.safeParse(import.meta.env);

if (!parse.success) {
	console.error('Invalid environment variables:', parse.error.format());
	throw new Error('Invalid environment variables');
}

export const env = parse.data;
