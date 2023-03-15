import React from "react";
import Header from "../../components/Header/Header";
import DashboardInfos from "../../components/DashboardInfos/DashboardInfos";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";

const Home = () => {
  return (
    <div className="main">
      <Header title={"Tableau de bord"} />
      <DashboardInfos/>
      <DashboardCharts/>
    </div>
  );
};

export default Home;
