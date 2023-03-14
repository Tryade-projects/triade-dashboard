import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeesHome from "../../templates/EmployeesHome/EmployeesHome";
import EmployeeAdd from "../../templates/EmployeeAdd/EmployeeAdd";

import employees from "../../../fakeData.json";

const Employees = ({ employees }) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<EmployeesHome employees={employees} />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
      </Routes>
    </main>
  );
};

export default Employees;
