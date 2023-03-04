import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='sidebarMenu'>
        <ul>
          <li>
            <NavLink
              to='/home'
              className='sidebarLink'>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/employees'
              className='sidebarLink'>
              <span>Employees</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/finance'
              className='sidebarLink'>
              <span>Finance</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/improvements'
              className='sidebarLink'>
              <span>Improvements</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/activities'
              className='sidebarLink'>
              <span>Activities</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
