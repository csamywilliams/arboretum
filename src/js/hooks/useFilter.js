import React, { useReducer } from 'react';
import filterReducer from 'js/filterReducer';

const useFilter = (items) => {
	const [state, dispatch] = useReducer(filterReducer, { items });

	return {
		state,
		dispatch,
	};
};

export default useFilter;
