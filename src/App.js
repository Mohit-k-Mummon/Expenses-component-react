import React from 'react';
import './App.css';

import Expenses from './Components/Expenses/Expenses';
import { DataContextProvider } from './store/data-context';

function App() {
	return (
		<DataContextProvider>
			<Expenses />
		</DataContextProvider>
	);
}

export default App;
