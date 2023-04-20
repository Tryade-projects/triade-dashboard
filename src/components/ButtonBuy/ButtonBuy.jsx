import React from "react";

/**
 * Component used in a Capacity component to display a button to buy an improvement level.
 * @param {object} props - The props object.
 * @param {number} props.level - The improvement level of the button.
 * @param {number} props.actualLvlImprovement - The actual improvement level of the related capacity.
 * @param {function} props.setIsOpen - A function to change the state of a modal open/close.
 * @param {function} props.getTheData - A function to get data to fill a modal.
 * @param {string} props.category - The category of the related capacity.
 * @param {object} props.capacityData - The data of the related capacity.
 * @returns {JSX.Element} - The Buy button JSX element. 
 */ 

const ButtonBuy = ({
  level,
  actualLvlImprovement,
  setIsOpen,
  getTheData,
  category,
  capacityData
}) => {

  /**
   * Handles the modal open/close and calls a function to get data to fill the modal.
   */
  const handleOpenModal = () => {
    // Calls a function to get data to fill the modal.
    getTheData(category, capacityData);
    // Changes the state of a modal open/close to open.
    setIsOpen(true);
  };

  /**
   * Displays the appropriate button depending on the improvement level and the actual improvement level.
   * @returns {JSX.Element} - The appropriate button JSX element.
   */
  function actualLvlButton() {
    // If the improvement level is the next one, displays a button to buy it and open the modal on click.
    if (actualLvlImprovement + 1 === level) {
      return (
        <button onClick={() => handleOpenModal()}>
          <div className="buttonBuy">
            <p>Acheter</p>
          </div>
        </button>
      );
    }
    // If the improvement level is already owned, displays a button indicating that it is possessed.
    else if (actualLvlImprovement >= level) {
      return (
        <button>
          <div className="buttonBuy notSelectable">
            <p>Possédé</p>
          </div>
        </button>
      );
    }
    // If the improvement level is not yet owned, displays a button indicating the required level to buy it.
    else {
      return (
        <div className="buttonBuy notSelectable">
          <p>Niv. {level - 1} Requis</p>
        </div>
      );
    }
  }

  return actualLvlButton();
};

export default ButtonBuy;