import React, { useState, useEffect } from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import StatsData from "../StatsData/StatsData";
import stock from "/assets/stock.svg";

const FinanceStockDatas = ({ oldStockData, nowData }) => {
  return (
    <div className="financeStockDatas">
      <div>
        {/* insérer variable $colorPurple */}
        <FormatIcon background="#FB7D5B" image={stock} />
      </div>
      <div>
        <h3>Stock</h3>
        <h2>{nowData}Kg</h2>
        <StatsData oldData={oldStockData} nowData={nowData} />
      </div>
    </div>
  );
};

export default FinanceStockDatas;
