import React, { useState, useEffect, useContext } from "react";
import HeaderTableGrade from "./HeaderTableRanks/HeaderTableRanks";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import BodyTableRanks from "./BodyTableRanks/BodyTableRanks";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import filteredData from "../../utils/filteredData";
import { RanksContext } from "../../App";

const INFO_PER_PAGE = 5;

const ManageRanksDash = ({ search }) => {
  const { ranks, setRanks } = useContext(RanksContext);
  console.log(ranks);
  const displayRanksFiltered = filteredData(ranks, search, [
    "name",
    "label",
    "permissions",
  ]);

  const numberPages = Math.ceil(displayRanksFiltered.length / INFO_PER_PAGE);

  const { currentPage, setCurrentPage, nextPage, previousPage, paginate } =
    usePagination(numberPages, 1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const { firstIndex, lastIndex } = useIndexRange(currentPage, INFO_PER_PAGE);

  const currentRanks = displayRanksFiltered.slice(firstIndex, lastIndex);
  return (
    <div className="container-dashboard-employee containerDashBoardRanks">
      <table>
        <HeaderTableGrade />
        <BodyTableRanks currentRanks={currentRanks} setRanks={setRanks} />
      </table>
      <div className="footer-dashboard-employee">
        <PaginationEmployee
          infoPerPage={currentRanks.length}
          numberOfPages={numberPages}
          totalOfInfo={ranks.length}
          paginate={paginate}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </div>
    </div>
  );
};

export default ManageRanksDash;
