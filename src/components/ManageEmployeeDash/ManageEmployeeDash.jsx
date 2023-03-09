import React from "react";
import data from "../../../fakeData.json";
import gear from "../../assets/gear.svg";
import trending from "../../assets/trending.svg";
import decrease from "../../assets/decrease.svg";
import fired from "../../assets/fired.svg";

const ManageEmployeeDash = () => {
  const titleArray = Object.keys(data[0]);

  titleArray.splice(0, 2);

  const test = (grade) => {
    switch (grade) {
      case "Recrue":
        return "recrue";
      case "Sergent-Chef":
        return "sergent-chef";
      case "Commandant":
        return "commandant";
      default:
        return "";
    }
  };

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
              <td className="td-grade">
                <p className={test(t.grade)}>{t.grade}</p>
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
        <div className="pagination">
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.512 21.176L1.04797 11.736C0.599971 11.352 0.599971 10.648 1.04797 10.264L11.512 0.824027C12.184 0.216027 13.272 0.664026 13.272 1.56003L13.272 20.44C13.272 21.336 12.184 21.784 11.512 21.176Z"
              fill="#A098AE"
            />
          </svg>
          <div>1</div>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.48803 0.823973L12.952 10.264C13.4 10.648 13.4 11.352 12.952 11.736L2.48803 21.176C1.81603 21.784 0.728027 21.336 0.728027 20.44L0.728028 1.55997C0.728028 0.663973 1.81603 0.215973 2.48803 0.823973Z"
              fill="#A098AE"
            />
          </svg>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ManageEmployeeDash;
