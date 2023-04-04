import React from 'react'
import { Link } from "react-router-dom"


const RoundButtonAdd = () => {
  return (
    <Link to="/employees/employee/add">
      <button className="roundButtonAdd">
        +
      </button>
    </Link>
  )
}

export default RoundButtonAdd