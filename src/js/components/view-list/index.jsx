import React, { Suspense } from 'react';

import Card from 'components/card';

import { trees } from 'js/trees';

import ViewListStyled from './ViewList.styled';

const ViewList = () => {
	return (
		<ViewListStyled>
			<Suspense fallback={<h2>Loading trees...</h2>}>
				{trees.map((tree) => (
					<Card key={tree.botanicalName} data={tree} />
				))}
			</Suspense>
		</ViewListStyled>
	);
};

export default ViewList;
