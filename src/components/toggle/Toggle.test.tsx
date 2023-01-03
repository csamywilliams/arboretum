import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithTheme from '__testHelpers__/renderWithTheme';

import Toggle from './Toggle';

const renderView = () =>
  renderWithTheme(
    <Toggle SideA={<div>View 1</div>} SideB={<div>View 2</div>} />,
  );

describe('Toggle', () => {
  it('should render the component', () => {
    renderView();

    expect(screen.getByText('View 1')).toBeInTheDocument();
    expect(screen.queryByText('View 2')).not.toBeInTheDocument();
  });

  it('should click the toggle and change view', async () => {
    renderView();

    expect(screen.getByText('View 1')).toBeInTheDocument();

    const toggleCheckbox = screen.getByRole('checkbox', {
      name: /grid view map view/i,
    });

    expect(toggleCheckbox).toBeInTheDocument();
    expect(screen.queryByText('View 2')).not.toBeInTheDocument();

    userEvent.click(toggleCheckbox);

    expect(await screen.findByText('View 2')).toBeInTheDocument();
    expect(screen.queryByText('View 1')).not.toBeInTheDocument();
  });
});
