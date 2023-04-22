import React, { useState, useEffect, useContext } from "react";
import HeaderTableGrade from "./HeaderTableRanks/HeaderTableRanks";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import BodyTableRanks from "./BodyTableRanks/BodyTableRanks";
import { usePagination, useIndexRange } from "../../utils/usePagination";
import filteredData from "../../utils/filteredData";
import { RanksContext } from "../../App";

const INFO_PER_PAGE = 5;

const ManageRanksDash = ({ search }) => {
  const { ranks, setRanks } = useContext(RanksContext);
  const displayRanksFiltered = filteredData(ranks, search, [
    "name",
    "label",
    "permissions",
  ]);

  const _DATA = usePagination(displayRanksFiltered, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, [search]);

  return (
    <div className="container-dashboard-employee containerDashBoardRanks">
      <table>
        <HeaderTableGrade />
        <BodyTableRanks
          currentRanks={_DATA.currentData()}
          setRanks={setRanks}
        />
      </table>
      <div className="footer-dashboard-employee">
        <PaginationWrapper data={_DATA} list={ranks} type="grade" />
      </div>
    </div>
  );
};

export default ManageRanksDash;
