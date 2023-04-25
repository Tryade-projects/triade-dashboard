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
  console.log("list", list);
  const _DATA = usePagination(list, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, []);

  // set up state for rows of expense data in table
  const [rows, setRows] = useState([]);

  // set up rows of expense data for table based on current page of expenses
  const displayRows = (list) => {
    console.log({ list });
    if (list && list.length > 0) {
      return list.map((obj, indexObj) => {
        return (
          <tr key={obj.id}>
            <td>{obj.transaction.id}</td>
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
      <div className="footer-dashboard-employee">
        <PaginationWrapper data={_DATA} list={list} type="employee" />
      </div>
    </div>
  );
};

export default TableExpense;
