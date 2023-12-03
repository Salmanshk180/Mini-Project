import React, { useEffect, useState } from "react";
import { Form, Card, CardGroup, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addImages } from "../../redux/actions/imageAction";

const ImageModule = () => {
  const [allImage, setAllImage] = useState(null);
  const dispatch = useDispatch();

  const renderCard = (card, index) => (
    <Card key={index} className="m-1 border-0 p-0">
      <Card.Body className="p-0">
        <Image
          src={`http://localhost:3000/admin/images/${card.image}`}
          height={130}
          width={130}
          onClick={() => dispatch(addImages(card.image))}
        />
      </Card.Body>
    </Card>
  );

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:3000/admin/images");
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
      <div
        className="d-flex flex-column p-1 mx-1 my-1"
        style={{ height: "540px" }}
      >
        <Form>
          <Form.Control
            type="text"
            placeholder="Search Images"
            className="border-2"
          />
        </Form>
        <div className="my-2 d-flex">
          {allImage && allImage.length > 0 ? (
            allImage.map((card, index) => renderCard(card, index))
          ) : (
            <p>No images available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageModule;
