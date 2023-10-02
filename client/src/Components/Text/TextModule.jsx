import React from "react";
import { Card, Button, Container, CardGroup, Image } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
const cardData = [
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" },
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" }, 
  { src:"https://designcap.s3-us-west-1.amazonaws.com/groups/0933312d392cbf960775f4266a7741a9/preview.png" }, 

  // Add more card data as needed
];
const TextModule = () => {
  // Function to render a single card
  const renderCard = (card, index) => (
    <Card key={index} className="m-2 border-3">
      <Card.Body>
        <Image src={card.src} style={{width:"100%"}}></Image>
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
  return (
    <>
      <div>
        <Container className="d-flex flex-column">
        <Button className="my-1 fs-1 border-0 bg-white text-dark fw-bold">Add Heading</Button>
        <Button className="my-1 fs-3  border-0 bg-white text-dark fw-bold">Add Heading</Button>
        <Button className="my-1 fs-6  border-0 bg-white text-dark fw-bold">Add Heading</Button>
        <div className="my-2" style={{ overflowY: 'scroll', maxHeight: '400px' }}>
        {rows}
          </div>
        </Container>
      </div>
    </>
  );
};

export default TextModule;
