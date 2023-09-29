import React from "react";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import { NavLink } from "react-router-dom";
const DesignNavbar = () => {
  return (
    <>
      <Navbar className="p-4">
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          <Navbar.Brand className="mx-auto mx-md-0">DesignWorld</Navbar.Brand>
          <div className="d-flex flex-wrap align-items-center mx-auto mx-md-0 mt-2 mt-md-0">
            <Button
              className="mx-2"
              style={{
                fontWeight: "500",
                border: "2px solid #fa7b05",
                borderRadius: "50px",
                padding: "5px 20px",
                color: "#fa7b05",
                backgroundColor : "#ffffff",
              }}
            >
              Save
            </Button>
            <Button
              className="mx-2"
              style={{
                fontWeight: "500",
                border: "2px solid #fa7b05",
                borderRadius: "50px",
                padding: "5px 20px",
                backgroundColor: "#fa7b05",
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
