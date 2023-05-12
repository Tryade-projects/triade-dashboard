import React from "react";
import { Pagination } from "@mui/material";

/**
 *
 * @param {object} props
 * @param {object} props.data - data to paginate
 * @param {array} props.list - list of all the data
 * @param {string} props.type - type of data to paginate
 * @param {boolean} props.presentationText - display presentation text
 * @returns {JSX.Element}
 */
const PaginationWrapper = ({ data, list, type, presentationText }) => {
  const handleChange = (event, page) => {
    data.setPage(page);
    data.jump(page);
  };

  const displayPresentationText = (presentationText) => {
    if (presentationText) {
      return "Affichage de ";
    } else {
      return "";
    }
  };

  return (
    <div className="footer-dashboard-employee">
      <p className="footer-info-employee">
        {displayPresentationText(presentationText)}
        <span>{data.currentData().length}</span>{" "}
        {data.currentData().length === 0 ? `${type}` : `${type}s`} sur
        <span> {list.length}</span>
      </p>
      <Pagination
        count={data.numberPages}
        size="large"
        page={data.page}
        onChange={handleChange}
        siblingCount={0}
      />
    </div>
  );
};

export default PaginationWrapper;
