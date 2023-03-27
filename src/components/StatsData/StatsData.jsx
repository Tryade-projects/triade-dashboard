import React from 'react';


const StatsData = ({ oldData, nowData }) => {

    let data = 0;
    let textResponse = ""

    if (nowData < oldData) {
        data = ((nowData - oldData) / oldData) * 100
        data = Math.round(data)
        textResponse = <p className="responseDatas"><span style={{color: '#ff4550'}}>{data}%</span> de moins (heb.)</p>;
        return textResponse
        
    } else if (nowData > oldData) {
        data = ((nowData - oldData) / oldData) * 100
        data = Math.round(data)
        textResponse = <p className="responseDatas"><span style={{color: '#4cbc9a'}}>+{data}%</span> de plus (heb.)</p>;
        return textResponse
        
    } else {
        textResponse = <p className="responseDatas"><span>+{data}%</span> de plus (heb.)</p>;
    }


    return (
        <div className="statsData">
            {textResponse}
        </div>
    )
}


export default StatsData