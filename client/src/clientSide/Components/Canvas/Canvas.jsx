import React, { useEffect, useState,useRef } from "react";
import { Stage, Layer, Text, Rect, Line, Image, Group, Circle } from "react-konva";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import useImage from "use-image";
import EditBar from "../EditBar/EditBar";
import { selectedText } from "../../redux/actions/selectedTextAction";
const Canvas = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scale = Math.min(windowSize.width / 800, windowSize.height / 600);
  const headings = useSelector((state) => state.heading.heading1);
  const shapes = useSelector((state) => state.shape.shapes);
  const images = useSelector((state) => state.image.images);
  const fontSizes = useSelector((state) => state.text.fontSizes);
  const dispatch = useDispatch();
  const selectedTextId = useSelector(
    (state) => state.selectedText.selectedText
  );
  const handleText = (id) => {
    dispatch(selectedText(id));
  };
  const Images = () => {
    return (
      <>
        {images.map((image, index) => {
          const [imageOne] = useImage(image.img);

          return <Image key={index} image={imageOne} draggable></Image>;
        })}
      </>
    );
  };


  const textRef = useRef(null);
  const rectRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = () => { };

  const handleCanvasClick = () => {
    setSelectedComponent(null);
  };
  
  return (
    <div className="my-auto mt-5 vh-100">
      <div className="vh-100">
        <Stage
          width={640}
          height={360}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleCanvasClick}
        >
          <Layer>
            <Group>
              <Rect
                fill="#ffffff"
                height={360}
                width={640}
                stroke={"#aaaaaa"}
              ></Rect>
              {/* {headings.map((heading,index) => (
                <>
                <Text key={index} text={heading.text} draggable shadowEnabled />
                </>
              ))} */}
              {Object.entries(headings).sort(([id1], [id2]) => id1 - id2).map(([elementId, textData]) => (
                <Text
                key={elementId}
                  text={`Text Element ${textData.text}`}
                  // x={textData.x}
                  // y={textData.y}
                  x={50}
                  y={50}
                  width={200}
                  height={50}
                  fontSize={
                    elementId == selectedTextId
                    ? fontSizes[selectedTextId]
                    : fontSizes[elementId]
                  }
                  onPointerClick={() => {handleText(elementId)}}
                  fontFamily="Arial"
                  fill="black"
                  draggable
                />
                ))}
               
              {shapes.map((shape, index) => (
                <>
                  <Line
                    key={index}
                    x={shape.x}
                    y={shape.y}
                    points={shape.points}
                    stroke={shape.stroke}
                    draggable
                  />
                </>
              ))}
              <Images />
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
