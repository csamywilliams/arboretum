import { FC, useState } from "react";
import ModalOverlay from "components/modal/Modal";

const AddItem: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const onClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <button onClick={onClick}>Add Tree</button>
      <ModalOverlay modalIsOpen={modalIsOpen}>
        <form>
          <section>
            <label htmlFor="commonName">Common name: </label>
            <input type="text" name="commonName" id="commonName" required />
          </section>
          <section>
            <label htmlFor="botanicalName">Botanical name: </label>
            <input
              type="text"
              name="botanicalName"
              id="botanicalName"
              required
            />
          </section>
          <section>
            <input type="submit" value="Add Tree" />
          </section>
        </form>
        <button onClick={closeModal}>Close</button>
      </ModalOverlay>
    </>
  );
};

export default AddItem;
