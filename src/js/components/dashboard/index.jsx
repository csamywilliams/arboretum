import React, { useState } from 'react';

import Banner from 'components/banner';
import Filters from 'components/filters';
import ViewList from 'components/view-list';

import { trees } from 'js/trees';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
	const [items, setItems] = useState(trees);
	const dispatch = () => {};

	return (
		<div>
			<Banner />
			<ContentStyled>
				<AsideStyled>
					<Filters dispatch={dispatch} items={items} />
				</AsideStyled>

				<MainStyled>
					<ViewList items={items} />
				</MainStyled>
			</ContentStyled>
		</div>
	);
};

export default Dashboard;
