import React, { useEffect, useContext } from "react";
import BodyTable from "./componentsEmployee/BodyTable";
import { usePagination } from "../../utils/usePagination";
import HeaderTable from "./componentsEmployee/HeaderTable";
import filteredData from "../../utils/filteredData";
import DataContext from "../../contexts/DataContext";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";

const INFO_PER_PAGE = 1;

const ManageEmployeeDash = ({ search }) => {
  const { employees, setEmployees } = useContext(DataContext);
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
        <BodyTable
          currentEmployees={_DATA.currentData()}
          setEmployees={setEmployees}
        />
      </table>
      <PaginationEmployee 
        data={_DATA} 
        list={employees} 
        type="employee"
        presentationText={true}
        />
    </div>
  );
};

export default ManageEmployeeDash;
