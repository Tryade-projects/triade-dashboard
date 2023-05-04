import React, { useState, useEffect, useContext } from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import StatsData from "../StatsData/StatsData";
import studentWhite from "../../assets/studentWhite.svg";
import {
  EmployeesContext,
  DataDashboardContext,
} from "../../contexts/DataContext";

const FinanceEmployeesDatas = ({ oldEmployeesData }) => {
  const { dataDashboard } = useContext(DataDashboardContext);
  const { employees } = useContext(EmployeesContext);

  return (
    <div className="financeEmployeesDatas">
      <div>
        {/* insérer variable $colorPurple */}
        <FormatIcon background="#4D44B5" image={studentWhite} />
      </div>
      <div>
        <h3>Employés</h3>
        <h2>{employees.length}</h2>
        <StatsData oldData={oldEmployeesData} nowData={employees.length} />
      </div>
    </div>
  );
};

export default FinanceEmployeesDatas;
