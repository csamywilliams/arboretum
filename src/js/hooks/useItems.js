import { useReducer, useState, useMemo } from 'react';
import itemsReducer from 'reducers/itemsReducer';

import { sortItemsAlphabetically } from 'utils/transformData';

const useItems = (items) => {
    const sortedItems = useMemo(() => sortItemsAlphabetically(items), [items]);

    const [state, dispatch] = useReducer(itemsReducer, { items: sortedItems });
    const [originalItems] = useState({ items: sortedItems });

    return {
        state,
        dispatch,
        originalItems,
    };
};

export default useItems;
