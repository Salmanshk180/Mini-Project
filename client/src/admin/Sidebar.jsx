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
    <div className={`sidebar ${sidebarVisible ? '' : 'hidden'}`}>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Dashboard</a>
        </li>
        <li className="nav-item">
          <a href="/videos">Videos</a>
        </li>
        <li className="nav-item">
          <a href="/videos">Videos</a>
        </li>
        
        {/* Add an arrow icon next to "Apps" to indicate it's clickable */}
        <li className="nav-item">
          <span className="apps-dropdown-arrow" onClick={toggleAppsDropdown}>
            Apps
          </span>
          {/* Add the apps dropdown list */}
          {appsDropdownOpen && (
            <ul className="apps-dropdown">
              <li className="apps-item">
                <Link to="/admin/Email.jsx" className="apps-link">
                <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email Icon" />
                Email
                </Link>
              </li>
              <li className="apps-item">
                <Link to="/admin/Chat.jsx" className="apps-link">
                  <img src='https://cdn-icons-png.flaticon.com/128/892/892177.png ' alt='Chat Icon'/>
                  Chat</Link>
              </li>
              {/* Add more apps here */}
            </ul>
          )}
        </li>
        
        {/* Add an arrow icon next to "Users" to indicate it's clickable */}
        <li className="nav-item">
          <span className="users-dropdown-arrow" onClick={toggleUsersDropdown}>
            Users
          </span>
          {/* Add the users dropdown list */}
          {usersDropdownOpen && (
            <ul className="users-dropdown">
              <li className="users-item">
                <Link to="/admin/Account.jsx" className="users-link">Account</Link>
              </li>

              {/* Add more user-related links here */}
            </ul>
          )}
        </li>

        {/* Add an arrow icon next to "Components" to indicate it's clickable */}
        <li className="nav-item">
          <span className="components-dropdown-arrow" onClick={toggleComponentsDropdown}>
            Components
          </span>
          {/* Add the components dropdown list */}
          {componentsDropdownOpen && (
            <ul className="components-dropdown">
              <li className="components-item">
                <Link to="/admin/Tabs.jsx" className="components-link">Tabs</Link>
              </li>
              <li className="components-item">
                <Link to="/admin/Carousel.jsx" className="components-link">Carousel</Link>
              </li>
              <li className="components-item">
                <Link to="/pricing" className="components-link">Pricing</Link>
              </li>
              <li className="components-item">
                <Link to="/lightbox" className="components-link">Lightbox</Link>
              </li>
              {/* Add more components here */}
            </ul>
          )}
        </li>
        
        {/* Add an arrow icon next to "Elements" to indicate it's clickable */}
        <li className="nav-item">
          <span className="elements-dropdown-arrow" onClick={toggleElementsDropdown}>
            Elements
          </span>
          {/* Add the elements dropdown list */}
          {elementsDropdownOpen && (
            <ul className="elements-dropdown">
              <li className="elements-item">
                <Link to="/alerts" className="elements-link">Alerts</Link>
              </li>
              <li className="elements-item">
                <Link to="/buttons" className="elements-link">Buttons</Link>
              </li>
              <li className="elements-item">
                <Link to="/loader" className="elements-link">Loader</Link>
              </li>
              {/* Add more elements here */}
            </ul>
          )}
        </li>

        {/* Add an arrow icon next to "Pages" to indicate it's clickable */}
        <li className="nav-item">
          <span className="pages-dropdown-arrow" onClick={togglePagesDropdown}>
            Pages
          </span>
          {/* Add the pages dropdown list */}
          {pagesDropdownOpen && (
            <ul className="pages-dropdown">
              <li className="pages-item">
                <Link to="/404-error" className="pages-link">404 Error</Link>
              </li>
              <li className="pages-item">
                <Link to="/500-error" className="pages-link">500 Error</Link>
              </li>
              <li className="pages-item">
                <Link to="/503-error" className="pages-link">503 Error</Link>
              </li>
              {/* Add more pages here */}
            </ul>
          )}
        </li>
      {/* Add an arrow icon next to "Authentication" to indicate it's clickable */}
        <li className="nav-item">
          <span className="authentication-dropdown-arrow" onClick={toggleAuthenticationDropdown}>
            Authentication
          </span>
          {/* Add the authentication dropdown list */}
          {authenticationDropdownOpen && (
            <ul className="authentication-dropdown">
              <li className="authentication-item">
                <Link to="/login" className="authentication-link">Login</Link>
              </li>
              <li className="authentication-item">
                <Link to="/register" className="authentication-link">Register</Link>
              </li>
              <li className="authentication-item">
                <Link to="/reset-password" className="authentication-link">Reset Password</Link>
              </li>
              <li className="authentication-item">
                <Link to="/forgot-password" className="authentication-link">Forgot Password</Link>
              </li>
              <li className="authentication-item">
                <Link to="/account-info" className="authentication-link">Account Info</Link>
              </li>
              {/* Add more authentication-related links here */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
