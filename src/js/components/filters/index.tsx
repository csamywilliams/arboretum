import React from 'react';

import FiltersStyled, { FilterCategory, FilterHeading } from './Filters.styled';

import List from './List';

import { Item } from 'js/types';

type FiltersProps = {
    items: Array<Item>,
    dispatch: any
}

const Filters = ({ dispatch, items }: FiltersProps) => {
    return (
        <FiltersStyled>
            <FilterHeading>Filter by:</FilterHeading>
            <FilterCategory>Species</FilterCategory>
            <List id="tree-type-list" options={items} dispatch={dispatch} />
        </FiltersStyled>
    );
};

export default Filters;
