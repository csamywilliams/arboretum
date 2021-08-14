import React, { Suspense } from 'react';

import Banner from 'components/banner';
import VerticalList from 'components/vertical-list';

import { trees } from 'js/trees';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
	return (
		<div>
			<Banner />
			<ContentStyled>
				<Suspense fallback={<h2>Loading profile...</h2>}>
					<AsideStyled>
						<VerticalList data={trees} />
					</AsideStyled>
				</Suspense>
				<MainStyled></MainStyled>
			</ContentStyled>
		</div>
	);
};

export default Dashboard;
