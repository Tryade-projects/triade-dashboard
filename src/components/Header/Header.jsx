import React, { useState } from "react";
import disconnect from "../../assets/disconnect.svg";
import avatar from "../../assets/fake-avatar.svg";
// import SearchBar from "../SearchBar/SearchBar";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="bold title-sections">{title}</h1>
      <div className="container-disconnect-profil">
        <div className="disconnect-img">
          <img src={disconnect} alt="bouton de déconnexion" />
        </div>
        <div className="container-info-profil">
          <div className="name-status">
            <p className="semiBold">Zoral A.</p>
            <span>Admin</span>
          </div>
          <div>
            <div className="profil-img">
              <img src={avatar} alt="Un avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
