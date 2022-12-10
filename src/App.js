import React from 'react';
import './App.css';

import data from './data.json';

import Expenses from './Components/Expenses/Expenses';

function App() {
	return <Expenses data={data} />;
}

export default App;
