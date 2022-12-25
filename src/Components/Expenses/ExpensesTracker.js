import { useContext } from 'react';
import './ExpensesTracker.css';
import Chart from '../Chart/Chart';
import DataContext from '../../store/data-context';

const ExpensesTracker = () => {
	// accessing Context
	const ctx = useContext(DataContext);

	// Variable we modify adding key values to items
	const dataPointsKeysAdded = [...ctx];

	for (let dataPoint of dataPointsKeysAdded) {
		dataPoint.key = Math.random().toString();
	}

	return (
		<div className='expenses-tracker'>
			<h1>Spending - Last 7 days</h1>

			<Chart dataPoints={dataPointsKeysAdded} />

			<div className='expenses-tracker__total'>
				<div className='expenses-tracker__total-month'>
					<p>Total this month</p>
					<p>${478.33}</p>
				</div>
				<div className='expenses-tracker__percentage'>
					<p>{`${'+'}${2.4}%`}</p>
					<p>from last month</p>
				</div>
			</div>
		</div>
	);
};

export default ExpensesTracker;
