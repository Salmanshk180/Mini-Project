import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Spinner,
} from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { SlLogout } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { adminLogout } from "../clientSide/redux/actions/adminAuthAction";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";
import { setActiveComponent } from '../clientSide/redux/actions/setActiveComponent';

const AdminNavbar = ({ setPageLoading }) => {
  const blueGradientColor = "linear-gradient(to right, #4a90e2, #8253de)";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    toast.success("Logged out");
    setPageLoading(true); // Activate the page loading state in the Dashboard
    setTimeout(async () => {
      try {
        await dispatch(adminLogout());
        setPageLoading(false); // Turn off the loading state after logout
        navigate("/admin/login");
      } catch (error) {
        console.error("Error logging out:", error);
        setLoggingOut(false);
        setPageLoading(false); // Reset the loading state in case of an error
      }
    }, 2500); // Simulated delay of 1.5 seconds
  };


  const handleMyAccountClick = () => {
    dispatch(setActiveComponent("My Account"));
    // Any additional logic you might need on My Account click in the Navbar
  };


  return (
    <div>
      <Navbar expand="lg" className="bg-dark p-3 fs-5 admin-navbar">
        <Container fluid>
          <Navbar.Brand className="ms-0">
            <NavLink
              to={"/admin/dashboard"}
              className="text-decoration-none text-light fw-bold fs-3"
            >
              Thumb
              <span
                style={{
                  background: blueGradientColor,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Craft
              </span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light border-0"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="w-100 justify-content-end w-100">
              <Dropdown className="text-light">
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
                <Dropdown.Menu className="text-center">
                  <Dropdown.Item>
                    <Link
                      to="/admin/my-account"
                      className="text-decoration-none text-dark"
                      onClick={handleMyAccountClick}
                    >
                      My Account
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Button
                      to="/logout"
                      className="text-decoration-none text-light"
                      onClick={handleLogout}
                      style={{
                        background: blueGradientColor,
                      }}
                    >
                      {loggingOut ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        <SlLogout className="me-1" />
                      )}{" "}
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
