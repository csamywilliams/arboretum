import React from 'react';
import PropTypes from 'prop-types';

import FiltersStyled, { FilterCategory, FilterHeading } from './Filters.styled';

import List from './List';

const Filters = ({ dispatch, items }) => {
    return (
        <FiltersStyled>
            <FilterHeading>Filter by:</FilterHeading>
            <FilterCategory>Species</FilterCategory>
            <List id="tree-type-list" options={items} dispatch={dispatch} />
        </FiltersStyled>
    );
};

Filters.propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Filters;
