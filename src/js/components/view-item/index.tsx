import React, {Fragment} from 'react';

import Button from 'components/button';

import { Item } from 'js/types';

type ViewItemProps = {
    item: Item,
    setModalState: any
}

const ViewItem = ({ item, setModalState }: ViewItemProps) => {
    const { commonName, botanicalName, description, category } = item;

    return (
        <Fragment>
            <h1 data-test-id={`modal-item-${commonName}`}>{commonName}</h1>
            <h2>{`${botanicalName} (${category})`}</h2>
            <p>{description}</p>
            <Button text="Close" disabled={false} ariaLabel="close modal" onClick={() => setModalState(false)} />
        </Fragment>
    );
};

export default ViewItem;
