import { QueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { redirect } from 'react-router';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000, // 5 minutes
			gcTime: 30 * 60 * 1000, // 30 minutes
			retry: (failureCount, error) => {
				if (
					error instanceof Response &&
					(error.status === 404 || error.status === 400)
				) {
					return false;
				}
				return failureCount < 3;
			},

			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		},

		mutations: {
			onError: () => {
				// biome-ignore-start lint: <Aduhai>
				console.error(
					'Terjadi kesalahan tak terduga. Silakan coba lagi yaa.',
				);
				// biome-ignore-end lint: <Aduhai>
				redirect('/');
			},
		},
	},
});

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
	ReturnType<T>,
	'queryKey' | 'queryFn'
>;

export type MutationConfig<
	MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
