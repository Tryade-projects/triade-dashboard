import React, { useState } from "react";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import deleteIcon from "../../../assets/deleteIcon.svg";
import Label from "../../Label/Label";
import ButtonActions from "../../ButtonActions/ButtonActions";
import ReactModal from "react-modal";
import ButtonForm from "../../ButtonForm/ButtonForm";

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

ReactModal.setAppElement("#root");

const BodyTableRanks = ({ currentRanks, setRanks }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentRank, setCurrentRank] = useState({
    label: "",
    _id: "",
  });
  const [nextRank, setNextRank] = useState({
    label: "",
  });
  console.log(currentRanks);

  const increaseRanks = () => {
    console.log("increase");
  };

  const decreaseRanks = () => {
    console.log("decrease");
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteRank = (id) => {
    // Récupérer les données actuelles de localStorage
    const currentData = JSON.parse(localStorage.getItem("ranks") || "[]");

    // Filtrer l'objet de données pour supprimer l'élément avec l'ID donné
    const updatedData = currentData.filter((rank) => rank._id !== id);

    // Mettre à jour les données de localStorage
    localStorage.setItem("ranks", JSON.stringify(updatedData));

    // Mettre à jour l'état React et fermer le modal
    setRanks(updatedData);
    closeModal();
  };

  const findNextRanks = (rank) => {
    const currentData = JSON.parse(localStorage.getItem("ranks") || "[]");
    const currentRankIndex = currentData.findIndex((r) => r._id === rank._id);
    const nextRank = currentData[currentRankIndex + 1];
    return nextRank;
  };

  return (
    <tbody>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2 className="modalTitle">Confirmer l'action</h2>
        <div className="modalContainer">
          <p>
            Voulez vous vraiment <span className="colorRed">supprimer</span> le
            grade <span className="bold">{currentRank.label}</span> de votre
            entreprise ?
          </p>
          <p>Cette action sera irréversible.</p>
          {nextRank && (
            <p>
              Les personnes ayant ce grade seront rétrogradées “{nextRank.label}
              ”
            </p>
          )}
          <div className="modalButtons">
            <ButtonForm
              type="button"
              onClick={closeModal}
              className="modalButton"
              text="Annuler"
            />
            <ButtonForm
              type="button"
              onClick={() => deleteRank(currentRank._id)}
              className="modalButton modalButtonValid"
              text="Valider"
            />
          </div>
        </div>
      </ReactModal>
      {currentRanks.map((rank, i, ranks) => (
        <tr key={rank._id}>
          <td className="th-name">
            <Label backgroundColor={rank.color} text={rank.label} />
          </td>

          <td>
            <p>{rank.permissions.join(", ")}</p>
          </td>

          <td>{rank.salary}</td>

          <td className="td-action">
            <div className="wrapper-type-actions">
              <ButtonActions
                icon={trending}
                alt="Augmente le grade"
                onClick={increaseRanks}
              />
              <ButtonActions
                icon={decrease}
                alt="Diminue le grade"
                onClick={decreaseRanks}
              />
              <ButtonActions
                icon={deleteIcon}
                alt="Supprime le grade"
                onClick={() => {
                  openModal();
                  setCurrentRank(rank);
                  setNextRank(findNextRanks(rank));
                }}
              />
            </div>
          </td>
          <td className="td-more">
            <div>
              <img src={gear} alt="Paramètres" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableRanks;
