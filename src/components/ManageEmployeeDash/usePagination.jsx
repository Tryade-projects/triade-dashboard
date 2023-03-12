import React, { useState, useEffect } from "react";

export const usePagination = (infoPerPosts, search, numberPages) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

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

  return {
    currentPage,
    setCurrentPage,
    previousPage,
    nextPage,
    postLastIndex,
    postFirstIndex,
  };
};
