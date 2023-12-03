import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addHeading, addTexts } from "../../redux/actions/headingAction";

const TextModule = () => {
  const [textCards, setTextCards] = useState(null);
  const dispatch = useDispatch();
  const fetchCanvases = () => {
    axios
      .get("http://localhost:3000/admin/getaddtext")
      .then((response) => {
        setTextCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching canvas data:", error);
      });
  };

  useEffect(() => {
    fetchCanvases();
  }, []);

  const handleAddHeading = () => {
    dispatch(addHeading("Sample Heading", 40, 180, 58));
  };
  const handleAddSubHeading = () => {
    dispatch(addHeading("Sample Subheading", 40, 180, 39));
  };
  const handleAddBodyText = () => {
    dispatch(addHeading("Sample Body Text", 40, 180, 26));
  };

  const addTextToCanvas = (card) => {
    dispatch(
      addTexts(
        card[0].text,
        card[0].x,
        card[0].y,
        card[0].fontSize,
        card[0].textColor,
        card[0].textBackgroundColor,
        card[0].textStyle,
        card[0].fontFamily,
        card[0].draggable,
        card[0].textAlignment
      )
    );
  };

  return (
    <>
      <div>
        <Container
          className="d-flex flex-column mx-2 ms-0"
          style={{ height: "530px" }}
        >
          <Button
            variant="transparent"
            className="fs-1 border-0 text-dark fw-bold"
            style={{ outline: "none", boxShadow: "none" }}
            onClick={handleAddHeading}
          >
            Add Heading
          </Button>
          <Button
            variant="transparent"
            className="fs-3 border-0 text-dark fw-bold"
            style={{ outline: "none", boxShadow: "none" }}
            onClick={handleAddSubHeading}
          >
            Add Subheading
          </Button>
          <Button
            variant="transparent"
            className="fs-5 border-0 text-dark"
            style={{ outline: "none", boxShadow: "none" }}
            onClick={handleAddBodyText}
          >
            Add Body Text
          </Button>
          {/* Add more buttons as needed */}
          <div
            className="my-2 d-flex w-100 justify-content-around"
            style={{ overflowY: "scroll", maxHeight: "400px" }}
          >
            {/* Render your text cards here */}
            {textCards &&
              textCards.map((card, index) => (
                <div key={index}>
                  {/* Render individual text card components */}
                  {/* Modify this based on your actual data structure */}
                  <div className="card">
                    <img
                      src={card.src}
                      height={120}
                      width={120}
                      onClick={() => addTextToCanvas(card.elements)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default TextModule;
