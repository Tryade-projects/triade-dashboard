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
        <svg>
          <circle cx="100" cy="100" r="90" strokeWidth="8" fill="transparent" />
        </svg>
        <img src={avatar} alt="" />
      </div>
      <div className={styles.actions}>
        <div>
          <ButtonTransaction icon={trending} alt={"image pour augmenter"} />
        </div>
        <div>
          <ButtonTransaction icon={decrease} alt={"image pour diminuer"} />
        </div>
        <div>
          <ButtonTransaction icon={fired} alt={"image pour virer"} />
        </div>
        <div>
          <Link to={`/employees/employee/add/${profil.id}`} state={profil}>
            <ButtonTransaction icon={gear} alt={"image pour paramétrer"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WrapperAvatarActions;
