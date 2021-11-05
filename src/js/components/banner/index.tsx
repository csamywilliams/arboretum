import React from 'react';

import BannerStyled, { Title, Actions } from './Banner.styled';

type BannerProps = {
    children: React.ReactNode,
};

const Banner = ({ children }: BannerProps) => {
    return (
        <BannerStyled>
            <Title>The Arboretum</Title>

            <Actions>{children}</Actions>
        </BannerStyled>
    );
};

export default Banner;
