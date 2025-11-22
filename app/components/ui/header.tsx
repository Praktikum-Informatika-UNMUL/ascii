export default function Header() {
	return (
		<header className='flex items-center gap-2'>
			<div className='w-5 h-5'>
				<img
					src='/ascii.png'
					alt='Logo ASCII'
					className='w-full h-full object-cover'
				/>
			</div>
			<h1>ASCII</h1>
		</header>
	);
}
