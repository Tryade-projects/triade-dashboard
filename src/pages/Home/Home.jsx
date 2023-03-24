import React from "react";
import Header from "../../components/Header/Header";
import DashboardInfos from "../../components/DashboardInfos/DashboardInfos";
import DashboardCharts from "../../components/charts/DashboardCharts/DashboardCharts";
import ShortEmployeeListContainer from "../../components/ShortEmployeeListContainer/ShortEmployeeListContainer";

const Home = ({employees}) => {
  return (
    //Adding the mainDashboard class to not disturb the other main container
    <div className="main mainDashboard">
      <Header title={"Tableau de bord"} />
      <main>
        <section>
          <DashboardInfos employees={employees}/>
          <DashboardCharts />
        </section>
        <aside>
          <ShortEmployeeListContainer employees={employees} />
        </aside>
      </main>
    </div>
  );
};

export default Home;
