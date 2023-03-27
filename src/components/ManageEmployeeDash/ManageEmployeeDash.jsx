import React, { useEffect, useState } from "react";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import BodyTable from "./componentsEmployee/BodyTable";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import HeaderTable from "./componentsEmployee/HeaderTable";
import filteredData from "../../utils/filteredData";
import { useStickyState } from "../../utils/useStickyState";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const [employees, setemployees] = useStickyState("employees", []);
  const displayProfilFiltered = filteredData(employees, search, [
    "name",
    "grade",
  ]);

  const numberPages = Math.ceil(displayProfilFiltered.length / INFO_PER_PAGE);

  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, INFO_PER_PAGE);

  const currentProfils = displayProfilFiltered.slice(firstIndex, lastIndex);

  return (
    <div className="container-dashboard-employee">
      <table>
        <HeaderTable />
        <BodyTable profils={currentProfils} />
      </table>
      <div className="footer-dashboard-employee">
        <PaginationEmployee
          infoPerPage={currentProfils.length}
          numberOfPages={numberPages}
          totalOfInfo={emloy.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};

export default ManageEmployeeDash;
