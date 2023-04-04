import React, { useEffect, useState } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import moment from "moment"; // importer moment.js
import fakeDataExpense from "../../../fakeDatasExpense.json";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import FormatIcon from "../FormatIcon/FormatIcon";

const infoPerPage = 6;

const TableExpense = (props) => {

  const fichierJson = props.fichier;

  const numberPages = Math.ceil(fichierJson.length / infoPerPage);

  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);
  const currentProfils = fichierJson.slice(firstIndex, lastIndex);

  useEffect(() => {
    if (fichierJson && fichierJson.length > 0) {
      // créer les lignes en utilisant les valeurs correspondantes
      const currentProfils = fichierJson.slice(firstIndex, lastIndex);
      setRows(
        currentProfils.map((obj) => {
          return Object.entries(obj).map(([key, value]) => {
            if (key === "logo" && value.endsWith(".svg")) {
              return <td key={key}><FormatIcon background="#FF4550" image={value} /></td>;
            } else if (typeof value === "object" && value !== null) {
              return (
                <td className="tableExpenseColSpan" colSpan="2" key={key}>
                  <p>{value.id}</p>
                  <p>{moment(value.date).format("DD MMMM YYYY, hh:mm A")}</p> {/* convertir le timestamp en date avec moment.js */}
                </td>
              );
            } else if (key === "finish") {
              if (value === true) {
                return <td style={{color:"#4CBC9A", width:"4.40vw"}} className="tableExpenseLastCell" key={key}>
                  <span>Terminé</span >
                </td>
              } else {
                return <td  style={{color:"#FCC43E", width:"4.40vw"}} className="tableExpenseLastCell" key={key}>
                  <span>En attente</span >
                </td>
              }
            } else if (key === "amount"){
              return <td className="tableExpenseAmount">${value}</td>
            } else {
              return <td key={key}>{value}</td>;
            }
          });
        })
      );
    }
  }, [firstIndex, lastIndex]);

  return (
    <div className="tableContainer">
      <table className="tableExpense">
        <tbody>
          {rows.map((r, k) => (
            <tr key={k}>{r}</tr>
          ))}
        </tbody>
      </table>
      <div className="footer-dashboard-employee">
        <PaginationEmployee
          infoPerPage={currentProfils.length}
          numberOfPages={numberPages}
          totalOfInfo={fakeDataExpense.length}
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

export default TableExpense;