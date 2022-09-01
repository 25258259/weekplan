import React, { useEffect, useState } from 'react';
import '../styles/Main.css';
import Graph from './Graph';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';

const Main = () => {
	const [activity, setActivity] = useState('Sleeping');
	const { getCurrentActivity } = useGlobalContext();

	useEffect(() => {
		const findNewTime = setInterval(() => {
			setActivity(getCurrentActivity());
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
					Current activity: <span>{activity}</span>
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
