import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { MoonStar } from 'lucide-react';
import type { Activity } from '@/constants/activities';
import { courses } from '@/constants/courses';

type Props = {
	activities: Array<Activity>;
};

const sundayToThursdayTimes = [
	'08:00 - 09:00',
	'09:20 - 10:30',
	'10:40 - 11:50',
	'12:40 - 13:45',
	'13:50 - 15:00',
];
const fridayTimes = [
	'08:00 - 09:00',
	'09:20 - 10:30',
	'10:40 - 11:50',
	'13:30 - 14:40',
	'14:50 - 16:00',
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
	const getActivities = (day: string, timeSlot: number) => {
		return activities.filter(
			(activity) => activity.day === day && activity.time === timeSlot,
		);
	};

	return (
		<table className='w-full border-collapse border border-fd-border min-w-[800px] overflow-hidden md:min-w-auto'>
			<thead>
				<tr className='bg-ascii-900 text-white'>
					<th className='border border-fd-border p-3 text-left font-semibold'>
						Hari
					</th>
					<th className='border border-fd-border p-3 text-left font-semibold'>
						Jam
					</th>
					<th className='border border-fd-border p-3 text-left font-semibold'>
						Kelas
					</th>
					<th className='border border-fd-border p-3 text-left font-semibold'>
						Mata Kuliah
					</th>
				</tr>
			</thead>
			<tbody>
				{days.map((day) => {
					const times =
						day === 'Jumat' ? fridayTimes : sundayToThursdayTimes;
					const timeSlots = times.length;

					return (
						<>
							{times.map((time, timeIndex) => {
								const activitiesList = getActivities(
									day,
									timeIndex + 1,
								);

								if (day === 'Jumat' && timeIndex === 2) {
									return (
										<>
											<tr
												key={`${day}-${timeIndex.toString()}`}
											>
												<td className='border border-fd-border p-3'>
													{time}
												</td>
												<td className='border border-fd-border p-3 uppercase'>
													{activitiesList.length > 0
														? activitiesList.map(
																(act, idx) => (
																	<div
																		key={idx.toString()}
																	>
																		{
																			act.class
																		}
																	</div>
																),
															)
														: '-'}
												</td>

												<td className='border border-fd-border p-3 text-ascii-900 dark:text-ascii-300'>
													{activitiesList.length > 0
														? activitiesList.map(
																(act, idx) => (
																	<div
																		key={idx.toString()}
																	>
																		{
																			act.course
																		}
																	</div>
																),
															)
														: '-'}
												</td>
											</tr>
											<tr key={`${day}-prayer`}>
												<td
													colSpan={4}
													className='border border-fd-border p-3 text-center font-semibold bg-emerald-600 text-white'
												>
													<div className='flex items-center justify-center gap-4'>
														<MoonStar /> SHALAT
														JUM'AT
													</div>
												</td>
											</tr>
										</>
									);
								}

								return (
									<tr key={`${day}-${timeIndex.toString()}`}>
										{timeIndex === 0 && (
											<td
												rowSpan={
													day === 'Jumat'
														? timeSlots + 1
														: timeSlots
												}
												className='border border-fd-border p-3 font-semibold text-ascii-900 dark:text-ascii-300'
											>
												{day.toUpperCase()}
											</td>
										)}
										<td className='border border-fd-border p-3'>
											{time}
										</td>
										<td className='border border-fd-border p-3 uppercase'>
											{activitiesList.length > 0
												? activitiesList.map(
														(act, idx) => (
															<div
																key={idx.toString()}
															>
																{act.class}
															</div>
														),
													)
												: '-'}
										</td>

										<td className='border border-fd-border p-3 text-ascii-900 dark:text-ascii-300'>
											{activitiesList.length > 0
												? activitiesList.map(
														(act, idx) => (
															<div
																key={idx.toString()}
															>
																{act.course}
															</div>
														),
													)
												: '-'}
										</td>
									</tr>
								);
							})}
						</>
					);
				})}
			</tbody>
		</table>
	);
}
