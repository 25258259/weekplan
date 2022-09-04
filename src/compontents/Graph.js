import React from 'react';
import '../styles/Graph.css';
import ActivityTiles from './ActivityTiles';

const Graph = () => {
	//TODO fix this fucking rendering
	const iniciateTable = () => {
		let tab = [];
		for (let i = 0; i < 17; i++) {
			for (let j = 0; j < 4; j++) {
				tab.push(`${7 + i}:${j * 15 === 0 ? '00' : j * 15}`);
			}
		}
		tab = tab.slice(1);
		tab[0] = '';
		const days = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		];
		return (
			<tr>
				{tab.map((element, index) => {
					return <th key={index}>{element}</th>;
				})}
			</tr>
		);
	};

	const produceTDS = (dayName) => {
		let tab = [];
		for (let i = 0; i < 17; i++) {
			for (let j = 0; j < 4; j++) {
				tab.push('');
			}
		}
		tab = tab.slice(1);
		tab[0] = dayName;

		return (
			<tr>
				{tab.map((element, index) => {
					return <td key={index}>{element}</td>;
				})}
			</tr>
		);
	};

	return (
		<div className='drawing'>
			<table>
				<thead>{iniciateTable()}</thead>
				<tbody>
					{produceTDS('Monday')}
					{produceTDS('Tuesday')}
					{produceTDS('Wednesday')}
					{produceTDS('Thursday')}
					{produceTDS('Friday')}
					{produceTDS('Saturday')}
					{produceTDS('Sunday')}
				</tbody>
			</table>
			<ActivityTiles />
		</div>
	);
};

export default Graph;
