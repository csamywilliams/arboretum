import { screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import renderWithTheme from "__testHelpers__/renderWithTheme";

const renderView = () => renderWithTheme(<Dashboard />);

describe("Dashboard", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("The Arboretum")).toBeInTheDocument();
  });

  describe("Filters", () => {
    it("should filter a single category", () => {
      renderView();

      expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    });
  });
});
