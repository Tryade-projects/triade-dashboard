import React from "react";
import RoundButtonEmployee from "../RoundButtonEmployee/RoundButtonEmployee";
import { Link } from "react-router-dom";

const ShortEmployeeList = ({ employees }) => {
  console.log(employees);
  //Séectionner les 5 premiers résultats
  employees = employees.slice(0, 5);

  return (
    <div className="shortEmployeeList">
      {employees.map((employee) => (
        <div key={employee.id}>
          <div>
            <img src={employee.image} alt="Employee avatar" />
          </div>
          <div>
            <p>
              {employee.firstName} {employee.lastName}
            </p>
            <p>{employee.rank}</p>
          </div>
          <div>
            <Link
              to={`/employees/employee/detail/${employee.id}`}
              state={employee}
            >
              <RoundButtonEmployee />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortEmployeeList;
