import React, { useState } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
import {
  Form,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "react-bootstrap";

const TextEditor = () => {
  const [texts, setTexts] = useState([]);
  const [newText, setNewText] = useState("Type here");
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, setFontColor] = useState("black");
  const [textStyle, setTextStyle] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [selectedTextIndex, setSelectedTextIndex] = useState(null);
  const [cardData, setCardData] = useState([
    {
      name: "Text 1",
      src: "https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png",
    },
    {
      name: "Text 2",
      src: "https://designcap.s3-us-west-1.amazonaws.com/groups/a0dd10ce5ede642240af3226583b7dd7/preview.png",
    },
    // Add more card data as needed
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCardData = cardData.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTextToCanvas = () => {
    const newTextObj = {
      text: newText,
      fontSize,
      fontColor,
      textStyle: { ...textStyle },
      x: 20,
      y: 20,
      draggable: true,
    };
    setTexts([...texts, newTextObj]);
  };

  const addCanvasToCardData = () => {
    // You need to convert the canvas to an image and add it to cardData
    // This is a placeholder action and may require additional logic
    const canvasImage = stageRef.current.toDataURL();
    const newCard = {
      name: "New Image",
      src: canvasImage,
    };
    setCardData([...cardData, newCard]);
  };

  const stageRef = React.createRef();

  const applyTextStyle = (style) => {
    if (selectedTextIndex !== null) {
      const updatedTexts = [...texts];
      updatedTexts[selectedTextIndex].textStyle = {
        ...updatedTexts[selectedTextIndex].textStyle,
        ...style,
      };
      setTexts(updatedTexts);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search Text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow p-2"
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        {filteredCardData.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
            <Card className="border-0 shadow">
              <CardBody className="p-0">
                <CardHeader>
                  <img src={card.src} alt={card.name} className="img-fluid" />
                </CardHeader>
                <CardFooter>
                  <div className="text-center">
                    <div className="mb-1 fst-italic">{card.name}</div>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEditClick(card)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(card)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div className="d-flex m-1 bg-light shadow rounded" style={{ border: "1px solid #aaaaaa" }}>
        <Stage
          width={400}
          height={400}
          className="m-2"
          style={{ border: "1px solid #dddddd" }}
          ref={stageRef}
        >
          <Layer>
            <Rect width={400} height={400} fill="white" />
            {texts.map((textObj, index) => (
              <Text
                key={index}
                x={textObj.x}
                y={textObj.y}
                text={textObj.text}
                fontSize={textObj.fontSize}
                fill={textObj.fontColor}
                fontStyle={textObj.textStyle.italic ? "italic" : "normal"}
                textDecoration={textObj.textStyle.underline ? "underline" : "none"}
                fontWeight={textObj.textStyle.bold ? "bold" : "normal"}
                draggable
                onClick={() => setSelectedTextIndex(index)}
              />
            ))}
          </Layer>
        </Stage>
        <Form className="m-2">
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
    <Form.Label className="me-2">Text Style</Form.Label>
    <ToggleButtonGroup type="checkbox">
      <ToggleButton
        variant="secondary"
        value="bold"
        active={textStyle.bold}
        onChange={() => applyTextStyle({ bold: !textStyle.bold })}
      >
        Bold
      </ToggleButton>
      <ToggleButton
        variant="secondary"
        value="italic"
        active={textStyle.italic}
        onChange={() => applyTextStyle({ italic: !textStyle.italic })}
      >
        Italic
      </ToggleButton>
      <ToggleButton
        variant="secondary"
        value="underline"
        active={textStyle.underline}
        onChange={() => applyTextStyle({ underline: !textStyle.underline })}
      >
        Underline
      </ToggleButton>
    </ToggleButtonGroup>
  </Form.Group>
  <Button variant="primary" className="me-2 mt-2" onClick={addTextToCanvas}>
    Add Text to Canvas
  </Button>
  <Button variant="success" className="mt-2" onClick={addCanvasToCardData}>
    Add Canvas to Card Data
  </Button>
</Form>

      </div>
    </div>
  );
};

export default TextEditor;
