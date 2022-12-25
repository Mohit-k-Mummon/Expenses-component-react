import React from 'react';

import './Expenses.css';

import ExpensesBalance from './ExpensesBalance';
import ExpensesTracker from './ExpensesTracker';

const Expenses = () => {
	return (
		<div className='expenses'>
			<ExpensesBalance />
			<ExpensesTracker />
		</div>
	);
};

export default Expenses;
