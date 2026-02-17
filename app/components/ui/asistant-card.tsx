type Props = {
	name: string;
	course: string;
	imageUrl: string;
};

export function AsistantCard({ name, course, imageUrl }: Props) {
	return (
		<div className='relative aspect-[4/6] rounded-lg bg-linear-to-br from-ascii-800 via-ascii-900 to-ascii-950 overflow-hidden shadow'>
			<img src={imageUrl} alt={name} className='relative z-10' />
			<img
				src='/ascii-typography.png'
				alt='ASCII'
				className='absolute top-4 right-4 w-8'
			/>
			<img
				src='/ascii.png'
				alt='ASCII'
				className='absolute top-0 left-0 invert grayscale-100 opacity-10'
			/>
			<div className='absolute bottom-0 left-0 right-0 p-4 text-white text-left backdrop-blur-sm z-10 md:h-[28%]'>
				<h3 className='text-[8px]'>{name}</h3>
				<p className='font-semibold text-xs'>{course}</p>
			</div>
		</div>
	);
}
