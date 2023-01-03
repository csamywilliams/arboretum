import Grid from 'components/grid/Grid';
import AddItem from 'container/addItem/AddItem';
import CategoryFilter from 'container/filters/category/CategoryFilter';
import Map from 'container/map/Map';
import trees from 'data/trees';
import { FC, useReducer } from 'react';

import DashboardStyled from './Dashboard.styled';
import filterReducer from './filterReducer';

const Dashboard: FC = () => {
  const [state, dispatch] = useReducer(filterReducer, { data: trees });

  return (
    <DashboardStyled>
      <h1>The Arboretum</h1>
      <Map />
      <div>
        <CategoryFilter dispatch={dispatch} />
        {/* <AddItem /> */}
      </div>
      <Grid data={state.data} />
    </DashboardStyled>
  );
};

export default Dashboard;
