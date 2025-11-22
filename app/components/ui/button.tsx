import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariant = cva(
	'font-semibold cursor-pointer shadow active:scale-95 text-sm',
	{
		variants: {
			variant: {
				primary: 'bg-ascii-900 text-white hover:bg-ascii-950',
				secondary: 'bg-ascii-100 text-ascii-900 hover:bg-ascii-200',
			},
			corner: {
				rounded: 'rounded-md',
				full: 'rounded-full',
			},
			size: {
				sm: 'px-3 py-1.5 text-sm',
				md: 'px-4 py-2 text-md',
				lg: 'px-5 py-2.5 text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
			corner: 'rounded',
			size: 'md',
		},
	},
);

interface ButtonProps
	extends VariantProps<typeof buttonVariant>,
		React.ComponentProps<'button'> {
	children: React.ReactNode;
	className?: string;
}

export function Button({
	variant,
	corner,
	size,
	children,
	className,
	...props
}: ButtonProps) {
	return (
		<button
			className={buttonVariant({ variant, corner, size, className })}
			{...props}
		>
			{children}
		</button>
	);
}
