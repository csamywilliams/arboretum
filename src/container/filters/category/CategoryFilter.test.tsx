import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryFilter from "./CategoryFilter";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import mockTrees from "__mocks__/testData";

const renderView = () => renderWithTheme(<CategoryFilter data={mockTrees} />);

describe("CategoryFilter", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("--Category--")).toBeInTheDocument();
  });

  it("should click the component", () => {
    renderView();

    userEvent.click(screen.getByText("--Category--"));
    expect(screen.getByText("acer")).toBeInTheDocument();
  });
});
