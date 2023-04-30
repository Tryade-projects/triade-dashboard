import React from "react";
import Header from "../../components/Header/Header";
import DashboardInfos from "../../components/DashboardInfos/DashboardInfos";
import DashboardCharts from "../../components/charts/DashboardCharts/DashboardCharts";
import ShortEmployeeListContainer from "../../components/ShortEmployeeListContainer/ShortEmployeeListContainer";

const Home = () => {
  return (
    //Adding the mainDashboard class to not disturb the other main container
    <div className="main mainDashboard">
      <Header title={"Tableau de bord"} />
      <main>
        <section>
          <DashboardInfos />
          <DashboardCharts />
        </section>
        <aside>
          <ShortEmployeeListContainer />
        </aside>
      </main>
    </div>
  );
};

export default Home;
