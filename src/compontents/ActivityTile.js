import React, { useState } from 'react';
import '../styles/ActivityTile.css';
import { activityColors } from '../utils/weekplan';

const countLength = (start, end) => {
	const [startHour, startMinute] = start.split(':');
	const [endHour, endMinute] = end.split(':');

	let minutesLeft = parseInt(endMinute) - parseInt(startMinute);
	let hoursLeft = parseInt(endHour) - parseInt(startHour);
	if (minutesLeft < 0) {
		hoursLeft -= 1;
		minutesLeft = 60 + minutesLeft;
	}

	const length = hoursLeft * 4 + Math.abs(minutesLeft / 15);

	return `${60 * length - 4}px`;
};

const ActivityTile = ({ top, activityInfo }) => {
	const [start, end, activity] = activityInfo;
	const color = activityColors[activity];

	const leng = countLength(start, end);
	return (
		<div
			className='activity-tile'
			style={{
				backgroundColor: color,
				top: top,
				left: '228px',
				width: leng,
			}}>
			{activity}
		</div>
	);
};

export default ActivityTile;
