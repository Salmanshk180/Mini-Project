import React from "react";
import { Container, Nav, Navbar, Dropdown,Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { adminLogout } from "../clientSide/redux/actions/adminAuthAction";

const AdminNavbar = () => {
  const blueGradientColor = "linear-gradient(to right, #4a90e2, #8253de)";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = ()=>{
    dispatch(adminLogout())
    navigate("/admin/login");
    
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-dark p-3 fs-5 admin-navbar">
        <Container fluid>
          <Navbar.Brand className="ms-0">
            <NavLink
              to={"/admin/dashboard"}
              className="text-decoration-none text-light fw-bold fs-3"
            >
              Thumb<span style={{ background: blueGradientColor, WebkitBackgroundClip: "text", color: "transparent" }}>Craft</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-end w-100">
              <Dropdown className="text-light" >
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="d-flex align-items-center bg-dark border-0"
                >
                  <span className="text-light fs-6 me-1">salmanshaikh7118</span>
                  <img
                    src="https://www.designcap.com/media/users/images/avatar.png"
                    style={{
                      height: "40px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                    alt="user"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>My Account</Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      to="/logout"
                      className="text-decoration-none text-dark"
                      onClick={()=>{handlelogout()}}

                    >
                      <SlLogout  className="me-1" />
                      Logout
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
