import trees, { Tree } from 'data/trees';

export interface FilterState {
  data: Array<Tree>;
}

interface FilterActions {
  type: FilterType.UpdateFilter | FilterType.ResetFilter;
  payload: {
    category?: string;
  };
}

export enum FilterType {
  UpdateFilter = 'updateFilter',
  ResetFilter = 'resetFilter',
}

const defaultFilters: FilterState = {
  data: [],
};

const filterReducer = (
  state: FilterState,
  action: FilterActions,
): FilterState => {
  if (action.type === FilterType.ResetFilter) {
    return {
      ...state,
      data: trees,
    };
  }

  if (action.type === FilterType.UpdateFilter) {
    const categoryData = state.data.filter((tree) => {
      return tree.category === action.payload.category;
    });

    return {
      ...state,
      data: categoryData,
    };
  }

  throw Error('Unknown action: ' + action.type);
};

export default filterReducer;
export { defaultFilters };
