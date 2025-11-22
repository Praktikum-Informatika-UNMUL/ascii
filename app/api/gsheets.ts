import { google } from 'googleapis';
import type z from 'zod';

export class SheetsService {
	private auth;
	private sheets;

	constructor() {
		this.auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: import.meta.env.VITE_GOOGLE_CLIENT_EMAIL,
				private_key: import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(
					/\\n/g,
					'\n',
				),
			},
			scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
		});

		this.sheets = google.sheets({ version: 'v4', auth: this.auth });
	}

	async getSheetValues(sheetName: string, range?: string) {
		try {
			const rangeSheet = range ? `${sheetName}!${range}` : sheetName;
			const response = await this.sheets.spreadsheets.values.get({
				spreadsheetId: import.meta.env.VITE_GOOGLE_SHEET_ID,
				range: rangeSheet,
			});

			return response.data.values;
		} catch (error) {
			console.error('Error fetching sheet values:', error);
			throw error;
		}
	}

	transformValuesToObjects<T>(values: string[][]): T[] {
		if (values.length === 0) return [];

		const headers = values[0];
		const dataRows = values.slice(1);

		return dataRows.map((row) => {
			const obj: Record<string, string> = {};
			headers.forEach((header, index) => {
				obj[header] = row[index] || '';
			});
			return obj as T;
		});
	}

	transformValuesToObjectsWithSchema<T>(
		values: string[][],
		schema: z.ZodType<T>,
	): T[] {
		const objects = this.transformValuesToObjects(values);
		return objects.map((obj) => schema.parse(obj));
	}

	transformKeyValuePairsToObject<T>(values: string[][]): T {
		if (!values || values.length === 0) return {} as T;

		const obj = Object.fromEntries(values);

		return obj as T;
	}

	transformKeyValuePairsToObjectWithSchema<T>(
		values: string[][],
		schema: z.ZodType<T>,
	): T {
		const obj = this.transformKeyValuePairsToObject(values);
		return schema.parse(obj);
	}
}

export const sheetsService = new SheetsService();
