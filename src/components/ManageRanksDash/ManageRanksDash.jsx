import React, { useEffect, useContext } from "react";
import HeaderTableGrade from "./HeaderTableRanks/HeaderTableRanks";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import BodyTableRanks from "./BodyTableRanks/BodyTableRanks";
import { usePagination } from "../../utils/usePagination";
import filteredData from "../../utils/filteredData";
import DataContext from "../../contexts/DataContext";

const INFO_PER_PAGE = 5;

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
  }, [search]);

  return (
    <div className="container-dashboard-employee containerDashBoardRanks">
      <table>
        <HeaderTableGrade />
        <BodyTableRanks
          currentRanks={_DATA.currentData()}
          setRanks={setRanks}
          ranks={ranks}
        />
      </table>
      <PaginationEmployee 
        data={_DATA} 
        list={ranks} 
        type="grade" 
        presentationText={true}
        />
    </div>
  );
};

export default ManageRanksDash;
