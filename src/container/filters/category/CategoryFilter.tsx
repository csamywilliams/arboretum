import { FilterState } from "container/dashboard/Dashboard";
import trees, { Tree } from "data/trees";
import { FC } from "react";

interface Props {
  setFilters: any;
  filters: FilterState;
}

const CategoryFilter: FC<Props> = ({ setFilters, filters }: Props) => {
  const categories = [...new Set(trees.map((tree: Tree) => tree.category))];

  const onClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    const updateFilter = {
      ...filters,
      category: value,
    };

    setFilters(updateFilter);
  };

  return (
    <>
      <label htmlFor="category-filter">Category:</label>

      <select name="category" id="category-filter" onChange={onClick}>
        <option value="">--Category--</option>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CategoryFilter;
