import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
	// Retrieving the highest amount in dataPoints
	const dataPointsAmountsArray = props.dataPoints.map(dataPoint => dataPoint.amount);
	const highestValue = Math.max(...dataPointsAmountsArray);

	return (
		<div className='chart'>
			{props.dataPoints.map(dataPoint => (
				<ChartBar
					day={dataPoint.day}
					amount={dataPoint.amount}
					key={dataPoint.key}
					maxAmount={highestValue}
				/>
			))}
		</div>
	);
};

export default Chart;
