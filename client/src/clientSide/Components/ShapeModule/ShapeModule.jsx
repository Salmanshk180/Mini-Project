import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Ellipse, Line, Arrow } from "react-konva";
import { Button, Form, Dropdown } from "react-bootstrap";
/*
const ShapeModule = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const stageRef = useRef(null);

  const elementOptions = {
    shape: [
      { type: "rectangle", label: "Rectangle", properties: { width: 100, height: 50, fill: "blue" } },
      { type: "ellipse", label: "Ellipse", properties: { radiusX: 50, radiusY: 25, fill: "green" } },
      // Add more shapes as needed
    ],
    line: [
      { type: "line", label: "Line", properties: { points: [0, 0, 100, 100], stroke: "red" } },
      // Add more lines as needed
    ],
    arrow: [
      { type: "arrow", label: "Arrow", properties: { points: [50, 50, 150, 150], stroke: "orange" } },
      // Add more arrows as needed
    ],
  };

  const handleCanvasClick = (e) => {
    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    if (selectedElement) {
      const newElement = {
        type: selectedElement.type,
        properties: { ...selectedElement.properties, x, y },
      };

      setElements((prevElements) => [...prevElements, newElement]);
    }
  };

  const handleElementSelection = (element) => {
    setSelectedElement(element);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px", marginRight: "20px" }}>
        <h5>Select an Element:</h5>
        <Form.Group controlId="elementType">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedElement ? selectedElement.label : "Select Element"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Object.entries(elementOptions).map(([category, elements]) => (
                <React.Fragment key={category}>
                  <Dropdown.Header>{category.charAt(0).toUpperCase() + category.slice(1)}</Dropdown.Header>
                  {elements.map((element, index) => (
                    <Dropdown.Item key={index} onClick={() => handleElementSelection(element)}>
                      {element.label}
                    </Dropdown.Item>
                  ))}
                </React.Fragment>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>
      </div>
      <Stage
        width={window.innerWidth - 300}
        height={window.innerHeight - 150}
        onClick={handleCanvasClick}
        ref={stageRef}
      >
        <Layer>
          {elements.map((element, index) => {
            const { type, properties } = element;
            switch (type) {
              case "rectangle":
                return <Rect key={index} {...properties} />;
              case "ellipse":
                return <Ellipse key={index} {...properties} />;
              case "line":
                return <Line key={index} {...properties} />;
              case "arrow":
                return <Arrow key={index} {...properties} />;
              default:
                return null;
            }
          })}
        </Layer>
      </Stage>
      <Button variant="danger" onClick={() => setElements([])}>
        Clear Canvas
      </Button>
    </div>
  );
};
*/
export default ShapeModule;
