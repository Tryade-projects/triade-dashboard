import React, { useEffect, useState, useContext } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import FormatIcon from "../FormatIcon/FormatIcon";
import user from "../../assets/User.svg";
// import DataContext from "../../contexts/DataContext";

const INFO_PER_PAGE = 5;

/**
 * Component représentant le tableau de données de gain de l'employé
 * @param {object} props - Les props passés au composant
 * @param {array} props.list - Les données de gain déclarées par les employés
 * @returns {JSX.Element} - Le composant du tableau de gains
 */
const TableGain = ({ list }) => {
  // const { employees, setEmployees } = useContext(DataContext);

  const _DATA = usePagination(list, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, []);

  const displayRows = (list) => {
    //Vérification si list et employees ne sont pas vides
    if (list && list.length > 0) {
      return list.map((obj) => {
        return (
          <tr key={obj.id}>
            <td>
              <img alt="" src={obj.employee.image} className="avatar" />
            </td>
            <td className="tableGainName">
              {obj.employee.firstName} {obj.employee.lastName}
            </td>
            <td className="tableGainRank">
              <FormatIcon image={user} background={obj.employee.color} />
              <div>
                <p>Grade</p>
                <p>{obj.employee.rank}</p>
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
      {/* Utilisation du composant PaginationEmployee */}
      <PaginationEmployee 
        data={_DATA} 
        list={list} 
        type="gain"
        presentationText={true} />
    </div>
  );
};

export default TableGain;
