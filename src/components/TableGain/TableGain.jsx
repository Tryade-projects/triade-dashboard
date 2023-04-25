import React, { useEffect, useState } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import FormatIcon from "../FormatIcon/FormatIcon";
import { useStickyState } from "../../utils/useStickyState";
import user from "../../assets/User.svg";

const INFO_PER_PAGE = 5;

/**
 * Component représentant le tableau de données de gain de l'employé
 * @param {object} props - Les props passés au composant
 * @param {array} props.list - Les données de gain déclarées par les employés
 * @returns {JSX.Element} - Le composant du tableau de gains
 */
const TableGain = ({ list }) => {
  const [rows, setRows] = useState([]);
  const [employees, setEmployees] = useStickyState("employees", []);

  const _DATA = usePagination(list, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, []);

  const displayRows = (list) => {
    // console.log("list", list);
    //Vérification si list et employees ne sont pas vides
    if (list && list.length > 0 && employees.length > 0) {
      // console.log("employees", employees);
      return list.map((obj) => {
        // console.log("obj", obj);
        const employee = employees.find((employee) => {
          return employee.id === obj.idEmployee;
        });
        // console.log("employee", employee);
        return (
          <tr key={obj.id}>
            <td>
              <img
                src={employee ? employee.avatar : user}
                className="avatar"
              />
            </td>
            <td>
              <FormatIcon background={employee.color} image={user} />
            </td>
            <td className="tableGainName">
              {employee.firstName} {employee.lastName}
            </td>
            <td className="tableGainRank">
              <FormatIcon image={user} background={employee.colorRank} />
              <div>
                <p>Grade</p>
                <p>{employee.rank}</p>
              </div>
            </td>
            <td className="tableGainGain">$ {obj.gain}</td>
          </tr>
        );
      });
    }
    return (
      <tr>
        <td colSpan="4">No data available</td>
      </tr>
    );
  };

  return (
    <div className="tableContainer">
      <table className="tableGain">
        <tbody>{displayRows(_DATA.currentData())}</tbody>
      </table>
      <div className="footer-dashboard-employee">
        {/* Utilisation du composant PaginationEmployee */}
        <PaginationWrapper data={_DATA} list={list} type="gain" />
      </div>
    </div>
  );
};

export default TableGain;
