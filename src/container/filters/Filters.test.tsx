import { screen } from "@testing-library/react";
import Filters from "./Filters";
import renderWithTheme from "__testHelpers__/renderWithTheme";

const renderView = () => renderWithTheme(<Filters />);

describe("Filters", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("Category:")).toBeInTheDocument();
  });
});
