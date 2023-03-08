import React from "react";
import data from "../../../fakeData.json";

const ManageEmployeeDash = () => {
  const titleArray = Object.keys(data[0]);

  titleArray.splice(0, 2);

  return (
    <div className="container-dashboard-employee">
      <div className="container-info">
        <table>
          <thead>
            <tr>
              {titleArray.map((t, i) => (
                <th key={i}>{t}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((t) => (
              <tr key={t.id}>
                <td className="t">
                  <img src={t.avatar} alt="" />
                  <p>{t.name}</p>
                </td>
                <td>{t.grade}</td>
                <td>{t.date}</td>
                <td>{t.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="grid-test">
          {/* {data.map((d) => (
            <div className="test" key={d.id}>
              <div>
                <img src={d.avatar} alt="" />
                <p>{d.name}</p>
              </div>
              <p className="grade">{d.grade}</p>
              <p className="date">{d.date}</p>
              <p className="phone">{d.phone}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default ManageEmployeeDash;
