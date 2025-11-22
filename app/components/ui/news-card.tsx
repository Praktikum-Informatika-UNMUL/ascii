import { Link } from 'react-router';

type NewsCardProps = {
	title: string;
	description: string;
	image: string;
	link: string;
	date: string;
};

export default function NewsCard({
	title,
	description,
	image,
	link,
	date,
}: NewsCardProps) {
	return (
		<Link to={link}>
			<div className='p-4 h-full bg-fd-muted rounded-2xl shadow text-left'>
				<div className='overflow-hidden mb-4 rounded-lg aspect-video'>
					<img
						src={image}
						alt={title}
						className='object-cover w-full h-full'
					/>
				</div>
				<h3 className='text-xl font-bold text-ascii-900 leading-relaxed mb-2'>
					{title}
				</h3>
				<p className='mb-2 text-fd-muted-foreground text-sm leading-relaxed'>
					{description}
				</p>
				<div className='text-sm text-fd-muted-foreground'>{date}</div>
			</div>
		</Link>
	);
}
