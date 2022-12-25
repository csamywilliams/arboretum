import { screen } from "@testing-library/react";
import Card from "./Card";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import Category from "data/categories";
import mockTrees from "__mocks__/testData";

const [tree] = mockTrees;

const renderView = () => renderWithTheme(<Card tree={tree} />);

describe("Card", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText(tree.commonName)).toBeInTheDocument();
    expect(screen.getByText(tree.category)).toBeInTheDocument();
    expect(screen.getByText(tree.botanicalName)).toBeInTheDocument();
  });
});
