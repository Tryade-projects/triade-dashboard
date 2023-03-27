import React from 'react';


const StatsData = ({ oldData, nowData }) => {

    let data = 0;
    let textResponse = ""

    if (nowData < oldData) {
        data = ((nowData - oldData) / oldData) * 100
        data = Math.round(data)
        textResponse = <p><span style={{color: 'red'}}>{data}%</span> de moins (heb.)</p>;
        return textResponse
        
    } else if (nowData > oldData) {
        data = ((nowData - oldData) / oldData) * 100
        data = Math.round(data)
        textResponse = <p><span style={{color: 'green'}}>+{data}%</span> de plus (heb.)</p>;
        return textResponse
        
    } else {
        textResponse = <p><span>+{data}%</span> de plus (heb.)</p>;
    }


    return (
        <div>
            {textResponse}
        </div>
    )
}


export default StatsData