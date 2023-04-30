import React, { useState, useEffect } from "react";
import RoundButtonAdd from "../RoundButtonAdd/RoundButtonAdd";

const ShortEmployeeListHeader = ({ employees }) => {
  return (
    <div className="ShortEmployeeListHeader">
      <div>
        <h2>Vos Employés</h2>
        <p>Vous avez {employees.length} employés</p>
      </div>
      <div>
        <RoundButtonAdd />
      </div>
    </div>
  );
};

export default ShortEmployeeListHeader;
