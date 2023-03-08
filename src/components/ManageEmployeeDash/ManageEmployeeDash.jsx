import React from "react";
import data from "../../../fakeData.json";
import gear from "../../assets/gear.svg";
import trending from "../../assets/trending.svg";
import decrease from "../../assets/decrease.svg";
import fired from "../../assets/fired.svg";

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
              <td className="td-action">
                <div className="wrapper-type-actions">
                  <div>
                    <img src={trending} alt="" />
                  </div>
                  <div>
                    <img className="decrease-img" src={decrease} alt="" />
                  </div>
                  <div>
                    <img src={fired} alt="" />
                  </div>
                </div>
              </td>
              <td className="td-more">
                <div>
                  <img
                    src={gear}
                    alt="image de réglage pour avoir plus d'accès"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-dashboard-employee">
        <p>
          Affichage de <span> {data.length}</span> employés sur
          <span> {data.length}</span>
        </p>
        <span>Number</span>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ManageEmployeeDash;
