import { useReducer } from 'react';
import filterReducer from 'reducers/filterReducer';

const useFilter = (items) => {
    const [state, dispatch] = useReducer(filterReducer, { items });

    return {
        state,
        dispatch,
    };
};

export default useFilter;
