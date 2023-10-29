import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdDelete } from "react-icons/md";
import { FaArrowRotateRight, FaArrowRotateLeft } from "react-icons/fa6";
import { BiCrop } from "react-icons/bi";
import { BsCircleHalf,BsMagic} from "react-icons/bs";
const ImageEdit = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
          <button
                className="ms-2"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <BsMagic></BsMagic>
              </button> <button
                className="ms-2"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <BsCircleHalf></BsCircleHalf>
              </button>
            <button
                className="ms-2"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <BiCrop></BiCrop>
              </button>
            <div className="d-flex">
              <button
                className="ms-2"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <FaArrowRotateLeft></FaArrowRotateLeft>
              </button>{" "}
              <button
                className="ms-2"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
              >
                <FaArrowRotateRight></FaArrowRotateRight>
              </button>{" "}
            </div>
            <button
              className="ms-2"
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

export default ImageEdit;
