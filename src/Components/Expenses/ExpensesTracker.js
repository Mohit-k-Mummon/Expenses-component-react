import './ExpensesTracker.css';
import Chart from '../Chart/Chart';

const ExpensesTracker = props => {
	const dataPointsKeysAdded = [...props.dataPoints];

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
