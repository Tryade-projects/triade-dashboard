import { useState } from "react";

export const usePagination = (numberPages, defaultPage = 1) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const previousMinusThree = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => Math.max(1, prev - 3));
    }
  };

  const nextPage = () => {
    if (currentPage !== numberPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const nextPlusThree = () => {
    if (currentPage !== numberPages) {
      setCurrentPage((next) => Math.min(numberPages, next + 3));
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    currentPage,
    setCurrentPage,
    previousPage,
    nextPage,
    paginate,
    nextPlusThree,
    previousMinusThree,
  };
};

export const useIndexRange = (currentPage, INFO_PER_PAGE) => {
  const lastIndex = currentPage * INFO_PER_PAGE;
  const firstIndex = lastIndex - INFO_PER_PAGE;

  return {
    firstIndex,
    lastIndex,
  };
};
