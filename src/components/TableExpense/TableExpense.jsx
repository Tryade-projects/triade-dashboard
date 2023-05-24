import React, { useEffect, useState } from "react";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import moment from "moment";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import FormatIcon from "../FormatIcon/FormatIcon";

//number of expenses per page
const INFO_PER_PAGE = 6;
/**
 * TableExpense component displays a table of expenses
 *
 * @param {object} props - Component props
 * @param {object[]}  props.list - List of expenses (from JSON file or API)
 *
 * @returns {JSX.Element} - Rendered component
 */
const TableExpense = ({ list }) => {
  const _DATA = usePagination(list, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, []);

  // set up state for rows of expense data in table
  const [rows, setRows] = useState([]);

  // set up rows of expense data for table based on current page of expenses
  const displayRows = (list) => {
    if (list && list.length > 0) {
      return list.map((obj, indexObj) => {
        return (
          <tr key={obj.transaction.id}>
            {/* <td>{obj.transaction.id}</td> */}
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
                    <p>{moment(value.date).format("DD MMMM YYYY, hh:mm A")}</p>
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
      });
    }
  };

  return (
    <div className="tableContainer">
      <table className="tableExpense">
        <tbody>{displayRows(_DATA.currentData())}</tbody>
      </table>
      <PaginationWrapper
        data={_DATA}
        list={list}
        type="dépense"
        presentationText={false}
      />
    </div>
  );
};

export default TableExpense;
