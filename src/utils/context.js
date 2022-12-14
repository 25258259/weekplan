import React, { useContext, useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { weekplan } from './weekplan';

const AppContext = React.createContext();

const defaultState = {
	weekplan,
};

const numberToDay = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const getDateInFithteens = () => {
	const [hours, minutes] = new Date().toLocaleTimeString().split(':');
	const minutesNumber = parseInt(minutes);
	const minutesInFithteens = minutesNumber - (minutesNumber % 15);

	return [parseInt(hours), minutesInFithteens];
};

const AppProvider = ({ children }) => {
	const [planState, dispatchPlanState] = useReducer(reducer, defaultState);

	const getCurrentActivity = () => {
		const day = new Date().getDay();
		const dayName = numberToDay[day];
		const [presentHour, presentMinutes] = getDateInFithteens();
		let currentActivity = 'Sleep?';

		const result = planState.weekplan[dayName].forEach((element) => {
			const [start, end, activity] = element;

			const [hourStart, minutesStart] = start
				.split(':')
				.map((x) => parseInt(x));

			// If for finding the activity fuck the end
			if (hourStart === presentHour) {
				if (presentMinutes >= minutesStart) {
					currentActivity = activity;
				}
			} else if (hourStart <= presentHour) {
				currentActivity = activity;
			}
		});

		return currentActivity;
	};

	return (
		<AppContext.Provider value={{ getCurrentActivity }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
