import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('');

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
          <span className='titleLink'>Accueil</span>
        </NavLink>

        <NavLink
          to='/employees'
          className='sidebarLink'>
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
          <span className='titleLink'>Finances</span>
        </NavLink>

        <NavLink
          to='/improvements'
          className='sidebarLink'>
          <span className='titleLink'>Améliorations</span>
        </NavLink>

        <NavLink
          to='/activities'
          className='sidebarLink'>
          <span className='titleLink'>Activitées</span>
        </NavLink>

        <button
          type='button'
          className='sidebarLink'>
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
