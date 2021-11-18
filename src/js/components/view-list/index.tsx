import React, { Suspense } from 'react';

import Card from 'components/card';

import ViewListStyled from './ViewList.styled';

import { Item } from 'js/types';

type ViewListProps = {
    items: Array<Item>,
    onClick: any,
}

const ViewList = ({ items, onClick }: ViewListProps) => {
    return (
        <ViewListStyled>
            <Suspense fallback={<h2>Loading trees...</h2>}>
                {items.map((tree) => (
                    <Card key={tree.botanicalName} data={tree} onClick={onClick} />
                ))}
            </Suspense>
        </ViewListStyled>
    );
};

export default ViewList;
