import React from "react";
import data from "../../../fakeData.json";

const ManageEmployeeDash = () => {
  const titleArray = Object.keys(data[0]);

  titleArray.splice(0, 2);

  return (
    <div className="container-dashboard-employee">
      {/* <div className="container-info"> */}
      <table>
        <thead>
          <tr>
            <th className="semiBold th-name">Nom</th>
            <th className="semiBold">Grade</th>
            <th className="semiBold">Date d'emploi</th>
            <th className="semiBold">Téléphone</th>
            <th className="semiBold">Actions</th>
            <th className="semiBold">Plus</th>
          </tr>
        </thead>
        <tbody>
          {data.map((t) => (
            <tr key={t.id}>
              <td>
                <div className="wrapper-flex-name-avatar">
                  <div>
                    <img src={t.avatar} alt="avatar" />
                  </div>
                  <p className="bold">{t.name}</p>
                </div>
              </td>
              <td>
                <p>{t.grade}</p>
              </td>
              <td className="td-date regular">{t.date}</td>
              <td className="td-phone regular">{t.phone}</td>
              <td>Augmenter</td>
              <td>Reglage</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <p>Affichage</p>
        <span>Number</span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ManageEmployeeDash;
