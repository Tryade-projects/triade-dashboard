import React, { useState, useEffect } from "react";
import data from "../../../fakeData.json";
import PaginationEmployee from "../PaginationEmployee/PaginationEmployee";
import ProfilsEmployee from "./ProfilsEmployee";

const INFO_PER_PAGE = 5;

const ManageEmployeeDash = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const displayProfil = data.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  // Number of page
  const numberPages = Math.ceil(displayProfil.length / INFO_PER_PAGE);

  // first and last index of posts from the current page
  const postLastIndex = currentPage * INFO_PER_PAGE;
  const postFirstIndex = postLastIndex - INFO_PER_PAGE;

  // Keeps only the posts on the page
  const currentProfils = displayProfil.slice(postFirstIndex, postLastIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== numberPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
