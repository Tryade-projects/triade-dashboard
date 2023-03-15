import React from "react";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";

const BodyTableGrade = ({ profils }) => {
  return (
    <tbody>
      {profils.map((profil) => (
        <tr key={profil._id}>
          <td>
            <p>{profil.ranks}</p>
          </td>

          <td>
            <p>{profil.permissions}</p>
          </td>

          <td>{profil.salary}</td>

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

export default BodyTableGrade;
