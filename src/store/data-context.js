import React from 'react';
import data from '../data.json';

const DataContext = React.createContext(null);

export const DataContextProvider = ({ children }) => {
	return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataContext;
