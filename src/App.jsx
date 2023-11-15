import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import Ranks from "./pages/Ranks/Ranks";
import Finance from "./pages/Finance/Finance";
import Improvements from "./pages/Improvements/Improvements";
import Activities from "./pages/Activities/Activities";
import ErrorPath from "./components/ErrorPath/ErrorPath";
import DataContext from "./contexts/DataContext";

import { fetchData } from "./utils/fetchData";

function App() {
  const constants = {
    BEST_RANK: "boss",
    WORST_RANK: "recrue",
  };

  /** @type {array} */
  const [ranks, setRanks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [dataDashboard, setDataDashboard] = useState({
    employeesData: [],
    oldEmployeesData: 2,
    stockData: 1000,
    oldStockData: 10,
    fortuneData: 60,
    oldFortuneData: 180,
    carData: 18,
  });
  const [dataDashboardChart, setDataDashboardChart] = useState({
    monthlyExpenseDatas: [0, 0, 55, 30, 0, 0, 0, 98, 130, 120, 410, 310],
    monthlyGainDatas: [0, 0, 64, 42, 76, 98, 145, 65, 124, 43, 45, 87],
  });

  const value = useMemo(
    () => ({
      constants,
      ranks,
      setRanks,
      employees,
      setEmployees,
      dataDashboard,
      setDataDashboard,
      dataDashboardChart,
      setDataDashboardChart,
    }),
    [constants, ranks, employees, dataDashboard, dataDashboardChart],
  );

  useEffect(() => {
    if (localStorage.getItem("ranks")) {
      setRanks(JSON.parse(localStorage.getItem("ranks") || "[]"));
    } else {
      fetchData("/fakeRanks.json").then((data) => {
        localStorage.setItem("ranks", JSON.stringify(data));
        setRanks(data);
      });
    }

    if (localStorage.getItem("employees")) {
      setEmployees(JSON.parse(localStorage.getItem("employees") || "[]"));
    } else {
      fetchData("/fakeEmployees.json").then((data) => {
        localStorage.setItem("employees", JSON.stringify(data));
        setEmployees(data);
      });
    }
  }, []);
  return (
    <div className="app">
      <DataContext.Provider value={value}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employees/*" element={<Employees />} />
            <Route path="/ranks/*" element={<Ranks />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/improvements" element={<Improvements />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="*" element={<ErrorPath />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
