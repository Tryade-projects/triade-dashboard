import React, { useState, useEffect } from "react";
import data from "../../../fakeData.json";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import ProfilsEmployee from "./ProfilsEmployee";
import { usePagination, useIndexRange } from "./usePagination";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const displayProfilFiltered = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
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
        <thead>
          <tr>
            <th className="semiBold th-name">Nom</th>
            <th className="semiBold">Grade</th>
            <th className="semiBold">Date d'emploi</th>
            <th className="semiBold">Téléphone</th>
            <th className="semiBold">Actions</th>
            <th className="semiBold">Plus</th>
          </tr>
        </thead>
        <tbody>
          {currentProfils.map((profil) => (
            <ProfilsEmployee {...profil} key={profil.id} />
          ))}
        </tbody>
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
