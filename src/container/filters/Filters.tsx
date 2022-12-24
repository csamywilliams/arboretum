import { FC } from "react";
import trees, { Tree } from "data/trees";
import CategoryFilter from "./category/CategoryFilter";

const Filters: FC = () => {
  const initialState = trees;

  return (
    <>
      <CategoryFilter data={initialState} />
    </>
  );
};

export default Filters;
