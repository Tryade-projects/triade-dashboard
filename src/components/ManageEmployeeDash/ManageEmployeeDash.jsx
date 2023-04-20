import React, { useEffect, useState } from "react";
import BodyTable from "./componentsEmployee/BodyTable";
import { usePagination } from "../../utils/usePagination";
import HeaderTable from "./componentsEmployee/HeaderTable";
import filteredData from "../../utils/filteredData";
import { useStickyState } from "../../utils/useStickyState";
import { Pagination } from "@mui/material";

const INFO_PER_PAGE = 2;

const ManageEmployeeDash = ({ search }) => {
  const [employees, setEmployees] = useStickyState("employees", []);
  let [page, setPage] = useState(1);
  const displayProfilFiltered = filteredData(employees, search, [
    "firstName",
    "rank",
    "lastName",
  ]);

  const _DATA = usePagination(displayProfilFiltered, INFO_PER_PAGE);
  console.log();
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, [search]);
  const handleChange = (event, page) => {
    setPage(page);
    _DATA.jump(page);
  };

  return (
    <div className="container-dashboard-employee">
      <table>
        <HeaderTable />
        <BodyTable profils={_DATA.currentData()} setEmployees={setEmployees} />
      </table>
      <div className="footer-dashboard-employee">
        <p className="footer-info-employee">
          Affichage de <span>{_DATA.currentData().length}</span>{" "}
          {_DATA.currentData().length === 0 ? "employé" : `employés`} sur
          <span> {employees.length}</span>
        </p>
        <Pagination
          count={_DATA.numberPages}
          size="large"
          page={page}
          onChange={handleChange}
          sx={{}}
        />
      </div>
    </div>
  );
};

export default ManageEmployeeDash;
