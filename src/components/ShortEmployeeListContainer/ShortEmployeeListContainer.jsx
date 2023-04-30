import React, { useContext } from "react";
import ShortEmployeeListHeader from "../ShortEmployeeListHeader/ShortEmployeeListHeader";
import ShortEmployeeList from "../ShortEmployeeList/ShortEmployeeList";
import ButtonSeeMore from "../ButtonSeeMore/ButtonSeeMore";
import { EmployeesContext } from "../../App";

const ShortEmployeeListContainer = () => {
  const { employees } = useContext(EmployeesContext);

  return (
    <div className="shortEmployeeListContainer">
      <ShortEmployeeListHeader employees={employees} />
      <ShortEmployeeList employees={employees} />
      <ButtonSeeMore />
    </div>
  );
};

export default ShortEmployeeListContainer;
