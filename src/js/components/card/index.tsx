import React, { Suspense } from 'react';

import { truncateWords } from 'utils/stringUtils';
import { hyphenateWord } from 'utils/transformData';

import CardStyled, { CardImage } from './Card.styled';

import { Item } from 'js/types';

type Props = {
    data: Item,
    onClick: any,
};

const Card = ({ data, onClick }: Props) => {
    const { botanicalName, commonName, description } = data;
    const filename = hyphenateWord(botanicalName);

    return (
        <CardStyled onClick={() => onClick(data)} data-test-id={`item-${hyphenateWord(commonName)}`}>
            <Suspense fallback={<p>Loading image...</p>}>
                <CardImage src={`/images/${filename}.png`} alt={`Image of ${commonName}`}  onError={(e: any) => e.target.src = '/images/placeholder.png'} />
            </Suspense>
            <h2>{commonName}</h2>
            <p>{truncateWords(description)}</p>
        </CardStyled>
    );
};

export default Card;
