import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeesHome from "../../templates/EmployeesHome/EmployeesHome";
import EmployeeAdd from "../../templates/EmployeeAdd/EmployeeAdd";
import EmployeeDetail from "../../templates/EmployeeDetail/EmployeeDetail";

const Employees = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<EmployeesHome />} />
        <Route path="/employee/add" element={<EmployeeAdd />} />
        <Route path="/employee/add/:id" element={<EmployeeAdd />} />
        <Route path="/employee/detail/:id" element={<EmployeeDetail />} />
      </Routes>
    </main>
  );
};

export default Employees;
