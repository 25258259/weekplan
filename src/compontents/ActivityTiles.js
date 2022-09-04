import React, { useState } from 'react';
import '../styles/ActivityTiles.css';
import ActivityTile from './ActivityTile';
import { useGlobalContext } from '../utils/context';

const getTopFromDay = (dayName) => {
	const pxTransformationFromDay = {
		Monday: '-481px',
		Tuesday: '-481px',
		Wednesday: '-361px',
		Thrusday: '-301px',
		Friday: '-241px',
		Saturday: '-181px',
		Sunday: '-131px',
	};
	return pxTransformationFromDay[dayName];
};

const ActivityTiles = () => {
	const { weekplan } = useGlobalContext();

	return (
		<div className='activity-div'>
			{weekplan.map((day) => {
				const { dayName, schedule } = day;
				//Based on the day we get we have diffrent heights
				const top = '-481px';
				//  getTopFromDay(dayName);

				const content = schedule.map((activityInfo, index) => {
					console.log(activityInfo);
					return (
						<ActivityTile
							key={index}
							top={top}
							activityInfo={activityInfo}
						/>
					);
				});
				return content;
			})}
		</div>
	);
};

export default ActivityTiles;
