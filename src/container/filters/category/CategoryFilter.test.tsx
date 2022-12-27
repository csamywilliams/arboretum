import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryFilter from "./CategoryFilter";
import renderWithTheme from "__testHelpers__/renderWithTheme";

const renderView = (mockDispatch = jest.fn()) =>
  renderWithTheme(<CategoryFilter dispatch={mockDispatch} />);

describe("CategoryFilter", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByLabelText("Category:")).toBeInTheDocument();
  });

  it("should click the component", async () => {
    const mockDispatch = jest.fn();
    renderView(mockDispatch);

    userEvent.click(screen.getByTestId("category-filter"));

    expect(screen.getByText(/acer/i)).toBeInTheDocument();
  });
});
