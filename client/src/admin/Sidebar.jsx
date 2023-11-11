import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../clientSide/redux/actions/setActiveComponent";
import styled from "styled-components";

const NavItem = styled(Nav.Item)`
  background: ${(props) =>
    props.active ? "linear-gradient(to right, #4a90e2, #8253de)" : "transparent"};
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

  const handleClick = (component) => {
    setSelectedButton(component);
    dispatch(setActiveComponent(component));
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="flex-md-column flex-row"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto me-4 mb-3" />
      <Navbar.Collapse id="responsive-navbar-nav" className="mx-3 ">
        <Nav className="flex-md-column flex-row">
          <NavItem
            active={selectedButton === "Dashboard"}
            onClick={() => handleClick("Dashboard")}
          >
            Dashboard
          </NavItem>
          <NavItem
            active={selectedButton === "User Profile"}
            onClick={() => handleClick("User Profile")}
          >
            User Profile
          </NavItem>
          <NavItem
            active={selectedButton === "Design Tools"}
            onClick={() => handleClick("Design Tools")}
          >
            Design Tools
          </NavItem>
          <NavItem
            active={selectedButton === "Add Templates"}
            onClick={() => handleClick("Add Templates")}
          >
            Add Templates
          </NavItem>
          <NavItem
            active={selectedButton === "My Account"}
            onClick={() => handleClick("My Account")}
          >
            My Account
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
