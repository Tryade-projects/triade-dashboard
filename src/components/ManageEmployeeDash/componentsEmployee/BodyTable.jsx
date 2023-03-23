import React from "react";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
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
              <ButtonTransaction icon={trending} alt={"image pour augmenter"} />
              <ButtonTransaction icon={decrease} alt={"image pour diminuer"} />
              <ButtonTransaction icon={fired} alt={"image pour virer"} />
            </div>
          </td>
          <td className="td-more">
            <div>
              <ButtonTransaction
                icon={gear}
                alt={"image de réglage pour avoir plus d'accès"}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;
