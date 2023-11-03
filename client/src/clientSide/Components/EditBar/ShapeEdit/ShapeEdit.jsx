import React,{useState}from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";
import { SketchPicker } from "react-color";
import { MdDelete } from "react-icons/md";

const ShapeEdit = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
          <NavDropdown
                className="ms-5 bg-white"
                title={selectedColor}
                style={{ width: "100px" }}
              >
                <NavDropdown.Item style={{ backgroundColor: "white" }}>
                  <SketchPicker
                    color={selectedColor}
                    onChange={handleColorChange}
                  />
                </NavDropdown.Item>
              </NavDropdown>
              <button
                className="ms-5"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <MdDelete></MdDelete>
              </button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default ShapeEdit;
