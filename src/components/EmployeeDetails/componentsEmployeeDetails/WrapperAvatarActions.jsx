import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
import { useNavigate } from "react-router-dom";
import styles from "./_wrapperAvatarActions.module.scss";
// import avatar from "../../../assets/fake-avatar.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import gear from "../../../assets/gear.svg";
import DataContext from "../../../contexts/DataContext";
import ModalActions from "../../ModalActions/ModalActions";
import { deleteElmOnLocalStorage } from "../../../utils/arrayManager";

const WrapperAvatarActions = ({ profil }) => {
  const navigate = useNavigate();
  const { employees, setEmployees, ranks } = useContext(DataContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firedEmployee, setFiredEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });
console.log({profil})
  const handleIncrease = (profil) => {
    const newEmployeesList = employees.map((employee) => {
      if (employee.id === profil.id) {
        const indexRank = ranks.findIndex((rank) => rank.label === profil.rank);
        const nextRankIndex = Math.max(indexRank - 1, 0);
        return {
          ...employee,
          rank: ranks[nextRankIndex].label,
          color: ranks[nextRankIndex].color,
          indexRank: nextRankIndex,
        };
      }
      return employee;
    });

    setEmployees(newEmployeesList);
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));
  };

  const handleDecrease = (profil) => {
    const newEmployeesList = employees.map((t) => {
      if (t.id === profil.id) {
        const indexRank = ranks.findIndex((t) => t.label === profil.rank);
        const previousRankIndex = Math.min(indexRank + 1, ranks.length - 1);
        console.log(previousRankIndex);
        return {
          ...t,
          rank: ranks[previousRankIndex].label,
          color: ranks[previousRankIndex].color,
          indexRank: previousRankIndex,
        };
      }
      return t;
    });
    setEmployees(newEmployeesList);
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));
  };

  const handleFired = () => {
    deleteElmOnLocalStorage(firedEmployee, "employees");
    setEmployees((employee) => {
      const fired = employee.filter((fired) => fired.id !== firedEmployee.id);
      return fired;
    });
    setIsOpen(false);
    navigate("/employees");
  };

  const handleOpenModal = (profil) => {
    setIsOpen(true);
    setFiredEmployee({
      id: profil.id,
      firstName: profil.firstName,
      lastName: profil.lastName,
    });
  };
console.log(styles);
  return (
    <div className={styles.wrapperAvatar}>
      <ModalActions
        confirmText={"Tout licenciement abusif est pénalement sanctionnable"}
        action={"renvoyer"}
        span={`${firedEmployee.firstName} ${firedEmployee.lastName}  `}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleClick={handleFired}
      />
      <div className={styles.avatar}>
        <img src={profil.image} alt="" />
      </div>
      <div className={styles.actions}>
        <div>
          <ButtonTransaction
            icon={trending}
            alt={"Bouton pour promouvoir l'employé"}
            title={"Promouvoir"}
            onClick={() => handleIncrease(profil)}
            inactive={profil.indexRank === 0}
          />
        </div>
        <div>
          <ButtonTransaction
            icon={decrease}
            alt={"Bouton pour rétrograder l'employé"}
            title={"Rétrograder"}
            onClick={() => handleDecrease(profil)}
            inactive={profil.indexRank === ranks.length - 1}
          />
        </div>
        <div>
          <ButtonTransaction
            icon={fired}
            alt={"Bouton pour licensier l'employé"}
            title={"Licencier"}
            onClick={() => handleOpenModal(profil)}
          />
        </div>
        <div>
          <Link to={`/employees/employee/add/${profil.id}`} state={profil}>
            <ButtonTransaction
              icon={gear}
              alt={"Bouton pour voir les détails de l'employé"}
              title={"Modifier"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WrapperAvatarActions;
