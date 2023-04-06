import React from "react";
import DashboardDailyCharts from "../charts/DashboardDailyCharts/DashboardDailyCharts";
import FinanceEmployeeDatas from "../FinanceEmployeesDatas/FinanceEmployeesDatas";
import FinanceFortuneDatas from "../FinanceFortuneDatas/FinanceFortuneDatas";
import ScrollableComponent from "../ScrollableComponent/ScrollableComponent";
import FinanceStockDatas from "../FinanceStockDatas/FinanceStockDatas";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import fakeDataExpense from "../../../fakeDatasExpense.json";
import TableExpense from "../TableExpense/TableExpense";
import TableGain from "../TableGain/TableGain";
import fakeGain from "../../../fakeGain.json";



/**
 * 
 * @param {object} props
 * @param {object[]} props.employees An array of all employees
 * 
 * @returns {JSX.Element}
 */

const ScrollPagesContainer = () => {

  const infoPerPage = 5
  

  return (
    <ScrollableComponent>
      <div className="financePages" id="financePage1">
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
          <ArticleContainer title="Analyse financière" contain={<DashboardDailyCharts />} />
        </section>
      </div>

      <div className="financePages" id="financePage2">
        <section>
          <ArticleContainer
            title="Argent rapportés"
            contain={<TableGain fichier={fakeGain} infoPerPage={infoPerPage} />}
          />

          <ArticleContainer
            title="Dépenses"
            contain={<TableExpense fichier={fakeDataExpense} infoPerPage={infoPerPage}/>}
          />
        </section>
      </div>
    </ScrollableComponent>
  )
};


export default ScrollPagesContainer;