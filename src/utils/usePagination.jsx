import { useState } from "react";

export const usePagination = (data, INFO_PER_PAGE) => {
  const [currentPage, setCurrentPage] = useState(1);

  const numberPages = Math.ceil(data.length / INFO_PER_PAGE);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // const previousMinusThree = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage((prev) => Math.max(1, prev - 3));
  //   }
  // };

  const nextPage = () => {
    if (currentPage !== numberPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // const nextPlusThree = () => {
  //   if (currentPage !== numberPages) {
  //     setCurrentPage((next) => Math.min(numberPages, next + 3));
  //   }
  // };

  function currentData() {
    const begin = (currentPage - 1) * INFO_PER_PAGE;
    const end = begin + INFO_PER_PAGE;
    return data.slice(begin, end);
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, numberPages));
  }

  return {
    currentPage,
    setCurrentPage,
    numberPages,
    previousPage,
    nextPage,
    jump,
    currentData,
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
