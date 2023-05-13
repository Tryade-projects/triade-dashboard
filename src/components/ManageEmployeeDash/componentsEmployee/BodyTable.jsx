import React, { useState, useContext, useRef } from "react";
import ButtonActions from "../../ButtonActions/ButtonActions";
import ModalActions from "../../ModalActions/ModalActions";
import { Link } from "react-router-dom";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import { deleteElmOnLocalStorage } from "../../../utils/arrayManager";
import DataContext from "../../../contexts/DataContext";

const BodyTable = ({
  currentEmployees,
  setEmployees,
  setPage,
  setCurrentPage,
}) => {
  const { ranks, setRanks, employees } = useContext(DataContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firedEmployee, setFiredEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  // const { BEST_RANK, WORST_RANK } = useContext(DataContext).constants;

  const handleOpenModal = (employee) => {
    setIsOpen(true);
    setFiredEmployee({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
    });
  };

  const handleFired = () => {
    deleteElmOnLocalStorage(firedEmployee, "employees");
    setEmployees((employee) => {
      const fired = employee.filter((fired) => fired.id !== firedEmployee.id);
      return fired;
    });
    setIsOpen(false);
    setPage(1);
    setCurrentPage(1);
  };

  const handleIncrease = (profil) => {
    const newEmployeesList = employees.map((t) => {
      if (t.id === profil.id) {
        const indexRank = ranks.findIndex((t) => t.label === profil.rank);
        const nextRankIndex = Math.max(indexRank - 1, 0);

        return {
          ...t,
          rank: ranks[nextRankIndex].label,
          color: ranks[nextRankIndex].color,
        };
      }
      return t;
    });

    setEmployees(newEmployeesList);
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));
  };

  const handleDecrease = (profil) => {
    const newEmployeesList = employees.map((t) => {
      if (t.id === profil.id) {
        const indexRank = ranks.findIndex((t) => t.label === profil.rank);
        const previousRankIndex = Math.min(indexRank + 1, ranks.length - 1);
        // if (previousRankIndex === ranks.length - 1)
        return {
          ...t,
          rank: ranks[previousRankIndex].label,
          color: ranks[previousRankIndex].color,
        };
      }
      return t;
    });
    setEmployees(newEmployeesList);
    localStorage.setItem("employees", JSON.stringify(newEmployeesList));
  };

  return (
    <tbody>
      <ModalActions
        confirmText={"Tout licenciement abusif est pénalement sanctionnable"}
        action={"renvoyer"}
        span={`${firedEmployee.firstName} ${firedEmployee.lastName}  `}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        handleClick={handleFired}
      />
      {currentEmployees.map((employee) => (
        <tr key={employee.id}>
          <td className="tdName">
            <div className="wrapper-flex-name-avatar">
              <div>
                <img src={employee.image} alt="avatar" />
              </div>
              <p className="bold">
                {employee.firstName} {employee.lastName}
              </p>
            </div>
          </td>

          <td className="tdGrade">
            <p style={{ background: employee.color }}>{employee.rank}</p>
          </td>

          <td className="tdDate regular">{employee.employee_at}</td>
          <td className="tdPhone regular">{employee.phone} </td>

          <td className="tdAction">
            <div className="wrapper-type-actions">
              <ButtonActions
                icon={trending}
                onClick={() => handleIncrease(employee)}
                alt="Bouton pour promouvoir l'employé"
                title="Promouvoir"
                inactive={employee.rank === "Boss" ? true : false}
              />

              <ButtonActions
                icon={decrease}
                onClick={() => handleDecrease(employee)}
                alt="Bouton pour rétrograder l'employé"
                title="Rétrograder"
                inactive={employee.rank === "Recrue" ? true : false}
              />

              <ButtonActions
                onClick={() => handleOpenModal(employee)}
                icon={fired}
                alt="Bouton pour licensier l'employé"
                title="Licencier"
              />
            </div>
          </td>
          <td className="tdMore">
            <Link to={`employee/detail/${employee.id}`} state={employee}>
              <div>
                <ButtonActions
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
