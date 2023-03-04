import React from "react";
import data from "../../../fakeData.json";
import tes from "../../assets/fake-avatar.svg";

console.log(data);

const Employees = () => {
  return (
    <div>
      <h1>Salut</h1>
      {data.map((test) => (
        <div>
          <li>{test.name}</li>
          <img src={test.avatar} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Employees;
