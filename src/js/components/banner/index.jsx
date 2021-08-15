import React from 'react';
import PropTypes from 'prop-types';

import BannerStyled, { Title, Actions } from './Banner.styled';

const Banner = ({ children }) => {
    return (
        <BannerStyled>
            <Title>The Arboretum</Title>

            <Actions>{children}</Actions>
        </BannerStyled>
    );
};

Banner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Banner;
