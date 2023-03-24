import React, {useState, useEffect} from "react";
import FormatIcon from "../FormatIcon/FormatIcon"
import StatsData from "../StatsData/StatsData"
import stock from "../../assets/stock.svg"

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

  const [stockData, setStockData] = useState([]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStockData(JSON.parse(localStorage.getItem('stockData')));
    }
  }, []);

  return (
    <div className="financeStockDatas">
      <div>
        {/* insérer variable $colorPurple */}
        <FormatIcon background="#FB7D5B" image={stock} />
      </div>
      <div>
        <h3>Stock</h3>
        <h2>{stockData}Kg</h2>
        <StatsData />
      </div>
    </div>

  )
}

export default FinanceStockDatas