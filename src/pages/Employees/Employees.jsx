import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import EmployeesHome from "../../templates/EmployeesHome/EmployeesHome";
import EmployeeAdd from "../../templates/EmployeeAdd/EmployeeAdd";

import employees from "../../../fakeData.json";

const Employees = ({ employees }) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<EmployeesHome employees={employees} />} />
        <Route path="/addEmployee" element={<EmployeeAdd />} />
      </Routes>
    </main>
  );
};

export default Employees;
