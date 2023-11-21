import React, { useState, useRef } from "react";
import { Stage, Layer, Rect, Line, Arrow } from "react-konva";
import { Button, Form } from "react-bootstrap";

const Shape = () => {
  const [elements, setElements] = useState([]);
  const [elementType, setElementType] = useState("shape");
  const [elementProperties, setElementProperties] = useState({});
  const [isDrawing, setIsDrawing] = useState(false);
  const stageRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDrawing(true);

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();
    setElementProperties({ startX: x, startY: y });
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const stage = stageRef.current;
    const { x, y } = stage.getPointerPosition();

    switch (elementType) {
      case "shape":
        setElementProperties((prevProps) => ({
          ...prevProps,
          width: x - prevProps.startX,
          height: y - prevProps.startY,
        }));
        break;
      case "line":
      case "arrow":
        setElementProperties((prevProps) => ({
          ...prevProps,
          endX: x,
          endY: y,
        }));
        break;
      default:
        break;
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);

    const newElement = {
      type: elementType,
      properties: { ...elementProperties },
    };

    setElements((prevElements) => [...prevElements, newElement]);
    setElementProperties({});
  };

  const handleElementTypeChange = (e) => {
    setElementType(e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="elementType">
          <Form.Label>Select Element Type:</Form.Label>
          <Form.Control as="select" onChange={handleElementTypeChange} value={elementType}>
            <option value="shape">Shape</option>
            <option value="line">Line</option>
            <option value="arrow">Arrow</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Stage
        width={window.innerWidth - 50}
        height={window.innerHeight - 150}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={stageRef}
      >
        <Layer>
          {elements.map((element, index) => {
            const { type, properties } = element;
            switch (type) {
              case "shape":
                return <Rect key={index} {...properties} />;
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

export default Shape;