import { screen } from '@testing-library/react';
import renderWithTheme from '__testHelpers__/renderWithTheme';

import Map from './Map';

const renderView = () => renderWithTheme(<Map />);

describe('Map', () => {
  it('should render the component', () => {
    renderView();

    expect(screen.getByText('Map View')).toBeInTheDocument();
  });
});
