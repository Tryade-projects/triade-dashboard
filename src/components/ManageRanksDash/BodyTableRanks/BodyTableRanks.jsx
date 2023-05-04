import React, { useState, useContext } from "react";
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
import { useNavigate } from "react-router-dom";
import DataContext from "../../../contexts/DataContext";

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

/**
 *
 * @param {object} props
 * @param {object} props.currentRanks - current ranks
 * @param {function} props.setRanks - set ranks
 * @param {array} props.ranks - all ranks
 * @returns {JSX.Element}
 */
const BodyTableRanks = ({ currentRanks, setRanks, ranks }) => {
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

  const { setEmployees } = useContext(DataContext);
  const { BEST_RANK, WORST_RANK } = useContext(DataContext).constants;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const unchangeableGradesBoolean = (rank) =>
    [BEST_RANK, WORST_RANK].includes(rank.name);
  const unincreaseRanks = (rank, ranks) => ranks.indexOf(rank) === 1;
  const undecreaseRanks = (rank, ranks) =>
    ranks.indexOf(rank) === ranks.length - 2;

  /**
   *
   * @param {object} rank - rank object
   * @param {string} action - action to do
   * @param {array} ranks - all ranks
   * @returns {import("react").MouseEventHandler<HTMLButtonElement>|undefined}
   */
  function actionClick(rank, action, ranks) {
    if (unchangeableGradesBoolean(rank)) return undefined;
    if (action === "decrease" && !undecreaseRanks(rank, ranks)) {
      return () => setRanks(decreaseElm(rank, "ranks"));
    } else if (action === "increase" && !unincreaseRanks(rank, ranks)) {
      return () => setRanks(increaseElm(rank, "ranks"));
    } else if (action === "delete") {
      return () => {
        openModal();
        setCurrentRank(rank);
        setNextRank(findNextElm(rank, "ranks"));
      };
    } else if (action === "modify") {
      navigate(`/ranks/rank/${rank.id}`);
    }
  }

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
                setEmployees(
                  JSON.parse(localStorage.getItem("employees") || "[]"),
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
                onClick={actionClick(rank, "increase", ranks)}
                inactive={
                  unchangeableGradesBoolean(rank) ||
                  unincreaseRanks(rank, ranks)
                }
              />
              <ButtonActions
                icon={decrease}
                alt="Bouton pour diminuer la hiérarchie du grade"
                title={"Diminuer"}
                onClick={actionClick(rank, "decrease", ranks)}
                inactive={
                  unchangeableGradesBoolean(rank) ||
                  undecreaseRanks(rank, ranks)
                }
              />
              <ButtonActions
                icon={deleteIcon}
                alt="Bouton pour supprimer le grade"
                title={"Supprimer"}
                onClick={actionClick(rank, "delete", ranks)}
                inactive={unchangeableGradesBoolean(rank)}
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
                  actionClick(rank, "modify", ranks);
                }}
                inactive={unchangeableGradesBoolean(rank)}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTableRanks;
