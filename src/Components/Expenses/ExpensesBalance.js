import React from 'react';

import './ExpensesBalance.css';
import logo from '../../Assets/logo.svg';

const ExpensesBalance = () => {
	return (
		<div className='expenses-balance'>
			<div className='expenses-balance__balance'>
				<p className='balance'>My balance</p>
				<p className='amount'>${921.48}</p>
			</div>
			<img className='expenses-balance__logo' src={logo} alt='logo' />
		</div>
	);
};

export default ExpensesBalance;
