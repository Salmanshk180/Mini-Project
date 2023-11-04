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
import { SlLogout } from "react-icons/sl";
 <NavDropdown
              title={
                <>
                <span className="me-1" style={{fontSize:"14px"}}>salmanshaikh7118</span>
                <img
                  src="https://www.designcap.com/media/users/images/avatar.png"
                  style={{ height: "30px", borderRadius: "50%" }}
                  ></img>
                  </>
              }
              className="text-light"
              >
              <NavDropdown.Item>My Design</NavDropdown.Item>
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item><SlLogout style={{color:"#fa7b05"}} className="me-1"></SlLogout>Log Out</NavDropdown.Item>
            </NavDropdown>
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

            <NavDropdown
              title={
                <>
                  <span className="me-1" style={{ fontSize: "14px" }}>
                    salmanshaikh7118
                  </span>
                  <img
                    src="https://www.designcap.com/media/users/images/avatar.png"
                    style={{ height: "30px", borderRadius: "50%" }}
                  ></img>
                </>
              }
              className="text-light"
            >
              <NavDropdown.Item>My Account</NavDropdown.Item>
              <NavDropdown.Item>
                <SlLogout
                  style={{ color: "#fa7b05" }}
                  className="me-1"
                ></SlLogout>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
