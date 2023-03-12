import React, { useState, useEffect, createContext } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import RanksHome from "../../components/RanksHome/RanksHome";
import RankAdd from "../../components/RanksAdd/RanksAdd";

import { fetchData } from "../../utils/fetchData";
export const RanksContext = createContext({
  ranks: [],
  setRanks: (_array) => {},
});

const Ranks = () => {
  /** @type {array} */
  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    // if (localStorage.getItem("ranks")) {
    setRanks(JSON.parse(localStorage.getItem("ranks") || "[]"));
    //   return;
    // }

    // fetchData("/gradesData.json").then((data) => {
    //   localStorage.setItem("ranks", JSON.stringify(data));
    //   setRanks(data);
    // });
  }, []);
  console.log(ranks);
  return (
    <RanksContext.Provider value={{ ranks, setRanks }}>
      <main className="main">
        <Routes>
          <Route path="/*" element={<RanksHome ranks={ranks} />} />
          <Route path="/addRank" element={<RankAdd />} />
        </Routes>
      </main>
    </RanksContext.Provider>
  );
};

export default Ranks;
