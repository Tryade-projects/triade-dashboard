import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Home from '../../assets/home.svg';
import Student from '../../assets/student.svg';

import Finance from '../../assets/finance.svg';
import Gear from '../../assets/gear.svg';
import Chat from '../../assets/chat.svg';
import PowerOff from '../../assets/power-off.svg';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebarHeader'>
        <img
          src={Logo}
          alt='Logo'
        />
        <p>Entreprise</p>
      </div>

      <div className='sidebarMenu'>
        <NavLink
          to='/home'
          className='sidebarLink'>
          <img
            src={Home}
            alt='accueil'
            width={40}
            height={40}
          />
          <span className='titleLink'>Accueil</span>
        </NavLink>

        <NavLink
          to='/employees'
          className='sidebarLink'>
          <img
            src={Student}
            alt='employés'
            width={40}
            height={40}
          />
          <span className='titleLink'>Employés</span>
        </NavLink>

        <NavLink
          to='/ranks'
          className='sidebarLink'>
          <span className='titleLink'>Grades</span>
        </NavLink>

        <NavLink
          to='/finance'
          className='sidebarLink'>
          <img
            src={Finance}
            alt='finances'
            width={40}
            height={40}
          />
          <span className='titleLink'>Finances</span>
        </NavLink>

        <NavLink
          to='/improvements'
          className='sidebarLink'>
          <img
            src={Gear}
            alt='améliorations'
            width={40}
            height={40}
          />
          <span className='titleLink'>Améliorations</span>
        </NavLink>

        <NavLink
          to='/activities'
          className='sidebarLink'>
          <img
            src={Chat}
            alt='activités'
            width={40}
            height={40}
          />
          <span className='titleLink'>Activitées</span>
        </NavLink>

        <button
          type='button'
          className='sidebarLink'>
          <img
            src={PowerOff}
            alt='déconnexion'
            width={40}
            height={40}
          />
          <span className='titleLink'>Fermer</span>
        </button>
      </div>

      <div className='sidebarFooter'>
        <p>iManagement - Gestion d'entreprise</p>
        <p>iFruit - Tous droits réservés</p>
      </div>
    </aside>
  );
};

export default Sidebar;
