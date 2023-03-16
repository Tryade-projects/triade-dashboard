import { useState } from "react";

export const usePagination = (numberPages, defaultPage = 1) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);

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
    paginate,
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
