import { screen } from "@testing-library/react";
import Grid from "./Grid";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import mockFilter from "__mocks__/testFilters";
import mockTrees from "__mocks__/testData";

const renderView = () => renderWithTheme(<Grid data={mockTrees} />);

describe("Grid", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("Prunus cerasifera")).toBeInTheDocument();
  });
});
