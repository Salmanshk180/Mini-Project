import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { incrementFontSize, decrementFontSize } from '../../../redux/actions/textAction';
const TextEdit = () => {
  const dispatch = useDispatch();
  const fontSizes = useSelector((state) => state.text.fontSizes);
  const selectedTextid = useSelector((state) => state.selectedText.selectedText);
  const handleIncrementFontSize = () => {
   
      dispatch(incrementFontSize(selectedTextid));
  };

  const handleDecrementFontSize = () => {
      dispatch(decrementFontSize(selectedTextid));
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <NavDropdown title="Font Style" className="fw-bold">
              <NavDropdown.Item>Roboto Sans</NavDropdown.Item>
              <NavDropdown.Item>Times New Roman</NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="24" className='fw-bold'>
                    <NavDropdown.Item>24</NavDropdown.Item>
                    <NavDropdown.Item>35</NavDropdown.Item>
                </NavDropdown> */}
            <div
              className="d-flex align-items-baseline"
              style={{ border: "1px solid white" }}
            >
              <Button
                className="mx-1"
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  border: "none",
                  padding: "5px",
                }}
                onClick={handleDecrementFontSize}
              >
                -
              </Button>
              <input
                type="text"
                value={selectedTextid?fontSizes[selectedTextid]:24}
                style={{ width: "30px", textAlign: "center", border: "none" }}
              ></input>
              <Button
                className="mx-1"
                style={{
                  backgroundColor: "gray",
                  color: "black",
                  border: "none",
                  padding: "5px",
                }}
                onClick={handleIncrementFontSize}
              >
                +
              </Button>
            </div>
            <NavDropdown title="Color">
              <NavDropdown.Item>
                <SketchPicker />
              </NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex align-items-baseline">
              <Button className=" mx-1 ">B</Button>
              <Button className="mx-1">I</Button>
              <Button className="mx-1">U</Button>
            </div>
            <NavDropdown title="align" className="d-flex">
              <NavDropdown.Item>left</NavDropdown.Item>
              <NavDropdown.Item>center</NavDropdown.Item>
              <NavDropdown.Item>right</NavDropdown.Item>
            </NavDropdown>
            <Button>Delete</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TextEdit;
