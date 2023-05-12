import React, { useState, useContext } from "react";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
import ModalActions from "../../ModalActions/ModalActions";
import { Link } from "react-router-dom";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import avatar from "../../../assets/fake-avatar.svg";
import { deleteElmOnLocalStorage } from "../../../utils/arrayManager";
import { RanksContext } from "../../../App";
import { useStickyState } from "../../../utils/useStickyState";

const BodyTable = ({ profils, setEmployees }) => {
  const { ranks, setRanks } = useContext(RanksContext);
  console.log(ranks);

  const [employee, setEmployee] = useStickyState("employees", []);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [firedProfil, setFiredProfil] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  const handleOpenModal = (profil) => {
    setIsOpen(true);
    setFiredProfil({
      id: profil.id,
      firstName: profil.firstName,
      lastName: profil.lastName,
    });
  };

  const handleFired = () => {
    deleteElmOnLocalStorage(firedProfil, "employees");
    setEmployees((profil) => {
      const fired = profil.filter((fired) => fired.id !== firedProfil.id);
      return fired;
    });
    setIsOpen(false);
  };

  const handleIncrease = (profil) => {
    setEmployees((employess) =>
      employess.map((t) => {
        if (t.id === profil.id) {
          const indexRank = ranks.findIndex((t) => t.label === profil.rank);
          const nextRankIndex = Math.max(indexRank - 1, 0);
          return {
            ...t,
            id: profil.id,
            rank: ranks[nextRankIndex].label,
            color: ranks[nextRankIndex].color,
          };
        }
        return t;
      }),
    );
  };

  const handleDecrease = (profil) => {
    setEmployees((employess) =>
      employess.map((t) => {
        if (t.id === profil.id) {
          const indexRank = ranks.findIndex((t) => t.label === profil.rank);
          const nextRankIndex = Math.min(indexRank + 1, ranks.length);
          return {
            ...t,
            id: profil.id,
            rank: ranks[nextRankIndex].label,
            color: ranks[nextRankIndex].color,
          };
        }
        return t;
      }),
    );
  };

  return (
    <tbody>
      <ModalActions
        confirmText={"Tout licenciement abusif est pénalement sanctionnable"}
        action={"renvoyer"}
        span={`${firedProfil.firstName} ${firedProfil.lastName}  `}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleClick={handleFired}
      />
      {profils.map((profil) => (
        <tr key={profil.id}>
          <td className="tdName">
            <div className="wrapper-flex-name-avatar">
              <div>
                <img src={profil.image} alt="avatar" />
              </div>
              <p className="bold">
                {profil.firstName} {profil.lastName}
              </p>
            </div>
          </td>

          <td className="tdGrade">
            <p style={{ background: profil.color }}>{profil.rank}</p>
          </td>

          <td className="tdDate regular">{profil.employee_at}</td>
          <td className="tdPhone regular">{profil.phone} </td>

          <td className="tdAction">
            <div className="wrapper-type-actions">
              <ButtonTransaction
                icon={trending}
                alt={"Bouton pour promouvoir l'employé"}
                title={"Promouvoir"}
                onClick={() => handleIncrease(profil)}
              />

              <ButtonTransaction
                icon={decrease}
                alt={"Bouton pour rétrograder l'employé"}
                title={"Rétrograder"}
                onClick={() => handleDecrease(profil)}
              />

              <ButtonTransaction
                onClick={() => handleOpenModal(profil)}
                icon={fired}
                alt={"Bouton pour licensier l'employé"}
                title={"Licencier"}
              />
            </div>
          </td>
          <td className="tdMore">
            <Link to={`employee/detail/${profil.id}`} state={profil}>
              <div>
                <ButtonTransaction
                  icon={gear}
                  alt={"Bouton pour voir les détails de l'employé"}
                  title={"Détails"}
                />
              </div>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;
