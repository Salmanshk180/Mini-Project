import React, { useEffect, useState } from "react";
import { Stage, Layer, Text, Rect, Line, Image,Group} from "react-konva";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import useImage from 'use-image';
import EditBar from "../EditBar/EditBar";
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
  const Images =()=>{
    return (
      <>
        {images.map((image, index) => {
          const [imageOne] = useImage(image.img);
  
          return (
            <Image key={index} image={imageOne} draggable></Image>
            );
          })}
    </>
    );
  }
  return (
    <div className="my-auto mt-5 vh-100">
      
      <div className="vh-100">
        <Stage
          width={640}
          height={360}
          
          style={{display:"flex",justifyContent:"center",alignItems:"center"}} 
          >
          <Layer>
            <Group >
              <Rect fill="#ffffff" height={360} width={640} stroke={"#aaaaaa"}>
              </Rect>
            {headings.map((heading) => (
              <>
                <Text text={heading.text} draggable />
              </>
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
           <Images/>
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Canvas;
