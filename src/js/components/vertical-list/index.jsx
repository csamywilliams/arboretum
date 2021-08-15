import React from 'react';
import PropTypes from 'prop-types';

import VerticalListStyled from './VerticalList.styled';

import Item from './item';

const VerticalList = ({ data, ariaLabel }) => (
    <VerticalListStyled ariaLabel={ariaLabel}>
        {data.map((tree) => (
            <Item key={tree.botanicalName} item={tree} />
        ))}
    </VerticalListStyled>
);

/* istanbul ignore next */
VerticalList.defaultProps = {
    ariaLabel: '',
};

VerticalList.propTypes = {
    ariaLabel: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default VerticalList;
