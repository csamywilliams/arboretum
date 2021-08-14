import React, { useState } from 'react';

import Banner from 'components/banner';
import Filters from 'components/filters';
import ViewList from 'components/view-list';

import { trees } from 'js/trees';

import useFilter from 'hooks/useFilter';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
	const [initialItems] = useState(trees);
	const { state, dispatch } = useFilter(trees);

	const { items } = state;

	return (
		<div>
			<Banner />
			<ContentStyled>
				<AsideStyled>
					<Filters dispatch={dispatch} items={initialItems} />
				</AsideStyled>

				<MainStyled>
					<ViewList items={items} />
				</MainStyled>
			</ContentStyled>
		</div>
	);
};

export default Dashboard;
