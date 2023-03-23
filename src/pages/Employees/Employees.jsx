import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeesHome from "../../templates/EmployeesHome/EmployeesHome";
import EmployeeAdd from "../../templates/EmployeeAdd/EmployeeAdd";
import EmployeeDetail from "../../templates/EmployeeDetail/EmployeeDetail";

const Employees = ({ employees }) => {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<EmployeesHome employees={employees} />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
        <Route path="/employee/detail" element={<EmployeeDetail />} />
      </Routes>
    </main>
  );
};

export default Employees;
