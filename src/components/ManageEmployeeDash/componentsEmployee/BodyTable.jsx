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
          <td>
            <div className="wrapper-flex-name-avatar">
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <p className="bold">
                {profil.firstName} {profil.lastName}
              </p>
            </div>
          </td>

          <td className="td-grade">
            <p style={{ background: profil.color }}>{profil.rank}</p>
          </td>

          <td className="td-date regular">{profil.employee_at}</td>
          <td className="td-phone regular">{profil.phone} </td>

          <td className="td-action">
            <div className="wrapper-type-actions">
              <ButtonTransaction icon={trending} alt={"image pour augmenter"} />
              <ButtonTransaction icon={decrease} alt={"image pour diminuer"} />
              <ButtonTransaction
                onClick={() => handleOpenModal(profil)}
                icon={fired}
                alt={"image pour virer"}
              />
            </div>
          </td>
          <td className="td-more">
            <Link to={`employee/detail/${profil.id}`} state={profil}>
              <div>
                <ButtonTransaction
                  icon={gear}
                  alt={"image de réglage pour avoir plus d'accès"}
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
