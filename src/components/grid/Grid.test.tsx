import { screen } from "@testing-library/react";
import Grid from "./Grid";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import mockFilter from "__mocks__/testFilters";

const renderView = () => renderWithTheme(<Grid filters={mockFilter} />);

describe("Grid", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("Prunus cerasifera")).toBeInTheDocument();
  });
});
