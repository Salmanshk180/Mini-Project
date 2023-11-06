import React from "react";
import { Card, Container, Row, Col, Form, Image } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addShape } from "../../redux/actions/shapeAction";

const topCardsData = [
  {
    id: 1,
    title: "Lines",
    subCards: [
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg",
      },
      {
        id: 12,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/a8f17b30974588eb0fa9d555c30a89b4_original.svg",
      },
      {
        id: 21,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/65933717943677fd4d030984df709b35_original.svg",
      },
      
    ],
  },
  {
    id: 2,
    title: "Shapes",
    subCards: [
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/87dae578eade9e5d5710e186427e6da9_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/092639c0d2595f1d090be7c29e56abab_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/0d5371d4e620f6fe2f96c7f6073681e0_original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Arrows",
    subCards: [
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/883a6fa44d7d2783238ded7d97bcba00_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/ba6f537ad268586c4d4ddff9d8681650_original.svg",
      },
      {
        id: 11,
        src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/e85804af5ec1e08d5d274dc0fd82acf4_original.svg",
      },
    ],
  },
  // Add more top-level card data as needed
];
const ShapeModule = () => {
  const dispatch = useDispatch();
  const addShapes = () => {
    const newShape = {
      x: 20,
      y: 20,
      points: [0, 0, 100, 0, 100, 100],
      tension: 0.5,
      closed,
      stroke: "black",
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, "red", 1, "yellow"],
    };

    dispatch(addShape(newShape));
  };
  const renderSubCards = (subCards) => (
    <div className="d-flex flex-row flex-wrap" style={{ maxHeight: '200px', overflowY: 'auto' }}>
      {subCards.map((subCard, index) => (
        <Col key={subCard.id}>
          <Card className="m-1 border-0">
            <Card.Img src={subCard.src} alt={`SubCard ${subCard.id}`} style={{ width: '145px', height: '50px' }} className="mx-auto" />
          </Card>
        </Col>
      ))}
    </div>
  );

  const renderTopCards = () => {
    return topCardsData.map((topCard) => (
      <Card key={topCard.id} className="my-1 border-0" style={{borderRadius:'0px'}}>
        <Card.Body>
          <Card.Title>{topCard.title}</Card.Title>
          <div className="d-flex flex-wrap">
            {renderSubCards(topCard.subCards)}
          </div>
        </Card.Body>
      </Card>
    ));
  };
  return (
    <div className="d-flex flex-column mx-2 mt-3 ms-0 h-100">
      <Form
        className="d-flex align-items-center bg-white p-1 mt-1 mx-1 w-100"
        style={{ border: "none" }}
      >
        <BiSearch style={{ fontSize: "16px" }}></BiSearch>
        <input
          type="text"
          className="border-0"
          placeholder="Search Templates"
          style={{ outline: "none" }}
        />
      </Form>
      <div className='d-flex flex-column mx-2 mt-3'style={{ height: '450px', overflowY: 'auto' }}>
      {renderTopCards()}
    </div>
    </div>
  );
};

export default ShapeModule;
