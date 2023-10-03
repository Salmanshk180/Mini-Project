import React from "react";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
const DesignNavbar = () => {
  return (
    <>
      <Navbar className="py-2" style={{backgroundColor:"#2c2c44"}}>
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          <Navbar.Brand className="mx-auto mx-md-0 text-light fw-bold ">DesignWorld</Navbar.Brand>
          <div className="d-flex flex-wrap align-items-center mx-auto mx-md-0 mt-2 mt-md-0">
            <Button
              className="mx-2"
              style={{
                fontWeight: "500",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                color: "white",
                backgroundColor : "#3d3d55",
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
        </Container>
      </Navbar>
    </>
  );
};

export default DesignNavbar;
