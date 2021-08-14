import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { truncateWords } from 'utils/stringUtils';

import CardStyled, { CardImage } from './Card.styled';

const Card = ({ data }) => {
	const filename = data.botanicalName.replace(/\s+/g, '-').toLowerCase();
	const imageSrc = `../${filename}.png`;

	return (
		<CardStyled>
			<Suspense fallback={<p>Loading image...</p>}>
				<CardImage src={imageSrc} alt={`Image of ${data.commonName}`} />
			</Suspense>
			<h2>{data.commonName}</h2>
			<p>{truncateWords(data.description)}</p>
		</CardStyled>
	);
};

Card.propTypes = {
	data: PropTypes.shape().isRequired,
};

export default Card;
