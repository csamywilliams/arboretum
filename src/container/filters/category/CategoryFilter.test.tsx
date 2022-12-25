import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryFilter from "./CategoryFilter";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import mockFilter from "__mocks__/testFilters";

const renderView = () =>
  renderWithTheme(<CategoryFilter filters={mockFilter} setFilters={jest.fn} />);

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
