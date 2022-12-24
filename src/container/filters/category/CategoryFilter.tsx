import { Tree } from "data/trees";
import { FC } from "react";

interface Props {
  data: Array<Tree>;
}

const CategoryFilter: FC<Props> = ({ data }: Props) => {
  const categories = [...new Set(data.map((tree: Tree) => tree.category))];

  const onClick = () => {
    console.log("on click");
  };

  return (
    <>
      <label htmlFor="category-filter">Category:</label>

      <select name="category" id="category-filter" onClick={onClick}>
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
