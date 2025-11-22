import Header from '@/components/ui/header';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {
	Book,
	BookMarked,
	Calendar,
	Newspaper,
	Phone,
	UserCircle,
} from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: <Header />,
		},
		links: [
			{ text: 'Dokumen', url: '/docs', icon: <Book /> },
			{
				text: 'Jadwal Praktikum',
				url: '/jadwal-praktikum',
				icon: <Calendar />,
			},
			{
				text: 'Pembagian Kelas',
				url: '/pembagian-kelas',
				icon: <BookMarked />,
			},
			{
				text: 'Berita',
				url: '/berita',
				icon: <Newspaper />,
			},
			{
				text: 'Kontak',
				url: '/kontak',
				icon: <Phone />,
			},
			{
				text: 'Tentang Kami',
				url: '/tentang-kami',
				icon: <UserCircle />,
			},
		],
	};
}
