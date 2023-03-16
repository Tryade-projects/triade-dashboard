import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import Ranks from "./pages/Ranks/Ranks";
import Finance from "./pages/Finance/Finance";
import Improvements from "./pages/Improvements/Improvements";
import Activities from "./pages/Activities/Activities";

import employees from "../fakeData.json";

import { fetchData } from "./utils/fetchData";

export const EmployeesContext = createContext({
  employees: employees,
  setEmployees: (_array) => {},
});

export const RanksContext = createContext({
  ranks: [{}],
  setRanks: (_array) => {},
});

function App() {
  /** @type {array} */
  const [ranks, setRanks] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // if (localStorage.getItem("ranks")) {
    setRanks(JSON.parse(localStorage.getItem("ranks") || "[]"));
    //   return;
    // }

    fetchData("/fakeData.json").then((data) => {
      setEmployees(data);
    });
  }, []);
  return (
    <div className="app">
      <RanksContext.Provider value={{ ranks, setRanks }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/employees/*"
              element={<Employees employees={employees} />}
            />
            <Route path="/ranks/*" element={<Ranks ranks={ranks} />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/improvements" element={<Improvements />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </BrowserRouter>
      </RanksContext.Provider>
    </div>
  );
}

export default App;
