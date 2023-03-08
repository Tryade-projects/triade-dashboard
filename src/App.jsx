import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Employees from "./pages/Employees/Employees";
import Ranks from "./pages/Ranks/Ranks";
import Finance from "./pages/Finance/Finance";
import Improvements from "./pages/Improvements/Improvements";
import Activities from "./pages/Activities/Activities";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/ranks/*" element={<Ranks />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/improvements" element={<Improvements />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
