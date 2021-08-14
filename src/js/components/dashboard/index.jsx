import React, { useState } from 'react';

import Banner from 'components/banner';
import VerticalList from 'components/vertical-list';
import ViewList from 'components/view-list';

import { trees } from 'js/trees';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
	const [items, setItems] = useState(trees);

	return (
		<div>
			<Banner />
			<ContentStyled>
				<AsideStyled />

				<MainStyled>
					<ViewList items={items} />
				</MainStyled>
			</ContentStyled>
		</div>
	);
};

export default Dashboard;
