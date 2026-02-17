import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import type { Activity } from '@/constants/activities';
import { courses } from '@/constants/courses';

type Props = {
	activities: Array<Activity>;
};

const times = [
	'07:30 - 09:00',
	'09:00 - 10:40',
	'10:50 - 12:20',
	'13:00 - 14:30',
	'14:40 - 16:10',
	'16:20 - 17:50',
];
const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
const labs = [
	'D208',
	'D203',
	'Lab Network',
	'Lab Web Engineering',
	'Lab Multimedia',
	'Lab Robotik',
];

export function Kanban({ activities }: Props) {
	const d208Activities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'D208',
	);

	const d203Activities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'D203',
	);

	const networkActivities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'Lab Network',
	);

	const webEngineeringActivities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'Lab Web Engineering',
	);

	const multimediaActivities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'Lab Multimedia',
	);

	const robotikActivities: Array<Activity> = activities.filter(
		(activity) => activity.location === 'Lab Robotik',
	);
	return (
		<>
			<Tabs items={labs}>
				<Tab className='overflow-x-auto'>
					<Table activities={d208Activities} />
				</Tab>
				<Tab className='overflow-x-auto'>
					<Table activities={d203Activities} />
				</Tab>
				<Tab className='overflow-x-auto'>
					<Table activities={networkActivities} />
				</Tab>
				<Tab className='overflow-x-auto'>
					<Table activities={webEngineeringActivities} />
				</Tab>
				<Tab className='overflow-x-auto'>
					<Table activities={multimediaActivities} />
				</Tab>
				<Tab className='overflow-x-auto'>
					<Table activities={robotikActivities} />
				</Tab>
			</Tabs>

			<Accordions type='single'>
				<Accordion title='Legenda Mata Kuliah'>
					<ul className='list-disc text-left pl-6'>
						{courses.map((course) => (
							<li key={course.code} className='flex'>
								<span className='font-semibold w-[100px]'>
									{course.code}
								</span>
								<span>{course.name}</span>
							</li>
						))}
					</ul>
				</Accordion>
			</Accordions>
		</>
	);
}

function Table({ activities }: { activities: Array<Activity> }) {
	return (
		<table className='w-full table-fixed border-collapse border min-w-[800px] md:min-w-auto'>
			<thead>
				<tr>
					<th className='border'>Waktu</th>
					{days.map((day) => (
						<th key={day} className='border p-4'>
							{day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{times.map((time, i) => (
					<tr key={i.toString()}>
						<td className='border text-center p-4'>{time}</td>
						{days.map((day) => (
							<td key={day} className='border p-4 uppercase'>
								{activities
									.filter(
										(activity) =>
											activity.day === day &&
											activity.time === i + 1,
									)
									.map((activity) => (
										<div key={activity.class}>
											{activity.class}
										</div>
									))}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
