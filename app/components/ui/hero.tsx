import { Bot, Cloudy, PanelsTopLeft, Sparkles } from 'lucide-react';
import { Badge } from './badge';

export default function Hero() {
	return (
		<section className='max-w-3xl mx-auto w-full space-y-4 text-center'>
			<Badge className='mx-auto'>Welcome</Badge>
			<h1 className='text-2xl font-bold lg:text-4xl text-balance leading-relaxed'>
				Selamat datang di E-Lab Praktikum Universitas Mulawarman
			</h1>
			<p className='text-lg text-balance text-fd-muted-foreground leading-relaxed'>
				Tempat dimana kamu bisa mengakses berbagai informasi dan layanan
				terkait praktikum dengan mudah dan cepat.
			</p>

			<section className='relative p-4 mx-auto bg-fd-muted rounded-2xl mt-16 shadow group hover:-rotate-4 text-ascii-900'>
				<div className='absolute p-4 bg-fd-muted rounded-lg shadow rotate-12 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-4'>
					<PanelsTopLeft size={64} />
				</div>
				<div className='absolute right-0 p-4 bg-fd-muted rounded-lg shadow -rotate-12 translate-x-1/2 -translate-y-1/2 group-hover:rotate-4'>
					<Bot size={64} />
				</div>
				<div className='absolute bottom-0 p-4 bg-fd-muted rounded-lg shadow -rotate-12 -translate-x-1/2 translate-y-1/2 group-hover:rotate-4'>
					<Sparkles size={64} />
				</div>
				<div className='absolute right-0 bottom-0 p-4 bg-fd-muted rounded-lg shadow rotate-12 translate-x-1/2 translate-y-1/2 group-hover:rotate-4'>
					<Cloudy size={64} />
				</div>
				<img
					src='/hero-ascii.png'
					alt='Hero ASCII'
					loading='lazy'
					className='w-full h-full rounded-xl'
				/>
			</section>
		</section>
	);
}
