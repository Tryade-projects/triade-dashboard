import React, { useState } from "react";
import ReactModal from "react-modal";
import ButtonForm from "../ButtonForm/ButtonForm";

const ModalActions = ({
  confirmText,
  action,
  span,
  modalIsOpen,
  setModalIsOpen,
  handleClick,
}) => {
  const closeModal = () => {
    setModalIsOpen(false);
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
      fontSize: "0.94vw",
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
        {span === "amélioration" ? (
          <p>
            Voulez vous vraiment <span className="colorGreen">{action} </span>
            cette <span className="bold">{span}</span> pour votre entreprise ?
          </p>
        ) : (
          <p>
            Voulez vous vraiment <span className="colorRed">{action}</span>
            <span></span> <span className="bold">{span}</span> de votre
            entreprise ?
          </p>
        )}

        <p>Cette action sera irréversible.</p>
        <p>{confirmText}</p>
        <div className="modalButtons">
          <ButtonForm
            type="button"
            onClick={closeModal}
            className="modalButton colorPurple backWhite backButtonCancelHover"
            text="Annuler"
          />
          <ButtonForm
            type="button"
            onClick={handleClick}
            className="modalButton modalButtonValid colorWhite backPurple"
            text="Valider"
          />
        </div>
      </div>
    </ReactModal>
  );
};

export default ModalActions;
