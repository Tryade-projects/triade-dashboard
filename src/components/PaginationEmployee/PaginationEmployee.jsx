import React from "react";
import { Pagination } from "@mui/material";

const PaginationEmployee = ({
  numberOfPages,
  totalOfInfo,
  paginate,
  infoPerPage,
  currentPage,
  nextPage,
  previousPage,
  itemName,
}) => {
  const countPages = Array.from(Array(numberOfPages).keys(), (n) => n + 1);

  return (
    <>
      <p className="footer-info-employee">
        Affichage de <span>{infoPerPage}</span>{" "}
        {infoPerPage === 0 ? itemName : `${itemName}s`} sur{" "}
        <span>{totalOfInfo}</span>
      </p>
      {/* <div className="container-pagination"> */}
      <Pagination
        count={numberOfPages}
        color="secondary"
        size="large"
        onChange={(e) => paginate(parseInt(e.target.textContent))}
      />
      {/* <svg
          onClick={previousPage}
          className="left-arrow"
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.512 21.176L1.04797 11.736C0.599971 11.352 0.599971 10.648 1.04797 10.264L11.512 0.824027C12.184 0.216027 13.272 0.664026 13.272 1.56003L13.272 20.44C13.272 21.336 12.184 21.784 11.512 21.176Z"
            fill="#A098AE"
          />
        </svg>
        <ul className="pagination">
          {threePages.map((page) => (
            <li
              className={currentPage === page ? "active" : ""}
              onClick={() => paginate(page)}
              key={page}
            >
              {page}
            </li>
          ))}
        </ul>
        <svg
          onClick={nextPage}
          className="right-arrow"
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.48803 0.823973L12.952 10.264C13.4 10.648 13.4 11.352 12.952 11.736L2.48803 21.176C1.81603 21.784 0.728027 21.336 0.728027 20.44L0.728028 1.55997C0.728028 0.663973 1.81603 0.215973 2.48803 0.823973Z"
            fill="#A098AE"
          />
        </svg> */}
      {/* </div> */}
    </>
  );
};

export default PaginationEmployee;
