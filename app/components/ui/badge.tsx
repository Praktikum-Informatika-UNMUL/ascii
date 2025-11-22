import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariant = cva(
	'flex items-center w-fit justify-center rounded-full px-2.5 py-0.5 text-xs font-medium',
	{
		variants: {
			variant: {
				default: 'bg-ascii-900 text-white',
				secondary: 'bg-ascii-100 text-ascii-400',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

interface BadgeProps extends VariantProps<typeof badgeVariant> {
	children: React.ReactNode;
	className?: string;
}

export function Badge({ variant, children, className }: BadgeProps) {
	return (
		<span className={badgeVariant({ variant, className })}>{children}</span>
	);
}
