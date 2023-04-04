import React from "react";
import Header from "../../components/Header/Header";
import ScrollPagesContainer from "../../components/ScrollPagesContainer/ScrollPagesContainer";


/**
 * 
 * @param {object} props
 * @param {object[]} props.employees An array of all employees
 * 
 * @returns {JSX.Element}
 */

const Finance = () => {


  return (
    <div className="main mainFinance">
      <Header title={"Finances"} />
      <main>
        
        <ScrollPagesContainer />

      </main>
    </div>
  )
};



export default Finance;

