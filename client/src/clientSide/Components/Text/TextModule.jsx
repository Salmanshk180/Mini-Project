import React from "react";
import { Card, Button, Container, CardGroup, Image } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { addHeading1 } from "../../redux/actions/headingAction";

const cardData = [
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/a0dd10ce5ede642240af3226583b7dd7/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/89b6bf91b3857039e142cebd8b2e642a/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/580befbfae9e6a9872c644f845f71b25/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/f270c8fa80384125e2aa4ac288da0030/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/09da14e45c87bfcf9eedab827b3dc0fe/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/09da14e45c87bfcf9eedab827b3dc0fe/preview.png",
  },
  {
    src: "https://designcap.s3-us-west-1.amazonaws.com/groups/09da14e45c87bfcf9eedab827b3dc0fe/preview.png",
  },
  // Add more card data as needed
];
const TextModule = () => {
  // Function to render a single card
  const renderCard = (card, index) => (
    <Card key={index} className="border-0 m-1 p-0">
      <Card.Body>
        <Image src={card.src} style={{ width: "100%" }}></Image>
      </Card.Body>
    </Card>
  );

  // Split cardData into pairs of two for rows
  const rows = [];
  for (let i = 0; i < cardData.length; i += 2) {
    const rowCards = cardData.slice(i, i + 2);
    rows.push(
      <CardGroup key={i}>
        {rowCards.map((card, index) => renderCard(card, i + index))}
      </CardGroup>
    );
  }

  const fontSizes = useSelector((state)=>state.text.fontSizes)
 const dispatch = useDispatch();
 const addHeadingOne=()=>{
  const newText = {
    text: 'Sample Text',
    fill: 'black',
  };

  dispatch(addHeading1(newText));
 }

  return (
    <>
      <div>
        <Container className="d-flex flex-column mx-2 ms-0" style={{height:"530px"}}>
          <Button variant="transparent" className=" fs-1 border-0 text-dark fw-bold" onClick={()=>addHeadingOne()}  style={{ outline: 'none', boxShadow: 'none' }}>
            Add Heading
          </Button>
          <Button variant="transparent" className="fs-3  border-0  text-dark fw-bold"  style={{ outline: 'none', boxShadow: 'none' }}>
            Add Heading
          </Button>
          <Button  variant="transparent" className="fs-6  border-0  text-dark fw-bold" style={{ outline: 'none', boxShadow: 'none' }}>
            Add Heading
          </Button>
          <div
            className="my-2"
            style={{ overflowY: "scroll", maxHeight: "400px" }}
          >
            {rows}
          </div>
        </Container>
      </div>
    </>
  );
};

export default TextModule;
