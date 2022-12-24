import { render, screen } from "@testing-library/react";
import Grid from "./Grid";
import renderWithTheme from "__testHelpers__/renderWithTheme";

const renderView = () => renderWithTheme(<Grid />);

describe("Grid", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText("Prunus cerasifera")).toBeInTheDocument();
  });
});
