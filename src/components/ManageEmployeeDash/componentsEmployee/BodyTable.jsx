import React from "react";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";

const BodyTable = ({ profils }) => {
  const classNameGrade = (grade) => {
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
    <tbody>
      {profils.map((profil) => (
        <tr key={profil.id}>
          <td>
            <div className="wrapper-flex-name-avatar">
              <div>
                <img src={profil.avatar} alt="avatar" />
              </div>
              <p className="bold">{profil.name}</p>
            </div>
          </td>

          <td className="td-grade">
            <p className={classNameGrade(profil.grade)}>{profil.grade}</p>
          </td>

          <td className="td-date regular">{profil.date}</td>
          <td className="td-phone regular">{profil.phone} </td>

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
              <img src={gear} alt="image de réglage pour avoir plus d'accès" />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;
