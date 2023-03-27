import React, { useState, useEffect } from 'react'
import FormatIcon from "../FormatIcon/FormatIcon";
import finance from "../../../src/assets/finance.svg";
import stock from "../../../src/assets/stock.svg";
import Car from "../../../src/assets/Car.svg";
import teacher from "../../../src/assets/studentWhite.svg";
import { useStickyState } from '../../utils/useStickyState';

/**
 *  In this component we declaring the datas for dashboard infos. 
 *  It store in Localstorage and then use in Finance component.

 * @param {*} param0 
 * @returns 
 */


const DashboardInfos = ({ employees }) => {

  
  //Datas of the dashboard

  
  // const [employees, setEmployees] = useStickyState("employees", employees.length) 
  // const [oldEmployees, setOldEmployees] = useStickyState("oldEmployees", []) 
  const [employeesData, setEmployeesData] = useState(0);
  const [oldEmployeesData, setOldEmployeesData] = useState(12);
  const [stockData, setStockData] = useStickyState("stockData", 100);
  const [oldStockData, setOldStockData] = useStickyState("oldStockData", 80);
  const [fortuneData, setFortuneData] = useStickyState("fortuneData", 60);
  const [oldFortuneData, setOldFortuneData] = useStickyState("oldFortuneData", 180);
  const [carData, setCarData] = useStickyState("carData", 18);


    // const [stockData, setStockData] = useState(200);
  // const [oldStockData, setOldStockData] = useState(120);
  // const [fortuneData, setFortuneData] = useState(400);
  // const [oldFortuneData, setOldFortuneData] = useState(200);
  // const [carData, setCarData] = useState(46);

  // useEffect(() => {
  //   if (employees && Array.isArray(employees)) {
  //     setEmployeesData(employees.length);
  //   }
  // }, [employees]);


  // const setLocalStorage = (key, value) => {
  //   useEffect(() => {
  //     localStorage.setItem(key, value);
  //   }, [value]);
  // }
  // setLocalStorage('employeesData', employeesData);
  // setLocalStorage('oldEmployeesData', oldEmployeesData);
  // // setLocalStorage('stockData', stockData);
  // setLocalStorage('oldStockData', oldStockData);
  // setLocalStorage('fortuneData', fortuneData);
  // setLocalStorage('oldFortuneData', oldFortuneData);
  // setLocalStorage('carData', carData);





  return (
    <section className='dashboardInfos'>

      <div>
        <div>
          {/* insérer variable $colorPurple */}
          <FormatIcon background="#4D44B5" image={teacher} />
        </div>
        <div>
          <h3>Employés</h3>
          <h2>{employeesData}</h2>
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


  )
}

export default DashboardInfos