import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "30vw",
    height: "50vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

type OverlayProps = {
  children: React.ReactNode;
  modalIsOpen: boolean;
};

Modal.setAppElement("#root");

const ModalOverlay = ({ children, modalIsOpen }: OverlayProps) => {
  const isTest = process.env.NODE_ENV === "test";

  return (
    <Modal
      isOpen={modalIsOpen}
      contentLabel="Modal"
      style={customStyles}
      ariaHideApp={!isTest}
    >
      <div>{children}</div>
    </Modal>
  );
};

export default ModalOverlay;
