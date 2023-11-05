import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ChromePicker } from "react-color";

const Background = () => {
  const colors = [
    { hex: "#FF5733" }, // Red
    { hex: "#33FF57" }, // Green
    { hex: "#3357FF" }, // Blue
    { hex: "#FF33D6" }, // Pink
    { hex: "#FFD633" }, // Yellow
    { hex: "#8B008B" }, // Purple
    { hex: "#008080" }, // Teal
  ];
  const [selectedColor, setSelectedColor] = useState({ hex: "" }); // Initial background color
  const [showColorPicker, setShowColorPicker] = useState(true);
  const handleColorChange = (color) => {
    setSelectedColor({ ...selectedColor, hex: color.hex });
  };
  const columnsPerRow = 3;
  return (
    <div className="p-1  my-1">
      <Card className="w-100" style={{borderRadius:"0px"}}>
        <p className="text-center mb-0" style={{ color: "#aaaaaa" }}>
          Choose Background Color
        </p>
        <Card.Body>
          <Container>
            <Row>
              {Array.from({
                length: Math.ceil(colors.length / columnsPerRow),
              }).map((_, rowIndex) => (
                <div key={rowIndex} className="d-flex justify-content-between">
                  {colors
                    .slice(
                      rowIndex * columnsPerRow,
                      (rowIndex + 1) * columnsPerRow
                    )
                    .map((color, index) => (
                      <Button
                        key={index}
                        className="rounded-circle p-3 m-1"
                        style={{
                          backgroundColor: color.hex,
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => handleColorChange(color)}
                      ></Button>
                    ))}
                </div>
              ))}
            </Row>
          </Container>

          <ChromePicker
            color={selectedColor}
            onChange={handleColorChange}
            className="mt-4 pb-3 mx-auto"
          />
        </Card.Body>
        <div className="text-center">
          <p style={{ color: "#aaaaaa" }}>
            Selected Color: {selectedColor.hex}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Background;
