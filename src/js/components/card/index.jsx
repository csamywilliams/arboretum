import React, { Suspense } from 'react';

import { trees } from 'js/trees';

import CardStyled from './Card.styled';

const Card = ({ data }) => {
	return (
		<CardStyled>
			<h2>{data.commonName}</h2>
			<p>{data.description}</p>
		</CardStyled>
	);
};

export default Card;
