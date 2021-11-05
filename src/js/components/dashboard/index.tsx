import React, { useState } from 'react';

import Banner from 'components/banner';
import Button from 'components/button';
import Filters from 'components/filters';
import ViewList from 'components/view-list';
import AddItem from 'components/add-item';
import ModalOverlay from 'components/modal';

import useItems from 'hooks/useItems';

import trees from 'js/trees';

import { Item } from 'js/types';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
    const { state, dispatch, originalItems } = useItems(trees);
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [item, setItem] = useState<Item>({
        botanicalName: "",
        commonName: "",
        category: "",
        description: ""
    });

    const { items } = state;

    const onItemClick = (item: Item) => {
        setItem(item);
        setModalIsOpen(true);
    };

    const addItem = () => setAddModalIsOpen(true);

    return (
        <div>
            <Banner> 
                <Button text="Add" onClick={addItem} ariaLabel="Add a tree" primary />
            </Banner>
            <ContentStyled>
                <AsideStyled>
                    <Filters dispatch={dispatch} items={originalItems.items} />
                </AsideStyled>

                <MainStyled>
                    <ViewList items={items} onClick={onItemClick} />
                </MainStyled>
            </ContentStyled>
            <ModalOverlay modalIsOpen={addModalIsOpen}>
                <AddItem addDispatch={dispatch} modalIsOpen={setAddModalIsOpen} />
            </ModalOverlay>
            <ModalOverlay modalIsOpen={modalIsOpen}>
                <h1 data-test-id={`modal-item-${item.commonName}`}>{item.commonName}</h1>
                <h2>{`${item.botanicalName} (${item.category})`}</h2>
                <p>{item.description}</p>
                <Button text="Close" disabled={false} ariaLabel="close modal" onClick={() => setModalIsOpen(false)} />
            </ModalOverlay> 
        </div>
    );
};

export default Dashboard;
