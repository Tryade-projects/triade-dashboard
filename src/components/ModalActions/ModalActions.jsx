import React, { useState } from "react";
import ReactModal from "react-modal";
import ButtonForm from "../ButtonForm/ButtonForm";

const ModalActions = ({
  confirmText,
  action,
  span,
  modalIsOpen,
  setIsOpen,
  handleFired,
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "31%",
      height: "42%",
      padding: "0",
      border: "none",
      borderRadius: "20px",
      fontSize: "18px",
    },
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <h2 className="modalTitle">Confirmer l'action</h2>
      <div className="modalContainer">
        <p>
          Voulez vous vraiment <span className="colorRed">{action}</span>
          <span></span> <span className="bold">{span}</span> de votre entreprise
          ?
        </p>
        <p>Cette action sera irréversible.</p>
        <p>{confirmText}</p>
        <div className="modalButtons">
          <ButtonForm
            type="button"
            onClick={closeModal}
            className="modalButton"
            text="Annuler"
          />
          <ButtonForm
            type="button"
            onClick={handleFired}
            className="modalButton modalButtonValid"
            text="Valider"
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalActions;
