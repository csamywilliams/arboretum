import { trees } from './trees';

const initialItemValue = trees;

const filterReducer = (state, action) => {
	const update = () => {
		if (action.filterBy.length === 0) return reset();

		const filteredList = action.filterBy.map((query) =>
			initialItemValue.filter((item) => item.category === query),
		);

		return { ...state, items: filteredList.flat() };
	};

	const reset = () => ({
		...state,
		items: trees,
	});

	const actions = {
		update,
		reset,
	};

	return actions[action.type]();
};

export default filterReducer;
