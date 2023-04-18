import React, {useState} from "react";

/**
 * 
 * @param {*} contain The contain of the button
 * @returns 
 */

// const [actualLvlImprovement, setActualLvlImprovement] = useState(0);
const actualLvlImprovement = 1

const ButtonBuy = ({ level, actualLvlImprovement }) => {

  function actualLvl() {
    if (actualLvlImprovement + 1 === level) {
      return (
        <div className="buttonBuy">
          <p>Acheter</p>
        </div>
      );
    } else if (actualLvlImprovement >= level) {
      return (
        <div className="buttonBuy notSelectable">
          <p>Possédé</p>
        </div>
      );
    } else {
      return (
        <div className="buttonBuy notSelectable">
          <p>Niv. {level - 1} Requis</p>
        </div>
      );
    }
  }

  return <div className="buttonBuy">{actualLvl()}</div>;
};

export default ButtonBuy;