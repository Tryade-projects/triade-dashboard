import React from "react";
import FormatIcon from "../FormatIcon/FormatIcon";
import StatsData from "../StatsData/StatsData";
import SmallChart from "../charts/SmallChart/SmallChart";
import finance from "/assets/finance.svg";

const FinanceFortuneDatas = ({ fortuneData, oldFortuneData }) => {
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
  );
};

export default FinanceFortuneDatas;
