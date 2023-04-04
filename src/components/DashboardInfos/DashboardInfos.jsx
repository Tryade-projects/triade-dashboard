import React, { useState, useEffect } from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import finance from "../../../src/assets/finance.svg";
import stock from "../../../src/assets/stock.svg";
import Car from "../../../src/assets/Car.svg";
import teacher from "../../../src/assets/studentWhite.svg";
import { useStickyState } from "../../utils/useStickyState";

/**
 *  In this component we declaring the datas for dashboard infos. 
 *  It store in Localstorage and then use in Finance component.

 * @param {*} param0 
 * @returns 
 */

const DashboardInfos = () => {
  //Datas of the dashboard

  const [employeesData, setEmployeesData] = useStickyState("employeesData", []); //Obtenir une seule valeur
  const [oldEmployeesData, setOldEmployeesData] = useStickyState("oldEmployeesData", []) //Obtenir une seule valeur
  const [stockData, setStockData] = useStickyState("stockData", 100);
  const [oldStockData, setOldStockData] = useStickyState("oldStockData", 80);
  const [fortuneData, setFortuneData] = useStickyState("fortuneData", 60);
  const [oldFortuneData, setOldFortuneData] = useStickyState("oldFortuneData",180,);
  const [carData, setCarData] = useStickyState("carData", 18);

  return (
    <section className="dashboardInfos">
      <div>
        <div>
          {/* insérer variable $colorPurple */}
          <FormatIcon background="#4D44B5" image={teacher} />
        </div>
        <div>
          <h3>Employés</h3>
          <h2>{employeesData.length}</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorOrange */}
          <FormatIcon background="#FB7D5B" image={stock} />
        </div>
        <div>
          <h3>Stock</h3>
          <h2>{stockData}Kg</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorYellow */}
          <FormatIcon background="#FCC43E" image={finance} />
        </div>
        <div>
          <h3>Argent</h3>
          <h2>{fortuneData}K</h2>
        </div>
      </div>

      <div>
        <div>
          {/* insérer variable $colorText  */}
          <FormatIcon background="#303972" image={Car} />
        </div>
        <div>
          <h3>Véhicules</h3>
          <h2>{carData}</h2>
        </div>
      </div>
    </section>
  );
};

export default DashboardInfos;
