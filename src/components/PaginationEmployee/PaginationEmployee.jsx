import React from "react";
import { Pagination } from "@mui/material";

const PaginationEmployee = ({ data, list, type }) => {
  console.log(list);
  const handleChange = (event, page) => {
    data.setPage(page);
    data.jump(page);
  };
  return (
    <div className="footer-dashboard-employee">
      <p className="footer-info-employee">
        Affichage de <span>{data.currentData().length}</span>{" "}
        {data.currentData().length === 0 ? `${type}` : `${type}s`} sur
        <span> {list.length}</span>
      </p>
      <Pagination
        count={data.numberPages}
        page={data.page}
        onChange={handleChange}
        siblingCount={0}
      />
    </div>
  );
};

export default PaginationEmployee;
