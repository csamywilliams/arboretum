import React, { Suspense, useCallback } from 'react';
import PropTypes from 'prop-types';

import { truncateWords } from 'utils/stringUtils';
import { hyphenateWord } from 'utils/transformData';
import { importAll } from 'utils/imageUtils';

import CardStyled, { CardImage } from './Card.styled';

import placeholderImg from 'assets/placeholder.png';

const Card = ({ data, onClick }) => {
    const filename = hyphenateWord(data.botanicalName);

    const context = useCallback(() => importAll(require.context('assets/images', false, /.png$/i)), []);

    const img = context()[`${filename}.png`] || placeholderImg;

    return (
        <CardStyled onClick={() => onClick(data)} data-test-id={`item-${hyphenateWord(data.commonName)}`}>
            <Suspense fallback={<p>Loading image...</p>}>
                <CardImage src={img} alt={`Image of ${data.commonName}`} />
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
