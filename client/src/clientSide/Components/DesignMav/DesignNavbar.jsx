import React from "react";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
import { BiUndo, BiRedo } from "react-icons/bi";
import { NavDropdown } from "react-bootstrap";
import {SlLogout} from "react-icons/sl"
const DesignNavbar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className=" p-2 fs-5"
        style={{ backgroundColor: "#2c2c44" }}
      >
        <Container
          fluid
          className="d-flex flex-wrap justify-content-between align-items-center"
        >
          <Navbar.Brand className="mx-auto mx-md-0 text-light fw-bold ">
            <NavLink to={"/"} className="text-decoration-none text-light">
              DESIGN<span style={{ color: "#fa7b05" }}>WORLD</span>
            </NavLink>
          </Navbar.Brand>
          <div className="d-flex">
            <Button
              variant="transperant"
              className="text-secondary fw-bold d-flex align-items-center"
            >
              <BiUndo style={{ fontSize: "25px" }} className="me-1"></BiUndo>
              Undo
            </Button>
            <Button
              variant="transperant"
              className="text-secondary fw-bold d-flex align-items-center"
            >
              <BiRedo style={{ fontSize: "25px" }} className="me-1"></BiRedo>
              Redo
            </Button>
            <div className="d-flex flex-wrap align-items-center mx-auto mx-md-0 mt-2 mt-md-0">
              <Button
                className="mx-2"
                style={{
                  fontWeight: "500",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  color: "white",
                  backgroundColor: "#3d3d55",
                }}
              >
                Save
              </Button>
              <Button
                className="mx-2"
                style={{
                  fontWeight: "500",
                  border: "none",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  backgroundColor: "#3d3d55",
                  color: "#ffffff",
                }}
              >
                Download
              </Button>
            </div>
          <Navbar>
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
          </Navbar>
              </div>
        </Container>
      </Navbar>
    </>
  );
};

export default DesignNavbar;
