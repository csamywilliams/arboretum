import { render, screen } from "@testing-library/react";
import Card from "./Card";
import renderWithTheme from "__testHelpers__/renderWithTheme";
import Category from "data/categories";

const tree = {
  botanicalName: "Acer palmatum dissectum 'Garnet'",
  commonName: "Japanese Maple Garnet",
  category: Category.ACER,
  description: "Acer palmatum dissectum 'Garnet' has feathery leaf.",
};

const renderView = () => renderWithTheme(<Card tree={tree} />);

describe("Card", () => {
  it("should render the component", () => {
    renderView();

    expect(screen.getByText(tree.commonName)).toBeInTheDocument();
    expect(screen.getByText(tree.category)).toBeInTheDocument();
    expect(screen.getByText(tree.botanicalName)).toBeInTheDocument();
  });
});
