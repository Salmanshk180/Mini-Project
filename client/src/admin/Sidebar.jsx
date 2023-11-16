import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../clientSide/redux/actions/setActiveComponent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled(Nav.Item)`
  background: ${(props) =>
    props.active
      ? "linear-gradient(to right, #4a90e2, #8253de)"
      : "transparent"};
  color: ${(props) => (props.active ? "white" : "black")};
  border: none;
  outline: none;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer; /* Cursor set to pointer */
`;

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState("Dashboard");
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleClick = (component) => {
    setSelectedButton(component);
    dispatch(setActiveComponent(component));
  };

  return (
    <div style={{ height: "100%" }}>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="flex-md-column flex-row h-100"
      >
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
          className="ms-auto me-4 mb-3"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={`mx-3 ${expanded ? "show" : ""}`}
        >
          <Nav className="flex-md-column flex-row h-100 align-items-start w-100">
            <Link to="/admin/dashboard" className="text-decoration-none">
              <NavItem
                active={selectedButton === "Dashboard"}
                onClick={() => handleClick("Dashboard")}
              >
                Dashboard
              </NavItem>
            </Link>
            <Link to="/admin/user-profile" className="text-decoration-none">
              <NavItem
                active={selectedButton === "User Profile"}
                onClick={() => handleClick("User Profile")}
              >
                User Profile
              </NavItem>
            </Link>
            <Link to="/admin/design-tools" className="text-decoration-none">
              <NavItem
                active={selectedButton === "Design Tools"}
                onClick={() => handleClick("Design Tools")}
              >
                Design Tools
              </NavItem>
            </Link>
            <Link to="/admin/add-templates" className="text-decoration-none">
              <NavItem
                active={selectedButton === "Add Templates"}
                onClick={() => handleClick("Add Templates")}
              >
                Add Templates
              </NavItem>
            </Link>
            <Link to="/admin/my-account" className="text-decoration-none">
              <NavItem
                active={selectedButton === "My Account"}
                onClick={() => handleClick("My Account")}
              >
                My Account
              </NavItem>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
