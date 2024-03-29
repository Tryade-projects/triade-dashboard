import React, { useContext } from "react";
import ShortEmployeeListHeader from "../ShortEmployeeListHeader/ShortEmployeeListHeader";
import ShortEmployeeList from "../ShortEmployeeList/ShortEmployeeList";
import ButtonSeeMore from "../ButtonSeeMore/ButtonSeeMore";
import DataContext from "../../contexts/DataContext";

const ShortEmployeeListContainer = () => {
  const { employees } = useContext(DataContext);

  return (
    <div className="shortEmployeeListContainer">
      <ShortEmployeeListHeader employees={employees} />
      <ShortEmployeeList employees={employees} />
      <ButtonSeeMore />
    </div>
  );
};

export default ShortEmployeeListContainer;
