import React, { useState, useEffect } from "react";
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

    const [fortuneData, setFortuneData] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setFortuneData(JSON.parse(localStorage.getItem('fortuneData')));
        }
    }, []);

    const [oldFortuneData, setOldFortuneData] = useState([]);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setOldFortuneData(JSON.parse(localStorage.getItem('oldFortuneData')));
        }
    }, []);



    return (
        <div className="financeFortuneDatas">
            <div>
                <div>
                    {/* insérer variable $colorYellow */}
                    <FormatIcon background="#FCC43E" image={finance} />
                </div>
                <div>
                    <h3>Argent</h3>
                    <h2>${fortuneData}</h2>
                    <StatsData oldData={oldFortuneData} nowData={fortuneData} />
                </div>
            </div>
            <div>
                <SmallChart />
            </div>
        </div>
    )
}

export default FinanceFortuneDatas;