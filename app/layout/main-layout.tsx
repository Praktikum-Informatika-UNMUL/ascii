import Footer from '@/components/ui/footer';
import { baseOptions } from '@/lib/layout.shared';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Outlet } from 'react-router';

export default function MainLayout() {
	return (
		<HomeLayout {...baseOptions()} className='px-4 md:px-0 overflow-hidden'>
			<Outlet />
			<div className='fixed top-0 right-0 bottom-0 left-0 pattern -z-10'></div>
			<Footer />
		</HomeLayout>
	);
}
