import React, { useEffect, useState } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import FormatIcon from "../FormatIcon/FormatIcon";
import { useStickyState } from "../../utils/useStickyState";
import user from "../../assets/User.svg";


const infoPerPage = 5;

const TableGain = (props) => {

  const fichierJson = props.fichier;
  const numberPages = Math.ceil(fichierJson.length / infoPerPage);
  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);
  const [rows, setRows] = useState([]);
  const [employees, setEmployees] = useStickyState("employees", [])

  useEffect(() => {
    setCurrentPage(1);
  }, []);


  useEffect(() => {
    if (fichierJson && fichierJson.length > 0 && employees.length > 0) {
      const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);
      const currentProfils = fichierJson.slice(firstIndex, lastIndex);
      const rows = currentProfils.map((obj) => {
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
              {/* { console.log(employee.colorRank)} */}

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
        <PaginationEmployee
          infoPerPage={infoPerPage}
          numberOfPages={numberPages}
          totalOfInfo={fichierJson.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
          itemName="donnée"
        />
      </div>
    </div>
  );
};

export default TableGain;
