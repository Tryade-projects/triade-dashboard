import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ScrollPagesContainer from "../../components/ScrollPagesContainer/ScrollPagesContainer";


/**
 * 
 * @param {object} props
 * @param {object[]} employees An array of all employees
 * 
 * @returns {JSX.Element}
 */

const Finance = ({ employees }) => {


  return (
    <div className="main mainFinance">
      <Header title={"Finances"} />
      <main>
        
        <ScrollPagesContainer employees={employees} />

      </main>
    </div>
  )
};



export default Finance;

