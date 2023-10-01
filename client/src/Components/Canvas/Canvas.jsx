import React, { useEffect, useRef } from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text } from "react-konva";
function isMobile() {
  return window.innerWidth <= 768; // Adjust the threshold as needed
}

const Canvas = () => {

  useEffect(() => {
    const canvasWidth = isMobile() ? window.innerWidth : 800;
    const canvasHeight = isMobile() ? window.innerHeight : 500;

    const stage = new Konva.Stage({
      container: 'canvas-container',
      width: canvasWidth,
      height: canvasHeight,
    });

    const layer = new Konva.Layer();
    const rect = new Konva.Rect({
      width: stage.width(),
      height: stage.height(),
      fill: 'white',
    });

    layer.add(rect);
    stage.add(layer);
  }, []);
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 93px)',
    overflow: 'hidden',
  };

  return (
    <>
    <div id="canvas-container" style={containerStyle}>
      <Stage width={isMobile() ? window.innerWidth : 800} height={isMobile() ? window.innerHeight : 600}>
        <Layer>
          {/* Add your Konva shapes and elements here */}
        </Layer>
      </Stage>
    </div>
    </>
  );
};

export default Canvas;
