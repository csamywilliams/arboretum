import React from 'react';
import { screen } from '@testing-library/react';

import renderWithTheme from '__testHelpers__/renderWithTheme';

import Modal from '..';

const setup = () =>
    renderWithTheme(
        <Modal modalIsOpen={true}>
            <p>Some content </p>
        </Modal>
    );

describe('Modal component', () => {
    beforeEach(setup);
    
    it('should render the Modal component', () => {
        screen.getByText(/Some content/i);
    });
});
