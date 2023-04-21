import React from "react";
import { Pagination } from "@mui/material";

const PaginationEmployee = (props) => {
  const handleChange = (event, page) => {
    props.data.setPage(page);
    props.data.jump(page);
  };
  return (
    <div className="footer-dashboard-employee">
      <p className="footer-info-employee">
        Affichage de <span>{props.data.currentData().length}</span>{" "}
        {props.data.currentData().length === 0 ? "employé" : `employés`} sur
        <span> {props.employees.length}</span>
      </p>
      <Pagination
        count={props.data.numberPages}
        page={props.data.page}
        onChange={handleChange}
        siblingCount={0}
      />
    </div>
  );
};

export default PaginationEmployee;
