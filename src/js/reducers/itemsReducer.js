import trees from 'js/trees';

import { sortItemsAlphabetically } from 'utils/transformData';

const defaultItems = trees;

const itemsReducer = (state, action) => {
    const update = () => {
        if (action.filterBy.length === 0) return reset();

        const filteredList = action.filterBy.map((query) => defaultItems.filter((item) => item.category === query));

        return {
            ...state,
            items: filteredList.flat(),
        };
    };

    const reset = () => ({
        ...state,
        items: defaultItems,
    });

    const add = () => {
        const sortedItems = sortItemsAlphabetically([...state.items, action.item]);

        return {
            ...state,
            items: sortedItems,
        };
    };

    const actions = {
        update,
        reset,
        add,
    };

    return actions[action.type]();
};

export default itemsReducer;
