import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarVisible }) => {
  const [appsDropdownOpen, setAppsDropdownOpen] = useState(false);
  const [usersDropdownOpen, setUsersDropdownOpen] = useState(false);
  const [componentsDropdownOpen, setComponentsDropdownOpen] = useState(false);
  const [elementsDropdownOpen, setElementsDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [authenticationDropdownOpen, setAuthenticationDropdownOpen] = useState(false);


  // Function to toggle the apps dropdown
  const toggleAppsDropdown = () => {
    setAppsDropdownOpen(!appsDropdownOpen);
  };

  // Function to toggle the users dropdown
  const toggleUsersDropdown = () => {
    setUsersDropdownOpen(!usersDropdownOpen);
  };

  // Function to toggle the components dropdown
  const toggleComponentsDropdown = () => {
    setComponentsDropdownOpen(!componentsDropdownOpen);
  };

  // Function to toggle the elements dropdown
  const toggleElementsDropdown = () => {
    setElementsDropdownOpen(!elementsDropdownOpen);
  };

  // Function to toggle the pages dropdown
  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  // Function to toggle the authentication dropdown
  const toggleAuthenticationDropdown = () => {
    setAuthenticationDropdownOpen(!authenticationDropdownOpen);
  };


  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;
