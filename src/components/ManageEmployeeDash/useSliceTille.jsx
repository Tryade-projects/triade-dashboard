import React, { useEffect } from "react";
import { useState } from "react";

export const useSliceTille = (data, indexStart, indexEnd) => {
  const [titlesArray, setTitlesArray] = useState([]);

  useEffect(() => {
    const namesProperty = Object.keys(data[0]);
    const titleOfProperty = namesProperty.slice(indexStart, indexEnd);
    setTitlesArray(titleOfProperty);
  }, [data]);

  return { titlesArray };
};
