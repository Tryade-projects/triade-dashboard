import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import ReactModal from "react-modal";
import filteredData from "../../utils/filteredData";
import ManageDashGrades from "../../components/ManageGradesDash/ManageDashGrades";
import { RanksContext } from "../../App";

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
 * @param {object[]} props.ranks - Array of ranks
 * @param {string} props.ranks._id - Id of the rank
 * @param {string} props.ranks.name - Name of the rank
 * @param {string} props.ranks.label - Label of the rank
 * @param {string} props.ranks.color - Color of the rank
 * @param {string[]} props.ranks.permissions - Permissions of the rank
 * @param {number} props.ranks.salary - Salary of the rank
 * @example
 * <RanksHome
 * ranks={[
 * {
 * _id: "1e926790-1b55-41d8-b719-63bf67268677",
 * name: "Cadet",
 * label: "Cadet",
 * color: "#FCC43E",
 * permissions: ["finance", "recruit", "chest"],
 * salary: 250,
 * },
 * {
 * _id: "1e926790-1b55-41d8-b719-63bf67268677",
 * name: "Commandant",
 * label: "Commandant",
 * color: "#DSS43E",
 *  permissions: ["finance", "recruit", "chest", "cloakrooms", "cloakroomsManagement", "garage", "garageManagement", "armory"],
 * salary: 10,
 * },
 * ]}
 * @returns {JSX.Element}
 */
const RanksHome = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentRank, setCurrentRank] = useState({
    label: "",
    _id: "",
  });
  const [nextRank, setNextRank] = useState({
    label: "",
  });

  const [search, setSearch] = useState("");

  const { ranks, setRanks } = useContext(RanksContext);
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

  console.log(ranks);

  const filteredRanks = filteredData(ranks, search, [
    "name",
    "label",
    "permissions",
  ]);
  return (
    <div className="ranksHome">
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
      <Header title="Grades" />
      <div className="containerRanks">
        {filteredRanks.length > 0 ? (
          filteredRanks.map((rank, i, ranks) => (
            <div className="rank" key={rank._id}>
              <div className="rankName" style={{ backgroundColor: rank.color }}>
                {rank.label}
              </div>
              <div className="rankPermissions">
                {rank.permissions?.join(", ")}
              </div>
              <div className="rankSalary">$ {rank.salary}</div>
              <button
                onClick={() => {
                  openModal();
                  setCurrentRank(rank);
                  setNextRank(ranks[i + 1]);
                }}
                className="rankDelete"
              >
                Supprimer
              </button>
            </div>
          ))
        ) : (
          <h2>Aucun grade n'a été trouvé</h2>
        )}
      </div>
    </div>
  );
};

// const RanksHome = ({ ranks }) => {
//   const [search, setSearch] = useState("");
//   return (
//     <>
//       <Header title={"Grades"} />
//       <div className="container-search-add">
//         <SearchBar search={search} setSearch={setSearch} />
//         <Link to="/ranks/addRank" className="flex">
//           <ButtonAdd />
//         </Link>
//       </div>
//       <ManageDashGrades search={search} />
//     </>
//   );
// };

export default RanksHome;
