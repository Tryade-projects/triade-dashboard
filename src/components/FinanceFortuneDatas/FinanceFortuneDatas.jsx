import React, {useState, useEffect} from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import StatsData from "../StatsData/StatsData";
import SmallChart from "../charts/SmallChart/SmallChart"
import finance from "../../assets/finance.svg"

/**
 * 
 * @param {object} props
 * @param {string} background A hexadecimal color code
 * @param {string} image Link to an SVG image
 * @constant {int} financeData 
 * 
 * @returns {JSX.Element}
 */



const FinanceFortuneDatas = () => {

    const [financeData, setFinanceData] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFinanceData(JSON.parse(localStorage.getItem('financeData')));
        }
    }, []);


    return (
        <div className="financeFortuneDatas">
            <div>
                {/* insérer variable $colorYellow */}
                <FormatIcon background="#FCC43E" image={finance} />
            </div>
            <div>
                <h3>Argent</h3>
                <h2>${financeData}</h2>
                <StatsData />
            </div>
            <div>
                <SmallChart />
            </div>
        </div>
    )
}

export default FinanceFortuneDatas;