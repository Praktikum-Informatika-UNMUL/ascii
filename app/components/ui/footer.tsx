import { Instagram } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='flex flex-col justify-between w-full text-fd-muted-foreground items-center px-4 mx-auto mb-10 text-center md:flex-row lg:px-0 text-balance'>
			<p className='mb-4 md:mb-0'>
				© 2026 ASCII Informatika. All rights reserved
			</p>
			<a
				href='https://www.instagram.com/praktikumif.unmul/'
				target='_blank'
				className='flex gap-1 items-center hover:text-ascii-900'
				rel='noopener noreferrer'
			>
				<Instagram size={14} />
				<span>praktikumif.unmul</span>
			</a>
		</footer>
	);
}
