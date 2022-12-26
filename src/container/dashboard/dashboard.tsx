import Grid from "components/grid/Grid";
import CategoryFilter from "container/filters/category/CategoryFilter";
import trees from "data/trees";
import { FC, useReducer, useState } from "react";
import filterReducer, { defaultFilters } from "./filterReducer";

const Dashboard: FC = () => {
  const [state, dispatch] = useReducer(filterReducer, { data: trees });

  const data = [];
  const filters = { category: "" };

  return (
    <>
      <h1>The Arboretum</h1>
      <CategoryFilter dispatch={dispatch} />
      <Grid data={state.data} />
    </>
  );
};

export default Dashboard;
