import { screen } from '@testing-library/react';
import mockTrees from '__mocks__/testData';
import renderWithTheme from '__testHelpers__/renderWithTheme';

import Grid from './Grid';

const renderView = () => renderWithTheme(<Grid data={mockTrees} />);

describe('Grid', () => {
  it('should render the component', () => {
    renderView();

    expect(screen.getByText('Japanese Maple Garnet')).toBeInTheDocument();
  });
});
