import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setActiveComponent } from "../clientSide/redux/actions/setActiveComponent";

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
      className="flex-column h-100"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-row flex-lg-row flex-lg-column vh-100">
          <Button
            className="sidebar-button text-start"
            style={{
              background:
                selectedButton === "Dashboard" ? "#fa7b05" : "transparent",
              color: selectedButton === "Dashboard" ? "white" : "black",
              border: "none",
              outline: "none",
              fontWeight: "500",
            }}
            onClick={() => {
              handleClick("Dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button
            className="sidebar-button text-start"
            style={{
              background:
                selectedButton === "User Profile" ? "#fa7b05" : "transparent",
              color: selectedButton === "User Profile" ? "white" : "black",
              border: "none",
              outline: "none",
              fontWeight: "500",
            }}
            onClick={() => {
              handleClick("User Profile");
            }}
          >
            User Profile
          </Button>
          <Button
            className="sidebar-button text-start"
            style={{
              background:
                selectedButton === "Design Tools" ? "#fa7b05" : "transparent",
              color: selectedButton === "Design Tools" ? "white" : "black",
              border: "none",
              outline: "none",
              fontWeight: "500",
            }}
            onClick={() => {
              handleClick("Design Tools");
            }}
          >
            Design Tools
          </Button>
          <Button
            className="sidebar-button text-start"
            style={{
              background:
                selectedButton === "Add Templates" ? "#fa7b05" : "transparent",
              color: selectedButton === "Add Templates" ? "white" : "black",
              border: "none",
              outline: "none",
              fontWeight: "500",
            }}
            onClick={() => {
              handleClick("Add Templates");
            }}
          >
            Add Templates
          </Button>
          <Button
            className="sidebar-button text-start"
            style={{
              background:
                selectedButton === "My Account" ? "#fa7b05" : "transparent",
              color: selectedButton === "My Account" ? "white" : "black",
              border: "none",
              outline: "none",
              fontWeight: "500",
            }}
            onClick={() => {
              handleClick("My Account");
            }}
          >
            My Account
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
