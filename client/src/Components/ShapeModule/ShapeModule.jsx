import React from "react";
import { Card, Container, Row, Col, Form, Image } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
const topCardsData = [
  {
    id: 1,
    title: "Lines",
    subCards: [
      { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 12, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 21, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 22, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 21, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 22, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 22, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 22, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },
      { id: 22, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg" },

    ],
  },
  {
    id: 2,
    title: "Shapes",
    subCards: [
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/5e479394c91a0af39ef05874976cc15e_original.svg" },

      ],
  },
  {
    id: 2,
    title: "Arrow",
    subCards: [
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },
        { id: 11, src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/149974d2fefff02cdf36a8c346ce5198_original.svg" },

      ],
  },
  // Add more top-level card data as needed
];
const ShapeModule = () => {
  return (
    <div style={{overflowY:"scroll",height:"100%"}}>
      <Form
        className="m-1 d-flex align-items-center bg-white px-1"
        style={{ border: "1px solid #cccccc" }}
      >
        <FiSearch className="fs-4"></FiSearch>
        <Form.Control
          type="search"
          placeholder="Search Shapes"
          className="border-0 shadow-none"
        ></Form.Control>
      </Form>
      <Container style={{ maxHeight: '100%' }} >
        {topCardsData.map((topCard) => (
          <Card key={topCard.id} className="mb-3 border-0">
            <Card.Body>
              <Card.Title>{topCard.title}</Card.Title>
              <Row style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                {topCard.subCards.map((subCard) => (
                  <Col key={subCard.id} md={6}>
                    <Card className="border-0">
                      <Card.Body>
                        <Image src={subCard.src} style={{width:"100%"}}></Image>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ShapeModule;
