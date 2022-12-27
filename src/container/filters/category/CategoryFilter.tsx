import {
  defaultFilters,
  FilterState,
  FilterType,
} from "container/dashboard/filterReducer";
import trees, { Tree } from "data/trees";
import { FC } from "react";
import DropdownStyled from "./CategoryFilter.styled";

interface Props {
  dispatch: React.Dispatch<any>;
}

const CategoryFilter: FC<Props> = ({ dispatch }: Props) => {
  const categories = [...new Set(trees.map((tree: Tree) => tree.category))];

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;

    if (value === "") {
      return;
    }

    dispatch({
      type: FilterType.ResetFilter,
    });

    dispatch({
      type: FilterType.UpdateFilter,
      payload: {
        category: value,
      },
    });
  };

  return (
    <>
      <label className="screen-reader-offscreen" htmlFor="category">
        Category:
      </label>

      <DropdownStyled
        name="category"
        id="category"
        data-test-id="category-filter"
        onChange={onChange}
      >
        <option value="">Category</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </DropdownStyled>
    </>
  );
};

export default CategoryFilter;
