import React from "react";

/**
 * 
 * @param {*} contain The contain of the button
 * @returns 
 */

const ButtonBuy = ({text}) =>{

    return(
        <div className="buttonBuy">
            <p>{text}</p>
        </div>
    );
};

export default ButtonBuy;