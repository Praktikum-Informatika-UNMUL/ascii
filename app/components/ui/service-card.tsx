import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from './button';

const serviceCardVariant = cva(
	'flex h-full flex-col items-center justify-between gap-2 rounded-lg px-2 py-8 text-center ',
	{
		variants: {
			variant: {
				'50': 'bg-ascii-50 text-ascii-900',
				'100': 'bg-ascii-100 text-ascii-900',
				'200': 'bg-ascii-200 text-ascii-900',
				'300': 'bg-ascii-300 text-ascii-900',
				'400': 'bg-ascii-400 text-ascii-900',
				'500': 'bg-ascii-500 text-white',
				'600': 'bg-ascii-600 text-white',
				'700': 'bg-ascii-700 text-white',
				'800': 'bg-ascii-800 text-white',
				'900': 'bg-ascii-900 text-white',
			},
		},
		defaultVariants: {
			variant: '200',
		},
	},
);

interface ServiceCardProps extends VariantProps<typeof serviceCardVariant> {
	title: string;
	description: string;
	className?: string;
	link: string;
	icon: LucideIcon;
}

export function ServiceCard({
	variant,
	title,
	description,
	className,
	link,
	icon,
}: ServiceCardProps) {
	const Icon = icon;

	return (
		<Link to={link}>
			<div className={cn(serviceCardVariant({ variant, className }))}>
				<div>
					<Icon className='mx-auto' />
					<h3 className='text-lg font-semibold leading-loose'>
						{title}
					</h3>
					<p className='text-sm leading-relaxed'>{description}</p>
				</div>

				<Button>Lihat</Button>
			</div>
		</Link>
	);
}
