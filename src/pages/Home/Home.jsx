import React from "react";
import Header from "../../components/Header/Header";
import DashboardInfos from "../../components/DashboardInfos/DashboardInfos";

const Home = () => {
  return (
    <div className="main">
      <Header title={"Tableau de bord"} />
      <DashboardInfos/>
    </div>
  );
};

export default Home;
