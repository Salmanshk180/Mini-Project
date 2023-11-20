import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { Stage, Layer, Rect, Text, Group } from "react-konva";

const TextEditor = () => {
  const [texts, setTexts] = useState([]);
  const [newText, setNewText] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("white ");
  const [textBackgroundColor, setTextBackgroundColor] = useState("black");
  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [textAlignment, setTextAlignment] = useState("left");
  const [canvasName, setCanvasName] = useState("test");
  const [displayText, setDisplayText] = useState([]);
  const stageRef = React.createRef();
  const [selectedCanvasId, setSelectedCanvasId] = useState(null);
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
    };
    setTexts([...texts, newTextObj]);
  };
  
  const saveCanvas = () => {
    const canvasImage = stageRef.current.toDataURL();
    axios
    .post("http://localhost:3000/admin/addtext", {
      name: canvasName,
      elements: texts,
      src: canvasImage,
    })
    .then((response) => {
      console.log("Canvas saved to database:", response.data);

        // Fetch the updated canvas list after saving
        fetchCanvases();
      })
      .catch((error) => {
        console.error("Error saving canvas to database:", error);
      });
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
    const selectedCanvas = displayText.find((canvas) => canvas._id === canvasId);
    setTexts(selectedCanvas.elements);
  };
  const updateCanvas = () => {
    const canvasImage = stageRef.current.toDataURL();
    axios
      .put(`http://localhost:3000/admin/updatetext/${selectedCanvasId}`, {
        name: canvasName,
        elements: texts,
        src: canvasImage,
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
  return (
    <div>
      <div>
        <Form>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search Text"
            ></Form.Control>
          </Form.Group>
        </Form>
      </div>
      <div className="mt-2">
        <Card>
          <Card.Body className="bg-light">
            <Row>
              <Col>
                <Stage width={400} height={400} className="bg-white" ref={stageRef}>
                  <Layer>
                    {texts.map((textObj, index) => (
                      <Group
                        key={index}
                        x={textObj.x}
                        y={textObj.y}
                        draggable
                        onClick={() => setSelectedTextIndex(index)}
                      >
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
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control
                      type="number"
                      value={fontSize}
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Color</Form.Label>
                    <Form.Control
                      type="color"
                      value={fontColor}
                      onChange={(e) => setFontColor(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Text Background Color</Form.Label>
                    <Form.Control
                      type="color"
                      value={textBackgroundColor}
                      onChange={(e) => setTextBackgroundColor(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Font Family</Form.Label>
                    <Form.Control
                      as="select"
                      value={fontFamily}
                      onChange={(e) => setFontFamily(e.target.value)}
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
                        checked={textStyle.bold}
                        onChange={() =>
                          setTextStyle({ ...textStyle, bold: !textStyle.bold })
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        label="Italic"
                        checked={textStyle.italic}
                        onChange={() =>
                          setTextStyle({
                            ...textStyle,
                            italic: !textStyle.italic,
                          })
                        }
                      />
                      <Form.Check
                        type="checkbox"
                        label="Underline"
                        checked={textStyle.underline}
                        onChange={() =>
                          setTextStyle({
                            ...textStyle,
                            underline: !textStyle.underline,
                          })
                        }
                      />
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Text Alignment</Form.Label>
                    <Form.Control
                      as="select"
                      value={textAlignment}
                      onChange={(e) => setTextAlignment(e.target.value)}
                    >
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </Form.Control>
                  </Form.Group>
                  <Button variant="primary" onClick={addTextToCanvas}>
                    Add Text to Canvas
                  </Button>
                  <Button variant="primary" onClick={saveCanvas}>
                    Save Canvas
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div className="my-2">
      <Row>
          {displayText.map((canvas, canvasIndex) => (
            <Col key={canvasIndex} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  {canvas.src && (
                    <div>
                      <img
                        src={canvas.src}
                        alt={`Canvas ${canvasIndex}`}
                        style={{ width: "100%", height: "auto", border: "1px solid #eeeeee" }}
                      />
                      <Card.Title className="text-center mt-1">{canvas.name}</Card.Title>
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
