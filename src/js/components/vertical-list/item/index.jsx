import React from 'react';
import PropTypes from 'prop-types';

import ItemStyled from './Item.styled';

const Item = ({ item, ariaLabel }) => (
	<ItemStyled ariaLabel={ariaLabel}>{item.commonName}</ItemStyled>
);

Item.defaultProps = {
	ariaLabel: '',
};

Item.propTypes = {
	ariaLabel: PropTypes.string,
};

export default Item;
