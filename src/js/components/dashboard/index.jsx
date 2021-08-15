import React, { useState } from 'react';

import Banner from 'components/banner';
import Filters from 'components/filters';
import ViewList from 'components/view-list';

import ModalOverlay from 'components/modal';

import { trees } from 'js/trees';

import useFilter from 'hooks/useFilter';

import { ContentStyled, AsideStyled, MainStyled } from './Dashboard.styled';

const Dashboard = () => {
	const [initialItems] = useState(trees);
	const { state, dispatch } = useFilter(trees);
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

	return (
		<div>
			<ModalOverlay
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
				buttonProps={viewModalButtonProps}
			>
				<h1>{item.commonName}</h1>
				<h2>{`${item.botanicalName} (${item.category})`}</h2>
				<p>{item.description}</p>
			</ModalOverlay>
			<Banner />
			<ContentStyled>
				<AsideStyled>
					<Filters dispatch={dispatch} items={initialItems} />
				</AsideStyled>

				<MainStyled>
					<ViewList items={items} onClick={onItemClick} />
				</MainStyled>
			</ContentStyled>
		</div>
	);
};

export default Dashboard;
