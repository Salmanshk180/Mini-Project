import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

const ShapeEdit = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <Button className="mx-1">Pick a color</Button>
            <Button className="mx-1">Opacity</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default ShapeEdit;
