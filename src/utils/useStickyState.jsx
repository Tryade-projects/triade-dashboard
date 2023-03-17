import { useState, useEffect } from "react";

const getInitialValue = (key, defaultValue) => {
  const storedItem = localStorage.getItem(key);
  if (!storedItem) return defaultValue;

  try {
    return JSON.parse(storedItem);
  } catch (error) {
    localStorage.removeItem(key);
    return defaultValue;
  }
};

export const useStickyState = (key, defaultValue) => {
  const [infoEmployee, setInfoEmployee] = useState(() =>
    getInitialValue(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(infoEmployee));
  }, [key, infoEmployee]);

  return [infoEmployee, setInfoEmployee];
};
