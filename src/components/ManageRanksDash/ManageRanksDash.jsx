import React, { useEffect, useContext } from "react";
import HeaderTableGrade from "./HeaderTableRanks/HeaderTableRanks";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";
import BodyTableRanks from "./BodyTableRanks/BodyTableRanks";
import { usePagination } from "../../utils/usePagination";
import filteredData from "../../utils/filteredData";
import DataContext from "../../contexts/DataContext";

const INFO_PER_PAGE = 1;

const ManageRanksDash = ({ search }) => {
  const { ranks, setRanks } = useContext(DataContext);

  const displayRanksFiltered = filteredData(ranks, search, [
    "name",
    "label",
    "permissions",
  ]);

  const _DATA = usePagination(displayRanksFiltered, INFO_PER_PAGE);
  useEffect(() => {
    _DATA.setCurrentPage(1);
  }, [search, ranks]);

  return (
    <div className="container-dashboard-employee containerDashBoardRanks">
      <table>
        <HeaderTableGrade />
        <BodyTableRanks
          currentRanks={_DATA.currentData()}
          setRanks={setRanks}
          ranks={ranks}
          setPage={_DATA.setPage}
        />
      </table>
      <PaginationWrapper
        data={_DATA}
        list={ranks}
        type="grade"
        presentationText={true}
      />
    </div>
  );
};

export default ManageRanksDash;
