import React, { useState, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { MdUpload } from "react-icons/md";
import { FaFileUpload } from "react-icons/fa";
const UploadModule = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can perform additional checks on the file here, e.g., file type, size, etc.
      setSelectedImage(file);
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      // Add the selected image to the array (simulate storing in an array).
      setImageArray([...imageArray, selectedImage]);
      setSelectedImage(null);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="mx-1 my-1 p-1" >
      <div>
        {selectedImage ? (
          <div className="d-flex flex-column">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt={selectedImage.name}
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
            <Button
              variant="primary"
              onClick={handleUpload}
              disabled={!selectedImage}
              className="mt-1"
              style={{backgroundColor:"#fa7b05"}}
            >
              Upload
            </Button>
          </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*" // You can specify the accepted file types
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{
                display: "none",
                visibility: "hidden",
                position: "absolute",
              }}
            />
            <div className="card" style={{borderRadius:"0px"}}>
              <div className="card-body text-center">
                <FaFileUpload
                  className="fs-4"
                  style={{ color: "#aaaaaa" }}
                ></FaFileUpload>
                <p style={{ color: "#aaaaaa" }}>Upload Images</p>
                <Button
                  variant="primary"
                  className="mx-auto w-100 border-0"
                  style={{ backgroundColor: "#fa7b05" }}
                  onClick={handleChooseFile}
                >
                  Choose Image
                </Button>
              </div>
            </div>
          </>
        )}
        <Card className="mt-1" style={{borderRadius:"0px"}}>
          <Card.Body>
            <p style={{color:"#aaaaaa"}}>{imageArray.length} Images</p>
            {imageArray.map((image, index) => (
              <div key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  className="border-1"
                  alt={image.name}
                  style={{ maxWidth: "100%", maxHeight: "150px" }}
                />
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UploadModule;
