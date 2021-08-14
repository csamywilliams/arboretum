import React from 'react';
import Button from 'components/button';

import BannerStyled, { Title, Actions } from './Banner.styled';

const Banner = () => {
	const addItem = () => {};

	const viewItems = () => {};

	return (
		<BannerStyled>
			<Title>The Arboretum</Title>

			<Actions>
				<Button
					text="Add"
					onClick={addItem}
					ariaLabel="Add a tree"
					primary
				/>
				<Button
					text="View trees"
					onClick={viewItems}
					ariaLabel="View all trees"
				/>
			</Actions>
		</BannerStyled>
	);
};

export default Banner;
