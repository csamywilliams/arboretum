import { FC, useState } from "react";
import { FilterType } from "container/dashboard/filterReducer";
import trees, { Tree } from "data/trees";
import DropdownStyled, { ClearButtonStyled } from "./CategoryFilter.styled";

interface Props {
  dispatch: React.Dispatch<any>;
}

const CategoryFilter: FC<Props> = ({ dispatch }: Props) => {
  const [showClear, setShowClear] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const categories = [...new Set(trees.map((tree: Tree) => tree.category))];

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault();

    const { value } = event.target;

    setShowClear(true);
    setSelectValue(value);

    dispatch({
      type: FilterType.ResetFilter,
    });

    if (value === "") {
      return;
    }

    dispatch({
      type: FilterType.UpdateFilter,
      payload: {
        category: value,
      },
    });
  };

  const onClickClear = (): void => {
    setSelectValue("");
    setShowClear(false);
    dispatch({
      type: FilterType.ResetFilter,
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
        value={selectValue}
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

      {showClear && (
        <ClearButtonStyled onClick={onClickClear} name="clear">
          Clear
        </ClearButtonStyled>
      )}
    </>
  );
};

export default CategoryFilter;
