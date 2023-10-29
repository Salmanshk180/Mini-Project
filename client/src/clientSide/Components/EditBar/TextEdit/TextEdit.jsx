import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementFontSize,
  decrementFontSize,
} from "../../../redux/actions/textAction";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const TextEdit = () => {
  const dispatch = useDispatch();
  const fontSizes = useSelector((state) => state.text.fontSizes);
  const selectedTextid = useSelector(
    (state) => state.selectedText.selectedText
  );
  const handleIncrementFontSize = () => {
    dispatch(incrementFontSize(selectedTextid));
  };

  const handleDecrementFontSize = () => {
    dispatch(decrementFontSize(selectedTextid));
  };

  const [selectedfontStyle, setSelectedFontStyle] = useState("Roboto Sans");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };
  const [alignment, setAlignment] = useState("left");

  const alignText = (alignment) => {
    setAlignment(alignment);
  };

  const textStyle = {
    textAlign: alignment,
  };
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <div className="d-flex align-items-baseline justify-content-between">
              <select
                name="fontStyle"
                id="fontStyle"
                style={{ border: "none", outline: "none" }}
              >
                <option value="Roboto sans">Roboto Sans</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Cambria">Cambria</option>
                <option value="Arial">Arial</option>
              </select>
              {/* <NavDropdown title="24" className='fw-bold'>
                    <NavDropdown.Item>24</NavDropdown.Item>
                    <NavDropdown.Item>35</NavDropdown.Item>
                  </NavDropdown> */}
              {/* <div
              className="d-flex align-items-baseline"
            style={{ border: "1px solid white" }} */}
              {/* > */}
              {/* <Button
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
                value={selectedTextid ? fontSizes[selectedTextid] : 24}
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
              </div> */}
              <select
                className="ms-5 px-2"
                name="fontSize"
                style={{ border: "none", outline: "none" }}
              >
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="12">12</option>
                <option value="14">14</option>
                <option value="16">16</option>
                <option value="18">18</option>
                <option value="20">20</option>
                <option value="22">22</option>
                <option value="24">24</option>
                <option value="28">28</option>
                <option value="32">32</option>
                <option value="48">48</option>
                <option value="72">72</option>
                <option value="96">96</option>
              </select>
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
              <div className="d-flex align-items-baseline ms-5">
                <button
                  className=" mx-2 px-2 fs-5 fw-bold"
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                  }}
                >
                  B
                </button>
                <button
                  className=" mx-2 px-2 fs-4 fw-bold fst-italic"
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                  }}
                >
                  <pre>I</pre>
                </button>
                <button
                  className=" mx-2 px-2 fs-5 fw-bold"
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                    textDecoration: "underline",
                  }}
                >
                  U
                </button>
              </div>
              <div className="alignment-buttons ms-5">
                <button
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={() => alignText("left")}
                >
                  <AiOutlineAlignLeft></AiOutlineAlignLeft>
                </button>
                <button
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={() => alignText("center")}
                >
                  <AiOutlineAlignCenter></AiOutlineAlignCenter>
                </button>
                <button
                  style={{ backgroundColor: "white", border: "none" }}
                  onClick={() => alignText("right")}
                >
                  <AiOutlineAlignRight></AiOutlineAlignRight>
                </button>
              </div>
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
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TextEdit;
