import React, { useState, useEffect, useContext } from "react";
import DashboardDailyCharts from "../charts/DashboardDailyCharts/DashboardDailyCharts";
import FinanceEmployeeDatas from "../FinanceEmployeesDatas/FinanceEmployeesDatas";
import FinanceFortuneDatas from "../FinanceFortuneDatas/FinanceFortuneDatas";
import ScrollableComponent from "../ScrollableComponent/ScrollableComponent";
import FinanceStockDatas from "../FinanceStockDatas/FinanceStockDatas";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import TableExpense from "../TableExpense/TableExpense";
import TableGain from "../TableGain/TableGain";
import { fetchData } from "../../utils/fetchData";
import { DataDashboardContext } from "../../contexts/DataContext";

const ScrollPagesContainer = () => {
  const [gainList, setGainList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    fetchData("/fakeDatasExpense.json").then((data) => {
      setExpenseList(data);
    });
    fetchData("/fakeGain.json").then((data) => {
      setGainList(data);
    });
  }, []);

  const { dataDashboard } = useContext(DataDashboardContext);

  return (
    <ScrollableComponent>
      <div className="financePages" id="financePage1">
        <section>
          <article>
            <FinanceEmployeeDatas
              oldEmployeesData={dataDashboard.oldEmployeesData}
            />
          </article>

          <article>
            <FinanceStockDatas
              oldStockData={dataDashboard.oldStockData}
              nowData={dataDashboard.stockData}
            />
          </article>

          <article>
            <FinanceFortuneDatas
              fortuneData={dataDashboard.fortuneData}
              oldFortuneData={dataDashboard.oldFortuneData}
            />
          </article>
        </section>

        <section>
          <ArticleContainer
            title="Analyse financière"
            contain={<DashboardDailyCharts />}
          />
        </section>
      </div>

      <div className="financePages" id="financePage2">
        <section>
          <ArticleContainer
            title="Argent rapportés"
            contain={<TableGain list={gainList} />}
          />

          <ArticleContainer
            title="Dépenses"
            contain={<TableExpense list={expenseList} />}
          />
        </section>
      </div>
    </ScrollableComponent>
  );
};

export default ScrollPagesContainer;
