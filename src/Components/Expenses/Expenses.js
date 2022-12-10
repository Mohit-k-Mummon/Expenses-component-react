import React from 'react';

import './Expenses.css';

import ExpensesBalance from './ExpensesBalance';
import ExpensesTracker from './ExpensesTracker';

const Expenses = props => {
	return (
		<div className='expenses'>
			<ExpensesBalance />
			<ExpensesTracker dataPoints={props.data} />
		</div>
	);
};

export default Expenses;
