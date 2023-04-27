import React, { useState } from "react";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
import ModalActions from "../../ModalActions/ModalActions";
import { Link } from "react-router-dom";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import avatar from "../../../assets/fake-avatar.svg";

const BodyTable = ({ profils, setEmployees }) => {
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
    setEmployees((profil) => {
      const fired = profil.filter((fired) => fired.id !== firedProfil.id);
      return fired;
    });
    setIsOpen(false);
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
                <img src={avatar} alt="avatar" />
              </div>
              <p className="bold">
                {profil.firstName} {profil.lastName}
              </p>
            </div>
          </td>

          <td className="tdGrade">
            <p style={{ background: profil.colorRank }}>{profil.rank}</p>
          </td>

          <td className="tdDate regular">{profil.employee_at}</td>
          <td className="tdPhone regular">{profil.phone} </td>

          <td className="tdAction">
            <div className="wrapper-type-actions">
              <ButtonTransaction 
                icon={trending} 
                alt={"Bouton pour promouvoir l'employé"}
                title={"Promouvoir"}  />

              <ButtonTransaction 
                icon={decrease} 
                alt={"Bouton pour rétrograder l'employé"}
                title={"Rétrograder"} />
                
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
