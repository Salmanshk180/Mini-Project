import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect, Text, Group, Image } from "react-konva";
import EditBar from "../EditBar/EditBar";
import { useSelector, useDispatch } from "react-redux";
import {
  setHeadings,
  deleteHeading,
  updateHeading,
} from "../../redux/actions/headingAction";
import useImage from "use-image";
import axios from "axios";
const useImageLoader = (imageUrls) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageElements = await Promise.all(
        imageUrls.map((imageUrl) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = imageUrl;
            img.onload = () => resolve(img);
            img.onerror = (error) => reject(error);
          });
        })
      );
      setImages(imageElements);
    };
    loadImages();
  }, []);

  return images;
};

const Canvas = () => {
  const [selectedHeading, setSelectedHeading] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedClientImage, setSelectedClientImage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [selectedFontSize, setSelectedFontSize] = useState(16);
  const headings = useSelector((state) => state.heading.headings);
  const images = useSelector((state) => state.image.images);
  const clientImages = useSelector((state) => state.clientImage.images);
  const [selectedFontFamily, setSelectedFontFamily] = useState("Roboto Sans");
  const [selectedTextColor, setSelectedTextColor] = useState("#000000");
  const [selectedBackgroundColor, setSelectedBackgroundColor] =
    useState("#000000");
  const [selectedTextAlignment, setSelectedTextAlignment] = useState("");
  const [selectedBold, setSelectedBold] = useState(false);
  const [selectedItalic, setSelectedItalic] = useState(false);
  const [selectedunderline, setSelectedUnderline] = useState(false);

  const dispatch = useDispatch();

  const handleDoubleClick = (index, text) => {
    setSelectedHeading(index);
    setSelectedText(text.text);
    setSelectedFontSize(text.fontSize);
    setSelectedFontFamily(text.headingFontFamily);
    setSelectedTextColor(text.textColor);
    setSelectedBackgroundColor(text.bgColor || "transparent");
    setSelectedTextAlignment(text.textAlignment);
    setSelectedBold(text.bold);
    setSelectedItalic(text.italic);
    setSelectedUnderline(text.underline);
  };

  const handleSelectImage = (index) => {
    setSelectedImage(index);
    setSelectedClientImage(null);

  };
  const handleSelectClientImage = (index) => {
    setSelectedClientImage(index);
    setSelectedImage(null)
  };

  useEffect(() => {
    const storedHeadings = JSON.parse(localStorage.getItem("headings")) || [];
    dispatch(setHeadings(storedHeadings));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("headings", JSON.stringify(headings));
  }, [headings]);

  const handleDelete = () => {
    if (selectedHeading !== null) {
      dispatch(deleteHeading(selectedHeading));
      setSelectedHeading(null);
      setSelectedText("");
      setSelectedFontSize(16);
      setSelectedFontFamily("Roboto sans");
    }
  };

  const handleTextUpdate = () => {
    if (selectedHeading !== null) {
      const heading = headings[selectedHeading];
      const newTextProps = {
        text: selectedText,
        fontSize: selectedFontSize,
        headingFontFamily: selectedFontFamily,
        textColor: selectedTextColor,
        textAlignment: selectedTextAlignment,
      };

      // Update the heading with the new text properties
      dispatch(updateHeading(selectedHeading, newTextProps));
    }
  };
  const loadedImages = useImageLoader(
    images.map((image) => `http://localhost:3000/admin/images/${image}`)
  );
  const loadedClientImages = useImageLoader(
    clientImages.map((image) => `http://localhost:3000/client/images/${image}`)
  );

  return (
    <>
      <EditBar
        selectedText={selectedText}
        setSelectedText={setSelectedText}
        selectedHeading={selectedHeading}
        selectedFontSize={selectedFontSize}
        setSelectedFontSize={setSelectedFontSize}
        onDelete={handleDelete}
        selectedFontFamily={selectedFontFamily}
        setSelectedFontFamily={setSelectedFontFamily}
        selectedTextColor={selectedTextColor}
        setSelectedTextColor={setSelectedTextColor}
        selectedTextAlignment={selectedTextAlignment}
        setSelectedTextAlignment={setSelectedTextAlignment}
        selectedBold={selectedBold}
        setSelectedBold={setSelectedBold}
        selectedItalic={selectedItalic}
        setSelectedItalic={setSelectedItalic}
        selectedunderline={selectedunderline}
        setSelectedUnderline={setSelectedUnderline}
        onTextUpdate={handleTextUpdate}
        selectedBackgroundColor={selectedBackgroundColor}
        setSelectedBackgroundColor={setSelectedBackgroundColor}
      />
      <div className="vh-100 mt-3">
        <Stage
          width={640}
          height={360}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Layer>
            <Rect
              width={640}
              height={360}
              fill="#ffffff"
              stroke="#aaaaaa"
              strokeWidth={2}
              onClick={() => {
                setSelectedHeading(null);
                setSelectedImage(null);
              }}
            />
            {Array.isArray(headings) &&
              headings.map((heading, index) => (
                <Group key={index} draggable>
                  {selectedHeading === index && (
                    <Rect
                      x={heading.x}
                      y={heading.y - heading.fontSize}
                      width={heading.text.length * heading.fontSize * 0.7}
                      height={heading.fontSize}
                      fill={
                        selectedHeading === index
                          ? selectedBackgroundColor
                          : heading.bgColor || "#000000"
                      }
                      stroke="blue"
                      strokeWidth={2}
                    />
                  )}
                  <Text
                    x={heading.x}
                    y={heading.y - heading.fontSize}
                    text={
                      selectedHeading === index ? selectedText : heading.text
                    }
                    fontSize={
                      selectedHeading === index
                        ? selectedFontSize
                        : heading.fontSize
                    }
                    fill={
                      selectedHeading === index
                        ? selectedTextColor
                        : heading.textColor
                    }
                    fontFamily={
                      selectedHeading === index
                        ? selectedFontFamily
                        : heading.headingFontFamily
                    }
                    align={
                      selectedHeading === index
                        ? selectedTextAlignment
                        : heading.textAlignment
                    } // Align text within its bounding box
                    width={
                      heading.text && heading.text.length
                        ? heading.text.length * heading.fontSize * 0.7
                        : 0
                    }
                    textDecoration={heading.underline ? "underline" : "none"}
                    fontStyle={
                      (heading.italic ? "italic " : "") +
                      (heading.bold ? "bold" : "normal")
                    }
                    onClick={() => handleDoubleClick(index, heading)}
                  />
                </Group>
              ))}

            {Array.isArray(loadedClientImages) &&
              loadedClientImages.map((image, index) => (
                <Group key={index} draggable>
                  {selectedImage === index && (
                    <Rect
                      x={image.x - 3}
                      y={image.y - 3}
                      width={205}
                      height={205}
                      fill={"#ffffff"}
                      stroke="blue"
                      strokeWidth={2}
                    />
                  )}
                  <Image
                    key={index}
                    image={image}
                    width={200}
                    height={200}
                    onClick={() => handleSelectImage(index, image)}
                  />
                </Group>
              ))}

            {Array.isArray(loadedImages) &&
              loadedImages.map((image, index) => (
                <Group key={index} draggable>
                  {selectedClientImage === index && (
                    <Rect
                      x={image.x - 3}
                      y={image.y - 3}
                      width={205}
                      height={205}
                      fill={"#ffffff"}
                      stroke="blue"
                      strokeWidth={2}
                    />
                  )}
                  <Image
                    key={index}
                    image={image}
                    width={200}
                    height={200}
                    onClick={() => handleSelectClientImage(index, image)}
                  />
                </Group>
              ))}
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default Canvas;
