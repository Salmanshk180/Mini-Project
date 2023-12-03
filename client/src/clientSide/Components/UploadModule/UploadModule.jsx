import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image,Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addClientImages } from '../../redux/actions/clientImageAction';

const UploadModule = () => {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) {
      return; // No image selected, handle this case accordingly
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      await axios.post('http://localhost:3000/client/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Optionally, you can handle success here
      console.log('Image uploaded successfully');

      // Refresh the list of images after successful upload
      getImage();
    } catch (error) {
      // Handle error
      console.error('Error uploading image:', error);
    }
  };
  const renderCard = (card, index) => (
    <Card key={index} className="m-1 border-0 p-0">
      <Card.Body className="p-0">
        <Image
          src={`http://localhost:3000/client/images/${card.image}`}
          height={130}
          width={130}
          onClick={() => dispatch(addClientImages(card.image))}
        />
      </Card.Body>
    </Card>
  );
  const getImage = async () => {
    try {
      const result = await axios.get('http://localhost:3000/client/images');
      setAllImage(result.data.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      <div>
        <input type="file" accept="image/*" name="image" onChange={handleImageChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <div className='d-flex'>
      {allImage && allImage.length > 0 ? (
            allImage.map((card, index) => renderCard(card, index))
          ) : (
            <p>No images available.</p>
          )}
      </div>
    </div>
  );
};

export default UploadModule;
