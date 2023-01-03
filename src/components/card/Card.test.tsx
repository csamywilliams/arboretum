import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockTrees from '__mocks__/testData';
import renderWithTheme from '__testHelpers__/renderWithTheme';

import Card from './Card';

const [tree] = mockTrees;

const renderView = () => renderWithTheme(<Card tree={tree} />);

describe('Card', () => {
  it('should render the component', () => {
    renderView();

    expect(screen.getByText(tree.commonName)).toBeInTheDocument();
    expect(screen.getByText(tree.category)).toBeInTheDocument();
    expect(screen.getByText(tree.botanicalName)).toBeInTheDocument();
  });

  it('should flip back and for', async () => {
    renderView();

    expect(screen.getByText(tree.commonName)).toBeInTheDocument();
    expect(screen.getByText(tree.botanicalName)).toBeInTheDocument();

    userEvent.click(screen.getByText(tree.commonName));

    expect(await screen.findByText(tree.description)).toBeInTheDocument();

    userEvent.click(screen.getByText(tree.description));

    expect(await screen.findByText(tree.botanicalName)).toBeInTheDocument();
    expect(screen.queryByText(tree.description)).not.toBeInTheDocument();
  });
});
