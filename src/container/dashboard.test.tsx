import { render, screen } from '@testing-library/react';
import Dashboard from './dashboard';

const renderView = () => render(<Dashboard />);

describe("Dashboard", () => {
    it("should render the component", () => {
        renderView();

        expect(screen.getByText('hi')).toBeInTheDocument();
    });
});