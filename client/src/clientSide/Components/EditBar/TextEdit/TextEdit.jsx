import React, { useEffect, useState } from "react";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { SketchPicker } from "react-color";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  updateHeading,
  changeFontFamily,
  updateTextColor,
  updateTextAlignment,
  toggleStyle,
  updateBackgroundColor
} from "../../../redux/actions/headingAction";

const TextEdit = ({
  selectedText,
  setSelectedText,
  selectedHeading,
  selectedFontSize,
  setSelectedFontSize,
  handleDelete,
  selectedFontFamily,
  setSelectedFontFamily,
  selectedTextColor,
  setSelectedTextColor,
  selectedTextAlignment,
  setSelectedTextAlignment,
  selectedBold,
  selectedItalic,
  selectedUnderline,
  setSelectedBold,
  setSelectedItalic,
  setSelectedUnderline,
  selectedBackgroundColor,
  setSelectedBackgroundColor
}) => {
  const [text, setText] = useState(selectedText);
  const [fontSize, setFontSize] = useState(selectedFontSize);
  const [fontFamily, setFontFamily] = useState(selectedFontFamily);
  const [textColor, setTextColor] = useState(" ");
  const [bgColor, setBgColor] = useState("")
  const standardFontSizes = [
    8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 39, 48, 58, 72, 96,
  ];

  const standardFontFamily = [
    "Roboto sans",
    "Times New Roman",
    "Arial",
    "Cambria",
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve the state from localStorage when the component mounts
    const storedText = localStorage.getItem("text") || selectedText;
    const storedFontSize =
      parseInt(localStorage.getItem("fontSize")) || selectedFontSize;
    const storedFontFamily =
      localStorage.getItem("fontFamily") || selectedFontFamily;

    setText(storedText);
    setFontSize(storedFontSize);
    setFontFamily(storedFontFamily);
  }, [selectedText, selectedFontSize, selectedFontFamily]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setSelectedText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setFontSize(newSize);
    setSelectedFontSize(newSize);
    dispatch(updateFontSize(selectedHeading, newSize));
  };

  const handleUpdate = () => {
    // Save the state to localStorage when the text is updated
    localStorage.setItem("text", text);
    localStorage.setItem("fontSize", fontSize);
    localStorage.setItem("fontFamily", fontFamily);

    dispatch(updateHeading(selectedHeading, { text: text }));
  };

  const handleFontFamilyChange = (e) => {
    const newFontFamily = e.target.value;
    setFontFamily(newFontFamily);
    setSelectedFontFamily(newFontFamily);
    dispatch(changeFontFamily(selectedHeading, newFontFamily));
  };

  const handleTextColorChange = (color) => {
    const newColor = color;
    setTextColor(newColor);
    setSelectedTextColor(newColor);
    dispatch(updateTextColor(selectedHeading, newColor));
  };
 
  const handleBackgroundColorChange = (color) => {
    const newColor = color;
    setBgColor(newColor);
    setSelectedBackgroundColor(newColor);
    dispatch(updateBackgroundColor(selectedHeading, newColor));
  }

  const handleTextAlignmentChange = (alignment) => {
    setSelectedTextAlignment(alignment);
    dispatch(updateTextAlignment(selectedHeading, alignment));
  };

  const handleToggleStyle = (style) => {
    dispatch(toggleStyle(selectedHeading, style));
  };

  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <div className="d-flex align-items-center justify-content-between">
              <input
                type="text"
                className="border-1 me-1"
                value={text}
                onChange={handleTextChange}
              />
              <button
                className="me-1 p-1 btn btn-primary"
                onClick={handleUpdate}
              >
                Update
              </button>
              <select
                name="fontFamily"
                id="fontFamily"
                value={fontFamily}
                onChange={handleFontFamilyChange}
                style={{ border: "1px solid black", outline: "none" }}
              >
                {standardFontFamily.map((fontFamily) => (
                  <option key={fontFamily} value={fontFamily}>
                    {fontFamily}
                  </option>
                ))}
              </select>

              <select
                className="mx-1"
                name="fontSize"
                value={fontSize}
                onChange={handleFontSizeChange}
                style={{ border: "1px solid black", outline: "none" }}
              >
                {standardFontSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
                {standardFontSizes.indexOf(fontSize) === -1 && (
                  <option value={fontSize}>{fontSize}</option>
                )}
              </select>

              <input
                type="color"
                value={selectedTextColor}
                style={{ marginLeft: "10px", height: "25px" }}
                onChange={(e) => handleTextColorChange(e.target.value)}
              />
               {/* <input
                type="color"
                value={selectedBackgroundColor}
                style={{ marginLeft: "10px", height: "25px" }}
                onChange={(e) => handleBackgroundColorChange(e.target.value)}
              /> */}
             <div className="d-flex align-items-center">
                <button
                  className={`fs-5 fw-bold ${
                    selectedBold ? "selected" : ""
                  }`}
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                  }}
                  onClick={() => handleToggleStyle("bold")}
                >
                  B
                </button>
                <button
                  className={`fs-4 fw-bold fst-italic ${
                    selectedItalic ? "selected" : ""
                  }`}
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                  }}
                  onClick={() => handleToggleStyle("italic")}
                >
                  <pre className="mt-3">I</pre>
                </button>
                <button
                  className={`fs-5 fw-bold ${
                    selectedUnderline ? "selected" : ""
                  }`}
                  style={{
                    background: "white",
                    border: "none",
                    color: "#555555",
                    outline: "none",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleToggleStyle("underline")}
                >
                  U
                </button>
              </div>
              <div className="alignment-buttons d-flex">
                <button
                  style={{
                    backgroundColor:
                      selectedTextAlignment === "left" ? "#eee" : "white",
                    border: "none",
                  }}
                  onClick={() => handleTextAlignmentChange("left")}
                >
                  <AiOutlineAlignLeft />
                </button>
                <button
                  style={{
                    backgroundColor:
                      selectedTextAlignment === "center" ? "#eee" : "white",
                    border: "none",
                  }}
                  onClick={() => handleTextAlignmentChange("center")}
                >
                  <AiOutlineAlignCenter />
                </button>
                <button
                  style={{
                    backgroundColor:
                      selectedTextAlignment === "right" ? "#eee" : "white",
                    border: "none",
                  }}
                  onClick={() => handleTextAlignmentChange("right")}
                >
                  <AiOutlineAlignRight />
                </button>
              </div>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  outline: "none",
                  border: "none",
                  fontSize: "20px",
                }}
                onClick={handleDelete}
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
