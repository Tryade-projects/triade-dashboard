import React, { useState, useEffect } from "react";
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
import { fetchData } from "../../utils/fetchData";

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
