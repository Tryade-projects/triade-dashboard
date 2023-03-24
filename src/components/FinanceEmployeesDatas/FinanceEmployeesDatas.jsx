import React from "react"
import FormatIcon from "../FormatIcon/FormatIcon"
import StatsData from "../StatsData/StatsData"
import studentWhite from "../../assets/studentWhite.svg"

/**
 * 
 * @param {object} props
 * @param {object[]} employees An array of all employees
 * @param {string} background A hexadecimal color code
 * @param {string} image Link to an SVG image
 * 
 * 
 * @returns {JSX.Element}
 */


const FinanceEmployeesDatas = (employees) => {

  return (
    <div className="financeEmployeesDatas">
      <div>
        {/* insérer variable $colorPurple */}
        <FormatIcon background="#4D44B5" image={studentWhite} />
      </div>
      <div>
        <h3>Employés</h3>
        <h2>{employees.length}</h2>
        <StatsData />
      </div>
    </div>

  )
}

export default FinanceEmployeesDatas