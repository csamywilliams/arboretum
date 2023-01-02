import { screen } from "@testing-library/react";

import renderWithTheme from "__testHelpers__/renderWithTheme";

import Modal from "./Modal";

const renderView = () =>
  renderWithTheme(
    <Modal modalIsOpen={true}>
      <p>Some content </p>
    </Modal>
  );

describe("Modal component", () => {
  beforeEach(renderView);

  it("should render the Modal component", () => {
    screen.getByText(/Some content/i);
  });
});
