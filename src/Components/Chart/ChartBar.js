import './ChartBar.css';

const ChartBar = props => {
	// Bar height logic
	let barFillHeight = '0%';
	if (props.amount > 0) {
		barFillHeight = Math.round((props.amount / props.maxAmount) * 100) + '%';
	}

	// Bar color logic
	let color = 'red';
	if (props.amount === props.maxAmount) {
		color = 'blue';
	}

	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div className={`chart-bar__fill ${color}`} style={{ height: barFillHeight }}>
					<div className='chart-bar__float'>${props.amount}</div>
				</div>
			</div>
			<div className='chart-bar__label'>{props.day}</div>
		</div>
	);
};

export default ChartBar;
