import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button, Modal } from "react-bootstrap";
import { Stage, Layer, Rect, Text, Group } from "react-konva";

const TextEditor = () => {
  const [texts, setTexts] = useState([]);
  const [newText, setNewText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("#000000");
  const [textBackgroundColor, setTextBackgroundColor] = useState("#ffffff");
  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [textAlignment, setTextAlignment] = useState("left");
  const [showModal, setShowModal] = useState(false);
  const [canvasModalName, setCanvasModalName] = useState("");
  const [displayText, setDisplayText] = useState([]);
  const stageRef = React.createRef();
  const [selectedCanvasId, setSelectedCanvasId] = useState(null);
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [canvasBackgroundColor, setCanvasBackgroundColor] = useState("#ffffff");
  const addTextToCanvas = () => {
    const newTextObj = {
      text: newText,
      fontSize,
      fontColor,
      textBackgroundColor,
      textStyle: { ...textStyle },
      fontFamily,
      x: 20,
      y: 20,
      draggable: true,
      fontWeight: textStyle.bold ? "bold" : "normal",
      textAlignment,
      canvasBackgroundColor,
    };
    setTexts([...texts, newTextObj]);
    setNewText("");
    saveToHistory();
  };
  const updateTextProperties = (updatedProperties) => {
    if (selectedTextIndex !== null) {
      const updatedTexts = [...texts];
      const updatedText = { ...updatedTexts[selectedTextIndex] };

      // Update text properties
      Object.keys(updatedProperties).forEach((property) => {
        updatedText[property] = updatedProperties[property];
      });

      // Update fontWeight
      updatedText.fontWeight = updatedText.textStyle.bold ? "bold" : "normal";

      updatedTexts[selectedTextIndex] = updatedText;
      setTexts(updatedTexts);

      // Reset the value of newText when properties are updated
      setNewText("");
      saveToHistory();
    } else {
      // Update canvas background color if no text is selected
      setCanvasBackgroundColor(updatedProperties.canvasBackgroundColor);
    }
  };
  const saveCanvas = () => {
    const canvasImage = stageRef.current.toDataURL();
    const updatedTexts = texts.map((textObj) => ({
      ...textObj,
      x: textObj.x || 20,
      y: textObj.y || 20,
    }));

    axios
      .post("http://localhost:3000/admin/addtext", {
        name: canvasModalName,
        elements: updatedTexts,
        src: canvasImage,
        canvasBackgroundColor, // Include canvas background color here
      })
      .then((response) => {
        console.log("Canvas saved to database:", response.data);
        // Fetch the updated canvas list after saving
        fetchCanvases();
      })
      .catch((error) => {
        console.error("Error saving canvas to database:", error);
      });
    setSelectedCanvasId(null);
  };
  useEffect(() => {
    fetchCanvases();
  }, [displayText]); // The empty dependency array ensures this effect runs once on mount

  const fetchCanvases = () => {
    axios
      .get("http://localhost:3000/admin/getaddtext")
      .then((response) => {
        setDisplayText(response.data);
      })
      .catch((error) => {
        console.error("Error fetching canvas data:", error);
      });
  };

  const selectCanvas = (canvasId) => {
    setSelectedCanvasId(canvasId);
    const selectedCanvas = displayText.find(
      (canvas) => canvas._id === canvasId
    );
    setTexts(
      selectedCanvas.elements.map((textObj) => ({
        ...textObj,
        x: textObj.x || 20,
        y: textObj.y || 20,
      }))
    );
  };

  const handleTextDrag = (index, e) => {
    const updatedTexts = [...texts];
    const updatedText = { ...updatedTexts[index] };

    // Update x and y positions
    updatedText.x = e.target.x();
    updatedText.y = e.target.y();

    updatedTexts[index] = updatedText;
    setTexts(updatedTexts);
  };

  const updateCanvas = () => {
    const canvasImage = stageRef.current.toDataURL();
    const updatedTexts = texts.map((textObj) => ({
      ...textObj,
      x: textObj.x || 20,
      y: textObj.y || 20,
    }));

    axios
      .put(`http://localhost:3000/admin/updatetext/${selectedCanvasId}`, {
        name: canvasModalName,
        elements: updatedTexts,
        src: canvasImage,
        canvasBackgroundColor, // Include canvas background color here
      })
      .then((response) => {
        console.log("Canvas updated in database:", response.data);
        // Fetch the updated canvas list after updating
        fetchCanvases();
        // Clear the selected canvas
        setSelectedCanvasId(null);
      })
      .catch((error) => {
        console.error("Error updating canvas in database:", error);
      });
  };
  const deleteCanvas = (canvasId) => {
    axios
      .delete(`http://localhost:3000/admin/deletetext/${canvasId}`)
      .then((response) => {
        console.log("Canvas deleted from database:", response.data);
        // Fetch the updated canvas list after deleting
        fetchCanvases();
        // Clear the selected canvas
        setSelectedCanvasId(null);
      })
      .catch((error) => {
        console.error("Error deleting canvas from database:", error);
      });
  };
  const saveOrUpdateCanvas = () => {
    // Open the modal to capture the canvas name
    setShowModal(true);
  };

  const handleModalSave = () => {
    // Save or update canvas with the provided name
    const canvasImage = stageRef.current.toDataURL();
    const canvasData = {
      name: canvasModalName,
      elements: texts,
      src: canvasImage,
    };

    if (selectedCanvasId) {
      // Update canvas
      updateCanvas(canvasData);
    } else {
      // Save new canvas
      saveCanvas(canvasData);
    }

    // Close the modal
    setShowModal(false);
  };

  const handleModalCancel = () => {
    // Close the modal without saving
    setShowModal(false);
  };

  const saveToHistory = () => {
    const historySnapshot = [...texts];
    setHistory([...history, historySnapshot]);
    setCurrentHistoryIndex(history.length);
  };

  const undoChanges = () => {
    if (currentHistoryIndex > 0) {
      const newHistoryIndex = currentHistoryIndex - 1;
      setCurrentHistoryIndex(newHistoryIndex);
      setTexts([...history[newHistoryIndex]]);
    }
  };

  const redoChanges = () => {
    if (currentHistoryIndex < history.length - 1) {
      const newHistoryIndex = currentHistoryIndex + 1;
      setCurrentHistoryIndex(newHistoryIndex);
      setTexts([...history[newHistoryIndex]]);
    }
  };

  const filteredCanvases = displayText.filter((canvas) =>
    canvas.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteTextElement = (index) => {
    if (index !== null) {
      const updatedTexts = [...texts];
      updatedTexts.splice(index, 1);
      setTexts(updatedTexts);
      setSelectedTextIndex(null);
      saveToHistory();
    }
  };

  return (
    <div>
      <div>
        <Modal show={showModal} onHide={handleModalCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Canvas Name</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Canvas Name"
              value={canvasModalName}
              onChange={(e) => setCanvasModalName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalCancel}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleModalSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <Card className="shadow">
          <Card.Body className="bg-light">
            <Row>
              <Col>
                <Stage
                  width={400}
                  height={400}
                  ref={stageRef}
                  onClick={() => setSelectedTextIndex(null)}
                >
                  <Layer>
                    <Rect
                      width={400} // Set to the width of your canvas
                      height={400} // Set to the height of your canvas
                      stroke="black" // Border color
                      strokeWidth={2} // Border width
                      fill={canvasBackgroundColor}
                    />
                    {texts.map((textObj, index) => (
                      <Group
                        key={index}
                        x={textObj.x}
                        y={textObj.y}
                        draggable
                        onDragMove={(e) => handleTextDrag(index, e)}
                        onDblClick={() => setSelectedTextIndex(index)}
                      >
                        {selectedTextIndex === index && (
                          <Rect
                            x={-3} // Adjust the padding-left
                            y={-3} // Adjust the padding-top
                            width={textObj.text.length * textObj.fontSize + 6} // Adjust the padding-right
                            height={textObj.fontSize - textObj.text.length + 18} // Adjust the padding-bottom
                            stroke="blue"
                            strokeWidth={2}
                            fillEnabled={false}
                          />
                        )}
                        <Rect
                          width={textObj.text.length * textObj.fontSize}
                          height={textObj.fontSize}
                          fill={textObj.textBackgroundColor}
                        />
                        <Text
                          text={textObj.text}
                          fontSize={textObj.fontSize}
                          fill={textObj.fontColor}
                          fontStyle={
                            textObj.textStyle.italic ? "italic" : "normal"
                          }
                          textDecoration={
                            textObj.textStyle.underline ? "underline" : "none"
                          }
                          fontWeight={textObj.fontWeight}
                          fontFamily={textObj.fontFamily}
                          align={textObj.textAlignment}
                          width={textObj.text.length * textObj.fontSize}
                        />
                      </Group>
                    ))}
                  </Layer>
                </Stage>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Type here"
                      value={texts[selectedTextIndex]?.text || newText}
                      onChange={(e) =>
                        texts[selectedTextIndex]
                          ? updateTextProperties({ text: e.target.value })
                          : setNewText(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control
                      type="number"
                      value={texts[selectedTextIndex]?.fontSize || fontSize}
                      onChange={(e) =>
                        texts[selectedTextIndex]
                          ? updateTextProperties({ fontSize: e.target.value })
                          : setFontSize(parseInt(e.target.value))
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Color</Form.Label>
                    <Form.Control
                      type="color"
                      value={texts[selectedTextIndex]?.fontColor || fontColor}
                      onChange={(e) =>
                        texts[selectedTextIndex]
                          ? updateTextProperties({ fontColor: e.target.value })
                          : setFontColor(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Text Background Color</Form.Label>
                    <Form.Control
                      type="color"
                      value={
                        texts[selectedTextIndex]?.textBackgroundColor ||
                        textBackgroundColor
                      }
                      onChange={(e) =>
                        texts[selectedTextIndex]
                          ? updateTextProperties({
                              textBackgroundColor: e.target.value,
                            })
                          : setTextBackgroundColor(e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Canvas Background Color</Form.Label>
                    <Form.Control
                      type="color"
                      value={canvasBackgroundColor}
                      onChange={(e) => {
                        setCanvasBackgroundColor(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Family</Form.Label>
                    <Form.Control
                      as="select"
                      value={texts[selectedTextIndex]?.fontFamily || fontFamily}
                      onChange={(e) =>
                        updateTextProperties({ fontFamily: e.target.value })
                      }
                      disabled={selectedTextIndex === null}
                    >
                      <option value="Arial, sans-serif">
                        Arial, sans-serif
                      </option>
                      <option value="Times New Roman, serif">
                        Times New Roman, serif
                      </option>
                      <option value="Roboto, sans-serif">
                        Roboto, sans-serif
                      </option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Text Style</Form.Label>
                    <div className="d-flex justify-content-between w-50 my-1">
                      <Form.Check
                        type="checkbox"
                        label="Bold"
                        checked={
                          texts[selectedTextIndex]?.textStyle?.bold ||
                          textStyle.bold
                        }
                        onChange={() => {
                          const newTextStyle = {
                            ...texts[selectedTextIndex]?.textStyle,
                            bold: !texts[selectedTextIndex]?.textStyle?.bold,
                          };
                          updateTextProperties({ textStyle: newTextStyle });
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Italic"
                        checked={
                          texts[selectedTextIndex]?.textStyle?.italic ||
                          textStyle.italic
                        }
                        onChange={() => {
                          const newTextStyle = {
                            ...texts[selectedTextIndex]?.textStyle,
                            italic:
                              !texts[selectedTextIndex]?.textStyle?.italic,
                          };
                          updateTextProperties({ textStyle: newTextStyle });
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Underline"
                        checked={
                          texts[selectedTextIndex]?.textStyle?.underline ||
                          textStyle.underline
                        }
                        onChange={() => {
                          const newTextStyle = {
                            ...texts[selectedTextIndex]?.textStyle,
                            underline:
                              !texts[selectedTextIndex]?.textStyle?.underline,
                          };
                          updateTextProperties({ textStyle: newTextStyle });
                        }}
                      />
                    </div>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Text Alignment</Form.Label>
                    <Form.Control
                      as="select"
                      value={
                        texts[selectedTextIndex]?.textAlignment || textAlignment
                      }
                      onChange={(e) =>
                        texts[selectedTextIndex]
                          ? updateTextProperties({
                              textAlignment: e.target.value,
                            })
                          : setTextAlignment(e.target.value)
                      }
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Button
                      variant="danger"
                      onClick={() => deleteTextElement(selectedTextIndex)}
                      disabled={selectedTextIndex === null}
                    >
                      Delete Text
                    </Button>
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={undoChanges}
                    className="mx-1 mt-2"
                  >
                    Undo
                  </Button>
                  <Button
                    variant="primary"
                    onClick={redoChanges}
                    className="mx-1 mt-2"
                  >
                    Redo
                  </Button>

                  <Button
                    variant="primary"
                    onClick={addTextToCanvas}
                    className="mx-1 mt-2"
                  >
                    Add Text to Canvas
                  </Button>

                  <Button
                    variant="primary"
                    onClick={saveOrUpdateCanvas}
                    className="mx-1 mt-2"
                  >
                    {selectedCanvasId ? "Update Canvas" : "Save Canvas"}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div className="my-2">
        <Row>
          <Form className="my-2">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Search Text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
          {filteredCanvases.map((canvas, canvasIndex) => (
            <Col key={canvasIndex} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  {canvas.src && (
                    <div>
                      <img
                        src={canvas.src}
                        alt={`Canvas ${canvasIndex}`}
                        style={{
                          width: "100%",
                          height: "auto",
                          border: "1px solid #eeeeee",
                        }}
                      />
                      <Card.Title className="text-center mt-1">
                        {canvas.name}
                      </Card.Title>
                      <div className="d-flex justify-content-around">
                        <Button
                          variant="info"
                          onClick={() => selectCanvas(canvas._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => deleteCanvas(canvas._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default TextEditor;
