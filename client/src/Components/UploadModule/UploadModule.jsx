import React, { useState, useRef } from "react";
import { Button,Card } from "react-bootstrap";
import { MdUpload } from "react-icons/md";
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
    <div className=" mt-3 ms-2">
      <div>
      <input
        type="file"
        accept="image/*" // You can specify the accepted file types
        onChange={handleImageChange}
        ref={fileInputRef}
        style={{
          display: 'none',
          visibility: 'hidden',
          position: 'absolute',
        }}
      />
       <Button variant="primary" onClick={handleChooseFile}>
            Choose Image
          </Button>
      <Card>
        <Card.Body>
         
          {selectedImage && (
            <div>
              <hr />
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={!selectedImage}
          >
            Upload
          </Button>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage.name}
                style={{ maxWidth: '100%', maxHeight: '150px' }}
              />
            </div>
          )}
          
          {imageArray.map((image, index) => (
            <div key={index}>
              <hr />
              <img
                src={URL.createObjectURL(image)}
                alt={image.name}
                style={{ maxWidth: '100%', maxHeight: '150px' }}
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
