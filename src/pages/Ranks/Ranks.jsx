import React from "react";
import { Route, Routes } from "react-router-dom";
import RanksHome from "../../templates/RanksHome/RanksHome";
import RankAdd from "../../templates/RankAdd/RankAdd";

const Ranks = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/*" element={<RanksHome />} />
        <Route path="/rank/add" element={<RankAdd />} />
        <Route path="/rank/:rankId" element={<RankAdd />} />
      </Routes>
    </main>
  );
};

export default Ranks;
