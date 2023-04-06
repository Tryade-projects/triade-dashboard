import React, {useState, useEffect} from "react";
import FormatIcon from "../FormatIcon/FormatIcon"
import StatsData from "../StatsData/StatsData"
import stock from "../../assets/stock.svg"
import { useStickyState } from "../../utils/useStickyState";


/**
 * 
 * @param {object} props
 * @param {string} background A hexadecimal color code
 * @param {string} image Link to an SVG image
 * @constant {int} stockData 
 * 
 * @returns {JSX.Element}
 */


const FinanceStockDatas = () => {

  const [stockData, setStockData] = useStickyState("stockData",0);
  const [oldStockData, setOldStockData]= useStickyState("oldStockData",0)

  return (
    <div className="financeStockDatas">
      <div>
        {/* insérer variable $colorPurple */}
        <FormatIcon background="#FB7D5B" image={stock} />
      </div>
      <div>
        <h3>Stock</h3>
        <h2>{stockData}Kg</h2>
        <StatsData oldData = {oldStockData} nowData = {stockData}/>
      </div>
    </div>

  )
}

export default FinanceStockDatas