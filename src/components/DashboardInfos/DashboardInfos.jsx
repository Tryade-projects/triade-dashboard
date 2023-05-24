import React, { useContext, useState } from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import finance from "/assets/finance.svg";
import stock from "/assets/stock.svg";
import Car from "/assets/Car.svg";
import teacher from "/assets/studentWhite.svg";
import DataContext from "../../contexts/DataContext";

const DashboardInfos = () => {
  const { dataDashboard, employees } = useContext(DataContext);

  return (
    <section className="dashboardInfos">
      <div>
        <div>
          {/* insérer variable $colorPurple */}
          <FormatIcon background="#4D44B5" image={teacher} />
        </div>
        <div>
          <h3>Employés</h3>
          <h2>{employees.length}</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorOrange */}
          <FormatIcon background="#FB7D5B" image={stock} />
        </div>
        <div>
          <h3>Stock</h3>
          <h2>{dataDashboard.stockData}Kg</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorYellow */}
          <FormatIcon background="#FCC43E" image={finance} />
        </div>
        <div>
          <h3>Argent</h3>
          <h2>{dataDashboard.fortuneData}K</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorText  */}
          <FormatIcon background="#303972" image={Car} />
        </div>
        <div>
          <h3>Véhicules</h3>
          <h2>{dataDashboard.carData}</h2>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfos;
