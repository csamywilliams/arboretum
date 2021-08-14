import React from 'react';
import PropTypes from 'prop-types';

import FiltersStyled, { FilterCategory } from './Filters.styled';

import List from './List';

const Filters = ({ dispatch, items }) => {
	return (
		<FiltersStyled>
			<FilterCategory>Tree Types:</FilterCategory>
			<List id="tree-type-list" options={items} />
		</FiltersStyled>
	);
};

Filters.propTypes = {
	dispatch: PropTypes.func.isRequired,
};

export default Filters;
