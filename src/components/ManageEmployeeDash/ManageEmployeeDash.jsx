import React, { useState, useEffect } from "react";
import data from "../../../fakeData.json";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import BodyTable from "./componentsEmployee/BodyTable";
import { usePagination, useIndexRange } from "./usePagination";
import HeaderTable from "./componentsEmployee/HeaderTable";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const displayProfilFiltered = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.grade.toLowerCase().includes(search.toLowerCase())
    );
  });

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
          totalOfInfo={data.length}
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
