import React, { useEffect, useState } from "react";
import { usePagination } from "../../utils/usePagination";
import moment from "moment";
import fakeDataExpense from "../../../fakeDatasExpense.json";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import FormatIcon from "../FormatIcon/FormatIcon";

/**
 * TableExpense component displays a table of expenses
 *
 * @param {object} props - Component props
 * @param {array}  props.fichier - List of expenses (from JSON file or API)
 *
 * @returns {JSX.Element} - Rendered component
 */
const TableExpense = (props) => {
  //number of expenses per page
  const infoPerPage = 6;

  //calculate number of pages based on number of expenses and number of expenses per page
  const numberPages = Math.ceil(props.fichier.length / infoPerPage);

  //set up custom pagination hooks
  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  // set up state for rows of expense data in table
  const [rows, setRows] = useState([]);

  // set current page to 1 on first render
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // use custom hook to calculate first and last index of current page's expenses in list
  const { firstIndex, lastIndex } = useIndexRange(currentPage, infoPerPage);

  // slice list of expenses for current page to pass down to PaginationEmployee component
  const currentProfils = props.fichier.slice(firstIndex, lastIndex);

  // set up rows of expense data for table based on current page of expenses
  useEffect(() => {
    if (props.fichier && props.fichier.length > 0) {
      // create rows of expense data based on corresponding values
      const currentProfils = props.fichier.slice(firstIndex, lastIndex);
      setRows(
        currentProfils.map((obj, indexObj) => {
          return (
            <tr key={indexObj}>
              {Object.entries(obj).map(([key, value], index) => {
                if (key === "logo" && value.endsWith(".svg")) {
                  return (
                    <td key={index}>
                      <FormatIcon background="#FF4550" image={value} />
                    </td>
                  );
                } else if (typeof value === "object" && value !== null) {
                  return (
                    <td className="tableExpenseColSpan" colSpan="2" key={index}>
                      <p>{value.id}</p>
                      <p>
                        {moment(value.date).format("DD MMMM YYYY, hh:mm A")}
                      </p>
                    </td>
                  );
                } else if (key === "finish") {
                  if (value === true) {
                    return (
                      <td
                        style={{
                          color: "#4CBC9A",
                          width: "4.40vw",
                          fontWeight: "600",
                        }}
                        className="tableExpenseLastCell"
                        key={index}
                      >
                        <span>Terminé</span>
                      </td>
                    );
                  } else {
                    return (
                      <td
                        style={{
                          color: "#FCC43E",
                          width: "4.40vw",
                          fontWeight: "600",
                        }}
                        className="tableExpenseLastCell"
                        key={index}
                      >
                        <span>En attente</span>
                      </td>
                    );
                  }
                } else if (key === "amount") {
                  return (
                    <td className="tableExpenseAmount" key={index}>
                      ${value}
                    </td>
                  );
                } else {
                  return <td key={index}>{value}</td>;
                }
              })}
            </tr>
          );
        }),
      );
    }
  }, [props.fichier, firstIndex, lastIndex]);

  return (
    <div className="tableContainer">
      <table className="tableExpense">
        <tbody>{rows}</tbody>
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
