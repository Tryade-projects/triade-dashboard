import React from "react";
import { Link } from "react-router-dom";
import ButtonTransaction from "../../ButtonActions/ButtonActions";
import styles from "./_wrapperAvatarActions.module.scss";
import avatar from "../../../assets/fake-avatar.svg";
import trending from "../../../assets/trending.svg";
import decrease from "../../../assets/decrease.svg";
import fired from "../../../assets/fired.svg";
import gear from "../../../assets/gear.svg";

const WrapperAvatarActions = ({ profil }) => {
  return (
    <div className={styles.wrapperAvatar}>
      <div className={styles.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.actions}>
        <div>
          <ButtonTransaction icon={trending} alt={"Bouton pour promouvoir l'employé"} title={"Promouvoir"} />
        </div>
        <div>
          <ButtonTransaction icon={decrease} alt={"Bouton pour rétrograder l'employé"} title={"Rétrograder"} />
        </div>
        <div>
          <ButtonTransaction icon={fired} alt={"Bouton pour licensier l'employé"} title={"Licencier"} />
        </div>
        <div>
          <Link to={`/employees/employee/add/${profil.id}`} state={profil}>
            <ButtonTransaction icon={gear} alt={"Bouton pour voir les détails de l'employé"} title={"Modifier"}  />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WrapperAvatarActions;
