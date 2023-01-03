import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from '__testHelpers__/renderWithTheme';
import Modal from 'react-modal';

import AddItem from './AddItem';

const renderView = () => renderWithTheme(<AddItem />);

describe('AddItem', () => {
  it('should render the component', () => {
    renderView();

    expect(
      screen.getByRole('button', { name: 'Add Tree' }),
    ).toBeInTheDocument();
  });

  it('should open the modal', async () => {
    renderView();

    const addTreeButton = screen.getByRole('button', { name: 'Add Tree' });

    expect(addTreeButton).toBeInTheDocument();

    userEvent.click(addTreeButton);

    expect(await screen.findByText('Botanical name:')).toBeInTheDocument();
  });

  it('should close the modal', async () => {
    renderView();

    const addTreeButton = screen.getByRole('button', { name: 'Add Tree' });

    expect(addTreeButton).toBeInTheDocument();

    userEvent.click(addTreeButton);

    expect(
      await screen.findByRole('button', { name: 'Close' }),
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Close' }));
  });
});
