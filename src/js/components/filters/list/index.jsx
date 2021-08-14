import React from 'react';
import PropTypes from 'prop-types';

import { groupCategories } from 'utils/transformData';

import ListStyled, { ListItemStyled, ItemLabel } from './List.styled';

const List = ({ options, id }) => {
	return (
		<ListStyled id={id}>
			{groupCategories(options).map((option) => {
				return (
					<ListItemStyled key={option}>
						<span>
							<input type="checkbox" value={option} id={option} />
							<ItemLabel htmlFor={option}>{option}</ItemLabel>
						</span>
					</ListItemStyled>
				);
			})}
		</ListStyled>
	);
};

List.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
	id: PropTypes.string.isRequired,
};

export default List;
