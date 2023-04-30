import React, { useState } from "react";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import deleteIcon from "../../../assets/deleteIcon.svg";
import Label from "../../Label/Label";
import ButtonActions from "../../ButtonActions/ButtonActions";
import ReactModal from "react-modal";
import ButtonForm from "../../ButtonForm/ButtonForm";
import {
  increaseElm,
  decreaseElm,
  deleteElmOnLocalStorage,
  findNextElm,
  modifyArrayInLocalStorage,
} from "../../../utils/arrayManager";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

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
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentRank, setCurrentRank] = useState({
    label: "",
    id: "",
  });
  const [nextRank, setNextRank] = useState({
    label: "",
    color: "",
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
              className="modalButton backButtonCancelHover"
              text="Annuler"
            />
            <ButtonForm
              type="button"
              onClick={() => {
                setRanks(deleteElmOnLocalStorage(currentRank, "ranks"));
                modifyArrayInLocalStorage(
                  "employees",
                  "rank",
                  currentRank.label,
                  { rank: nextRank.label, color: nextRank.color },
                );
                closeModal();
              }}
              className="modalButton modalButtonValid"
              text="Valider"
            />
          </div>
        </div>
      </ReactModal>
      {currentRanks.map((rank) => (
        <tr key={rank.id}>
          <td className="thNameGrade">
            <Label backgroundColor={rank.color} text={rank.label} />
          </td>

          <td className="tdPermission">
            <p>{rank.permissions.join(", ")}</p>
          </td>

          <td className="tdSalary">$ {rank.salary}</td>

          <td className="tdAction">
            <div className="buttonsActionsWrapper wrapper-type-actions">
              <ButtonActions
                icon={trending}
                alt="Bouton pour augmenter la hiérarchie du grade"
                title={"Augmenter"}
                onClick={() => setRanks(increaseElm(rank, "ranks"))}
              />
              <ButtonActions
                icon={decrease}
                alt="Bouton pour diminuer la hiérarchie du grade"
                title={"Diminuer"}
                onClick={() => setRanks(decreaseElm(rank, "ranks"))}
              />
              <ButtonActions
                icon={deleteIcon}
                alt="Bouton pour supprimer le grade"
                title={"Supprimer"}
                onClick={() => {
                  openModal();
                  setCurrentRank(rank);
                  setNextRank(findNextElm(rank, "ranks"));
                }}
              />
            </div>
          </td>
          <td className="tdMore">
            <div>
              <ButtonActions
                icon={gear}
                alt={"Bouton pour voir les détails du grade"}
                title={"Détails"}
                onClick={() => {
                  navigate(`/ranks/rank/${rank.id}`);
                }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableRanks;
