import Grid from "components/grid/Grid";
import CategoryFilter from "container/filters/category/CategoryFilter";
import { FC, useState } from "react";

export interface FilterState {
  category: string;
}

const defaultFilters: FilterState = {
  category: "",
};

const Dashboard: FC = () => {
  const [filters, setFilters] = useState(defaultFilters);

  return (
    <>
      <h1>The Arboretum</h1>
      <CategoryFilter filters={filters} setFilters={setFilters} />
      <Grid filters={filters} />
    </>
  );
};

export default Dashboard;
