import React from 'react'
import { Link } from "react-router-dom"


const RoundButtonAdd = () => {
  return (
    <Link to="/EmployeeAdd">
      <button className="roundButtonAdd">
        +
      </button>
    </Link>
  )
}

export default RoundButtonAdd