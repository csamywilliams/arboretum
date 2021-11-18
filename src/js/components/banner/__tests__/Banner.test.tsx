import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Banner from '..';

const setup = () =>
    renderWithTheme(
        <Banner>
            <p>some text</p>
        </Banner>
    );

describe('Banner component', () => {
    beforeEach(setup);

    it('should render the banner component', () => {
        screen.getByRole('heading', {
            name: /the arboretum/i,
        });

        screen.getByText(/some text/i);
    });
});
