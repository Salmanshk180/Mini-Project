import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TextEdit from "./TextEdit/TextEdit";
import ImageEdit from "./ImageEdit/ImageEdit";
import ShapeEdit from "./ShapeEdit/ShapeEdit";

const EditBar = ({
  selectedText,
  setSelectedText,
  selectedHeading,
  selectedFontSize,
  setSelectedFontSize,
  onDelete,
  selectedFontFamily,
  setSelectedFontFamily,
  selectedTextColor,
  setSelectedTextColor,
  selectedTextAlignment,
  setSelectedTextAlignment,
  selectedBold,
  selectedItalic,
  selectedunderline,
  setSelectedBold,
  setSelectedItalic,
  setSelectedUnderline,
  selectedBackgroundColor,
  setSelctedBackgroundColor
}) => {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary w-100"
        style={{ padding: 0 }}
      >
        <Container
          fluid
          className=" p-0"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <TextEdit
                selectedText={selectedText}
                setSelectedText={setSelectedText}
                selectedHeading={selectedHeading}
                selectedFontSize={selectedFontSize}
                setSelectedFontSize={setSelectedFontSize}
                handleDelete={onDelete}
                selectedFontFamily={selectedFontFamily}
                setSelectedFontFamily={setSelectedFontFamily}
                selectedTextColor={selectedTextColor}
                setSelectedTextColor={setSelectedTextColor}
                selectedTextAlignment={selectedTextAlignment}
                setSelectedTextAlignment={setSelectedTextAlignment}
                selectedBold={selectedBold}
                setSelectedBold={setSelectedBold}
                selectedItalic={selectedItalic}
                setSelectedItalic={setSelectedItalic}
                selectedunderline={selectedunderline}
                setSelectedUnderline={setSelectedUnderline}
                selectedBackgroundColor={selectedBackgroundColor}
                setSelectedBackgroundColor={setSelctedBackgroundColor}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default EditBar;
