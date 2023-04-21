import React, { useEffect, useState } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import FormatIcon from "../FormatIcon/FormatIcon";
import { useStickyState } from "../../utils/useStickyState";
import user from "../../assets/User.svg";



/**
 * Component représentant le tableau de données de gain de l'employé
 * @param {object} props - Les props passés au composant
 * @param {array} props.fichier - Les données de gain déclarées par les employés
 * @returns {JSX.Element} - Le composant du tableau de gains
 */


const TableGain = (props) => {
  //number of gain per page
  const infoPerPage = 5;

  const fichierJson = props.fichier;
  const numberPages = Math.ceil(fichierJson.length / infoPerPage);

  //Utilisation du hook de pagination
  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);
  const [rows, setRows] = useState([]);
  const [employees, setEmployees] = useStickyState("employees", [])

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  //Utilisation de useEffect avec les dépendances currentPage, fichierJson, employees et infoPerPage
  useEffect(() => {
    //Vérification si fichierJson et employees ne sont pas vides
    if (fichierJson && fichierJson.length > 0 && employees.length > 0) {
      //Obtention des indices de la plage de données en fonction de la page courante et du nombre d'états par page
      const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);
      //Obtention des données de l'employé pour la plage actuelle
      const currentProfils = fichierJson.slice(firstIndex, lastIndex);
      //Création des lignes de tableau de gain en mappant les données de l'employé actuel
      const rows = currentProfils.map((obj) => {
        //Trouver l'employé à partir de son ID et lui affecter les données de l'employé actuel
        const employee = employees.find((emp) => emp.id === obj.idEmployee);
        if (employee) {
          return (
            <tr key={obj.id}>
              <td><FormatIcon image={user} background={employee.colorRank} /></td>
              <td className="tableGainName">{employee.firstName} {employee.lastName}</td>
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
        }
      });
      setRows(rows);
    }
  }, [currentPage, fichierJson, employees, infoPerPage]);

  return (
    <div className="tableContainer">
      <table className="tableGain">
        <tbody>
          {rows.length > 0 ? rows : <tr><td colSpan="4">No data available</td></tr>}
        </tbody>

      </table>
      <div className="footer-dashboard-employee">
        {/* Utilisation du composant PaginationEmployee */}
        <PaginationEmployee
          infoPerPage={infoPerPage}
          numberOfPages={numberPages}
          totalOfInfo={fichierJson.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          itemName="gain"
        />
      </div>
    </div>
  );
};

export default TableGain;