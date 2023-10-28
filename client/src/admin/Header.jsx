import React, { useState } from 'react';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setDropdownOpen(false); // Close the dropdown on logout
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
      <img src="https://cdn-icons-png.flaticon.com/128/1991/1991103.png" alt="Dashboard Logo" />
        <h1>Admin Dashboard</h1>
      </div>
      <nav className="navigation">
        <div className="icon" onClick={toggleSidebar}>
        <img src="https://cdn-icons-png.flaticon.com/128/8166/8166537.png" alt="Toggle Sidebar" />
        </div>
        
      </nav>
      <div className="user-profile">
        {loggedIn ? (
          <div className="user-dropdown">
            <span>Welcome, User</span>
            <div className="icon" onClick={toggleDropdown}>
              <img src="https://cdn-icons-png.flaticon.com/128/143/143271.png" alt="Open Dropdown" />
            </div>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <div className="icon" onClick={handleLogout}>
                  <img src="https://cdn-icons-png.flaticon.com/128/6568/6568599.png" alt="Logout" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="icon" onClick={handleLogin}>
            <img src="https://cdn-icons-png.flaticon.com/128/7141/7141726.png" alt="Login" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
