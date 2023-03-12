import React, { useState, useEffect } from "react";

export const usePagination = (defaultPage, infoPerPosts, numberPages) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const postLastIndex = currentPage * infoPerPosts;
  const postFirstIndex = postLastIndex - infoPerPosts;

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

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentPage,
    setCurrentPage,
    previousPage,
    nextPage,
    postLastIndex,
    postFirstIndex,
    paginate,
  };
};
