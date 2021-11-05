import React, { useEffect, useState } from 'react';

import { groupCategories } from 'utils/transformData';

import ListStyled, { ListItemStyled, ItemLabel } from './List.styled';

import { Item } from 'js/types';

type ListProps = {
	options: Array<Item>,
	id: string,
	dispatch: any
}

const List = ({ options, id, dispatch }: ListProps) => {
	const [checkedItems, setCheckedItems] = useState([]);

	useEffect(() => {
		dispatch({
			type: 'update',
			filterBy: checkedItems,
		});
	}, [checkedItems]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default List;
