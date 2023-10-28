import React from 'react';
import './Dashboard'; // Import your CSS file
import Sidebar from './Sidebar';
import Header from './Header';
const EmailPage = () => {
  return (
    <div className="email-page">
      <Sidebar/>
      <div className="email-page-header">
        <Header/>
        <div className="email-logo">Gmail</div>
        <div className="email-search-bar">
          <input type="text" placeholder="Search mail" />
          <button>Search</button>
        </div>
        <div className="email-user-menu">
          <button>Compose</button>
          <button>Settings</button>
          <button>Profile</button>
        </div>
      </div>
      <div className="email-page-content">
        {/* Your email list and email content go here */}
      </div>
    </div>
  );
};

export default EmailPage;
