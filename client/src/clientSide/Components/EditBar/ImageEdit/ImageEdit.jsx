import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const ImageEdit = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <Button className="mx-1">Effects</Button>
            <Button className="mx-1">Filter Adjust</Button>
            <Button className="mx-1">Crop</Button>
            <Button className="mx-1">Rotate Left</Button>
            <Button className="mx-1">Rotate Right</Button>
            <Button className="mx-1">Delete</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default ImageEdit;
