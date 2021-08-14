import React from 'react';

import CardStyled, { CardImage } from './Card.styled';

import tree from 'assets/acer.jpg';

const Card = ({ data }) => {
	return (
		<CardStyled>
			<CardImage src={tree} />

			<h2>{data.commonName}</h2>
			<p>{data.description}</p>
		</CardStyled>
	);
};

export default Card;
