import React from "react";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
import { Link } from "react-router-dom";
import gear from "../../../assets/gear.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import avatar from "../../../assets/fake-avatar.svg";

const BodyTable = ({ profils }) => {
  return (
    <tbody>
      {profils.map((profil) => (
        <tr key={profil.id}>
          <td>
            <div className="wrapper-flex-name-avatar">
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <p className="bold">
                {profil.firstName} {profil.lastName}
              </p>
            </div>
          </td>

          <td className="td-grade">
<<<<<<< HEAD
            <p>{profil.rank}</p>
=======
            <p style={{ background: profil.colorRank }}>{profil.rank}</p>
>>>>>>> employee_detail
          </td>

          <td className="td-date regular">{profil.employee_at}</td>
          <td className="td-phone regular">{profil.phone} </td>

          <td className="td-action">
            <div className="wrapper-type-actions">
              <ButtonTransaction icon={trending} alt={"image pour augmenter"} />
              <ButtonTransaction icon={decrease} alt={"image pour diminuer"} />
              <ButtonTransaction icon={fired} alt={"image pour virer"} />
            </div>
          </td>
          <td className="td-more">
            <Link to={`employee/detail/${profil.id}`} state={profil}>
              <div>
                <ButtonTransaction
                  icon={gear}
                  alt={"image de réglage pour avoir plus d'accès"}
                />
              </div>
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default BodyTable;
