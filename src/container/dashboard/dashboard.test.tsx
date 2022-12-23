import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';
import renderWithTheme from '__testHelpers__/renderWithTheme';

const renderView = () => renderWithTheme(<Dashboard />);

describe("Dashboard", () => {
    it("should render the component", () => {
        renderView();

        expect(screen.getByText('The Arboretum')).toBeInTheDocument();
    });
});