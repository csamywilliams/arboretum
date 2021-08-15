import React, { useState, useReducer } from 'react';

import Banner from 'components/banner';
import Button from 'components/button';
import Filters from 'components/filters';
import ViewList from 'components/view-list';
import AddItem from 'components/add-item';
import ModalOverlay from 'components/modal';

import itemsReducer from 'reducers/itemsReducer';

import { sortItemsAlphabetically } from 'utils/transformData';
import trees from 'js/trees';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
    const [state, dispatch] = useReducer(itemsReducer, { items: sortItemsAlphabetically(trees) });
    const [addModalIsOpen, setAddModalIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [item, setItem] = useState({});

    const { items } = state;

    const onItemClick = (item) => {
        setItem(item);
        setModalIsOpen(true);
    };

    const viewModalButtonProps = {
        buttonText: 'Close',
        onButtonClick() {},
        buttonAriaLabel: 'Close modal',
    };

    const addModalButtonProps = {
        buttonText: 'Add',
        onButtonClick() {},
        buttonAriaLabel: 'Add item',
    };

    const addItem = () => {
        setAddModalIsOpen(true);
    };

    return (
        <div>
            <Banner>
                <Button text="Add" onClick={addItem} ariaLabel="Add a tree" primary />
            </Banner>
            <ContentStyled>
                <AsideStyled>
                    <Filters dispatch={dispatch} items={items} />
                </AsideStyled>

                <MainStyled>
                    <ViewList items={items} onClick={onItemClick} />
                </MainStyled>
            </ContentStyled>
            <ModalOverlay
                modalIsOpen={addModalIsOpen}
                setModalIsOpen={setAddModalIsOpen}
                buttonProps={addModalButtonProps}
            >
                <AddItem addDispatch={dispatch} modalIsOpen={setAddModalIsOpen} />
            </ModalOverlay>
            <ModalOverlay modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} buttonProps={viewModalButtonProps}>
                <h1>{item.commonName}</h1>
                <h2>{`${item.botanicalName} (${item.category})`}</h2>
                <p>{item.description}</p>
                <Button text="Close" ariaLabel="close modal" onClick={() => setModalIsOpen(false)} />
            </ModalOverlay>
        </div>
    );
};

export default Dashboard;
