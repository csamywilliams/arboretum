import { trees } from 'js/trees';

const initialItemValue = trees;

const filterReducer = (state, action) => {
    const update = () => {
        if (action.filterBy.length === 0) return reset();

        const filteredList = action.filterBy.map((query) => initialItemValue.filter((item) => item.category === query));

        return {
            ...state,
            items: filteredList.flat(),
        };
    };

    const reset = () => ({
        ...state,
        items: trees,
    });

    const add = () => ({
        ...state,
        items: [...state.items, action.item],
    });

    const actions = {
        update,
        reset,
        add,
    };

    return actions[action.type]();
};

export default filterReducer;
