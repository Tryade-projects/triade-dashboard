import React from "react";
import data from "../../../fakeData.json";
import tes from "../../assets/fake-avatar.svg";
import Header from "../../components/Header/Header";

console.log(data);

const Employees = () => {
  return (
    <div>
      <Header title={"Employé"} />
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
