import React, { useState, useEffect } from "react";
import FinanceEmployeeDatas from "../FinanceEmployeesDatas/FinanceEmployeesDatas";
import FinanceFortuneDatas from "../FinanceFortuneDatas/FinanceFortuneDatas";
import FinanceStockDatas from "../FinanceStockDatas/FinanceStockDatas";
import DashboardDailyCharts from "../charts/DashboardDailyCharts/DashboardDailyCharts";
import ScrollableComponent from "../ScrollableComponent/ScrollableComponent";


/**
 * 
 * @param {object} props
 * @param {object[]} employees An array of all employees
 * 
 * @returns {JSX.Element}
 */



const ScrollPagesContainer = () => {







  return (
      <ScrollableComponent>
        <div className="financePages" id="page1">
          <section>
            <article>
              <FinanceEmployeeDatas />
            </article>

            <article>
              <FinanceStockDatas />
            </article>

            <article>
              <FinanceFortuneDatas />
            </article>
          </section>

          <section>
            <DashboardDailyCharts />
          </section>
        </div>

        <div className="financePages" id="page2">
          <section>
            <article>First</article>
            <article>Second</article>
          </section>
        </div>
      </ScrollableComponent>
  )
};


export default ScrollPagesContainer;