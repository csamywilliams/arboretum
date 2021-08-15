import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { groupCategories } from 'utils/transformData';

import ListStyled, { ListItemStyled, ItemLabel } from './List.styled';

const List = ({ options, id, dispatch }) => {
	const [checkedItems, setCheckedItems] = useState([]);

	useEffect(() => {
		dispatch({
			type: 'update',
			filterBy: checkedItems,
		});
	}, [checkedItems]);

	const onChange = (e) => {
		const { value, checked } = e.target;

		let filterCheck = [...checkedItems];

		if (checked && !filterCheck.includes(value)) {
			filterCheck.push(value);
		}

		if (!checked && filterCheck.includes(value)) {
			filterCheck = filterCheck.filter((item) => item !== value);
		}

		setCheckedItems(filterCheck);
	};

	return (
		<ListStyled id={id}>
			{groupCategories(options).map((option) => {
				return (
					<ListItemStyled key={option}>
						<span>
							<input
								type="checkbox"
								value={option}
								id={option}
								onChange={onChange}
							/>
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
	dispatch: PropTypes.func.isRequired,
};

export default List;
