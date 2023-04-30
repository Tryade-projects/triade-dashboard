import React from "react";

const StatsData = ({ oldData, nowData }) => {
  const displayResponse = () => {
    let data = 0;

    if (nowData < oldData) {
      data = ((nowData - oldData) / oldData) * 100;
      data = Math.round(data);
      return (
        <p className="responseDatas">
          <span style={{ color: "#ff4550" }}>{data}%</span> de moins (heb.)
        </p>
      );
    } else if (nowData > oldData) {
      data = ((nowData - oldData) / oldData) * 100;
      data = Math.round(data);
      return (
        <p className="responseDatas">
          <span style={{ color: "#4cbc9a" }}>+{data}%</span> de plus (heb.)
        </p>
      );
    } else {
      return (
        <p className="responseDatas">
          <span>+{data}%</span> de plus (heb.)
        </p>
      );
    }
  };

  return <div className="statsData">{displayResponse()}</div>;
};

export default StatsData;
