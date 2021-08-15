import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { truncateWords } from 'utils/stringUtils';
import { hyphenateWord } from 'utils/transformData';

import CardStyled, { CardImage } from './Card.styled';

import placeholderImg from 'assets/placeholder.png';

const Card = ({ data, onClick }) => {
    const filename = hyphenateWord(data.botanicalName);

    const imageSrc = `../${filename}.png`;

    return (
        <CardStyled onClick={() => onClick(data)} data-test-id={`item-${hyphenateWord(data.commonName)}`}>
            <Suspense fallback={<p>Loading image...</p>}>
                <CardImage src={placeholderImg} alt={`Image of ${data.commonName}`} />
            </Suspense>
            <h2>{data.commonName}</h2>
            <p>{truncateWords(data.description)}</p>
        </CardStyled>
    );
};

/* istanbul ignore next */
Card.defaultProps = {
    onClick() {},
};

Card.propTypes = {
    data: PropTypes.shape().isRequired,
    onClick: PropTypes.func,
};

export default Card;
