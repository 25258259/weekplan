import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
import Graph from './Graph';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';
import { activityColors } from '../utils/weekplan';

const Main = () => {
	const [activity, setActivity] = useState('Sleep?');
	const { getCurrentActivity } = useGlobalContext();
	const [color, setColor] = useState('black');
	useEffect(() => {
		const findNewTime = setInterval(() => {
			const newActivity = getCurrentActivity();
			setActivity(newActivity);
			setColor(activityColors(newActivity));
		}, 5000);
		return () => clearInterval(findNewTime);
	}, []);

	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	return (
		<main>
			<div className='month'>
				<h1>Current month: {month[new Date().getMonth()]}</h1>
				<br />
				<h1>
					Current activity:{' '}
					<span
						style={{
							backgroundColor: color,
							color: color === 'black' ? 'white' : 'black',
						}}>
						{activity}
					</span>
				</h1>
			</div>
			<div className='arrow left-arrow'>
				<FaChevronLeft />
			</div>
			<Graph />
			<div className='arrow right-arrow'>
				<FaChevronRight />
			</div>
		</main>
	);
};

export default Main;
