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
          <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path class="st0" d="M28,49C16.4,49,7,39.6,7,28c0-6.7,3.3-13.1,8.7-17c0.9-0.6,2.1-0.4,2.8,0.5c0.6,0.9,0.4,2.1-0.5,2.8
		                            C13.7,17.4,11,22.6,11,28c0,9.4,7.6,17,17,17c9.4,0,17-7.6,17-17c0-5.4-2.6-10.6-7-13.8c-0.9-0.6-1.1-1.9-0.4-2.8
		                            c0.6-0.9,1.9-1.1,2.8-0.4c5.4,3.9,8.7,10.3,8.7,17C49,39.6,39.6,49,28,49z" fill="#BF2500" />
              <path class="st0" d="M28,27.5L28,27.5c-1.2,0-2.2-1-2.2-2.2V9.2C25.8,8,26.8,7,28,7h0c1.2,0,2.2,1,2.2,2.2v16.1
		                            C30.2,26.5,29.2,27.5,28,27.5z" fill="#BF2500" />
            </g>
          </svg>
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
