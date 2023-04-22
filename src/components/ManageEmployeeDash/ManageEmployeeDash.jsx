import React, { useEffect, useState } from "react";
import BodyTable from "./componentsEmployee/BodyTable";
import { usePagination } from "../../utils/usePagination";
import HeaderTable from "./componentsEmployee/HeaderTable";
import filteredData from "../../utils/filteredData";
import { useStickyState } from "../../utils/useStickyState";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const [employees, setEmployees] = useStickyState("employees", []);
  const displayProfilFiltered = filteredData(employees, search, [
    "firstName",
    "rank",
    "lastName",
  ]);

  const _DATA = usePagination(displayProfilFiltered, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, [search]);

  return (
    <div className="container-dashboard-employee">
      <table>
        <HeaderTable />
        <BodyTable profils={_DATA.currentData()} setEmployees={setEmployees} />
      </table>
      <PaginationWrapper data={_DATA} list={employees} type="employee" />
    </div>
  );
};

export default ManageEmployeeDash;
