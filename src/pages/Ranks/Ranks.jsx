import React, { useState, useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  Route,
  Routes,
} from "react-router-dom";
import RanksHome from "../../components/RanksHome/RanksHome";
import RankAdd from "../../components/RanksAdd/RanksAdd";

import { fetchData } from "../../utils/fetchData";

const Ranks = () => {
  const location = useLocation();

  const [ranks, setRanks] = useState([]);

  useEffect(() => {
    fetchData("/gradesData.json").then((data) => setRanks(data));
    console.log(ranks);
  }, []);
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<RanksHome />} />
        <Route path="/addRank" element={<RankAdd />} />
      </Routes>
    </main>
  );
};

export default Ranks;
