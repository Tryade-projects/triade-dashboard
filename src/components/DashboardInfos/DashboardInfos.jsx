import React, { useState, useEffect } from 'react'
import FormatIcon from "../../components/FormatIcon/FormatIcon";
import Finance from "../../../src/assets/finance.svg";
import stock from "../../../src/assets/stock.svg";
import Car from "../../../src/assets/Car.svg";
import teacher from "../../../src/assets/studentWhite.svg";


const DashboardInfos = ({employees}) => {

  //Datas of the dashboard, except employee
  const [stockData, setStockData] = useState(0);
  const [financeData, setFinancekData] = useState(2);
  const [carData, setCarkData] = useState(0);

  useEffect(() => {
    localStorage.setItem('stockData', stockData);
  }, [stockData]);

  useEffect(() => {
    localStorage.setItem('financeData', financeData);
  }, [financeData]);

  useEffect(() => {
    localStorage.setItem('carData', carData);
  }, [carData]);




  return (
    <section className='dashboardInfos'>
      
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
          <h2>{stockData}Kg</h2>
        </div>
      </div>
      
      <div>
        <div>
          {/* insérer variable $colorYellow */}
          <FormatIcon background="#FCC43E" image={Finance} />
        </div>
        <div>
          <h3>Argent</h3>
          <h2>{financeData}K</h2>
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


  )
}

export default DashboardInfos