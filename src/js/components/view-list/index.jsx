import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Card from 'components/card';

import ViewListStyled from './ViewList.styled';

const ViewList = ({ items, onClick }) => {
	return (
		<ViewListStyled>
			<Suspense fallback={<h2>Loading trees...</h2>}>
				{items.map((tree) => (
					<Card
						key={tree.botanicalName}
						data={tree}
						onClick={onClick}
					/>
				))}
			</Suspense>
		</ViewListStyled>
	);
};

ViewList.defaultProps = {
	onClick() {},
};

ViewList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape).isRequired,
	onClick: PropTypes.func,
};

export default ViewList;
