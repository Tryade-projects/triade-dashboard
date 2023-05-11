import React, { useState, useContext } from "react";
import ButtonActions from "../../ButtonActions/ButtonActions";
import ModalActions from "../../ModalActions/ModalActions";
import { Link } from "react-router-dom";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import { deleteElmOnLocalStorage } from "../../../utils/arrayManager";
import DataContext from "../../../contexts/DataContext";

const BodyTable = ({ currentEmployees, setEmployees }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firedEmployee, setFiredEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
  });

  // const { ranks } = useContext(DataContext);
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
                alt="Bouton pour promouvoir l'employé"
                title="Promouvoir"
              />

              <ButtonActions
                icon={decrease}
                alt="Bouton pour rétrograder l'employé"
                title="Rétrograder"
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
