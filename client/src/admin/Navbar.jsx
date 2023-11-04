// import { useState } from 'react'
// import './Dashboard.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'
// import VideoThumbnail from './Videothumbnail'
// function Dashboard() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />
//       <VideoThumbnail imageURL="your_image_url_here" title="Your Video Title" />
//     </div>
//   )
// }

// export default Dashboard

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import { NavLink } from "react-router-dom";
const AdminNavbar = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-dark p-3 fs-5 admin-navbar">
      <Container fluid>
        <Navbar.Brand className="ms-0">
          <NavLink
            to={"/"}
            className="text-decoration-none text-light fw-bold fs-3"
          >
            DESIGN<span style={{ color: "#fa7b05" }}>WORLD</span>
          </NavLink>{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "#fa7b05", border: "none" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex flex-md-row">
            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default AdminNavbar;
