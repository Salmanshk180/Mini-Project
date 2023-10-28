import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import { useDispatch } from "react-redux";
import {
  openLoginModal,
  openSignupModal,
} from "../../redux/actions/modalActions";
const MainNavbar = () => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(openLoginModal());
  };

  const handleSignupClick = () => {
    dispatch(openSignupModal());
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary p-4 fs-5">
        <Container>
          <Navbar.Brand href="#home" className="mx-3">
            DesignWorld
          </Navbar.Brand>
          
              <Nav.Link href="#home" className="mx-3">
                Templates
              </Nav.Link>
              <Nav.Link href="/about" className="mx-3">
                About
              </Nav.Link>
            
            <Nav className="d-flex flex-md-row">
              <Button
                onClick={handleLoginClick}
                className="mx-2 my-1 my-lg-0"
                variant="light"
                style={{
                  fontWeight: "500",
                  border: "1px solid #c4c3c2",
                  borderRadius: "50px",
                  padding: "10px 20px",
                }}
              >
                Log In
              </Button>
              <Button
                className="mx-2 my-1 my-lg-0 signup-button"
                variant="light"
                style={{
                  fontWeight: "500",
                  border: "2px solid #fa7b05",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  backgroundColor: hovered ? "#fa7b05" : "#ffffff",
                  color: hovered ? "#ffffff" : "#fa7b05",
                }}
                onClick={handleSignupClick}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Sign Up-Free
              </Button>
            </Nav>
          
        </Container>
      </Navbar>
    </>
  );
};
export default  MainNavbar;