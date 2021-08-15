import { useReducer } from 'react';
import itemsReducer from 'reducers/itemsReducer';

const useItems = (items) => {
    const [state, dispatch] = useReducer(itemsReducer, { items });

    return {
        state,
        dispatch,
    };
};

export default useItems;
