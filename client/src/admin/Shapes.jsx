import React, { useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const topCardsData = [
    {
      id: 1,
      title: "Lines",
      subCards: [
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/8d44af619d3ea89a6c10e6cc6d483046_original.svg",
          title:"Solid line"
        },
        {
          id: 12,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/a8f17b30974588eb0fa9d555c30a89b4_original.svg",
          title:"Dotted line"

        },
        {
          id: 21,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/65933717943677fd4d030984df709b35_original.svg",
          title:"Solid line with arrow"

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
          title:"solid line"

        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/87dae578eade9e5d5710e186427e6da9_original.svg",
          title:"solid line"

        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/092639c0d2595f1d090be7c29e56abab_original.svg",
          title:"solid line"
        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/0d5371d4e620f6fe2f96c7f6073681e0_original.svg",
          title:"solid line"
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
          title:"solid line"

        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/883a6fa44d7d2783238ded7d97bcba00_original.svg",
          title:"solid line"

        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/ba6f537ad268586c4d4ddff9d8681650_original.svg",
          title:"solid line"

        },
        {
          id: 11,
          src: "https://designcap.s3-us-west-1.amazonaws.com/media/public/e85804af5ec1e08d5d274dc0fd82acf4_original.svg",
          title:"solid line"

        },
      ],
    },
    // Add more top-level card data as needed
  ];

const Shapes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTopCardsData = topCardsData.filter((topCard) =>
    topCard.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid>
      <div className="d-flex justify-content-between mt-3 align-items-center mb-3">
        <input
          type="text"
          placeholder="Search Shapes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-75 shadow p-2 border-1"
        />
        <Button className=" shadow" style={{ background: 'rgb(255, 123, 0)', border: '0', borderRadius: '0', padding: '10px' }}>
          Add Shape
        </Button>
      </div>

      {filteredTopCardsData.map((topCard, index) => (
        <Card key={topCard.id} className="mb-4">
          <Card.Header>{topCard.title}</Card.Header>
          <Card.Body>
            <Row>
              {topCard.subCards.map((subCard) => (
                <Col key={subCard.id} md={3} sm={6}>
                  <Card className="mb-3 border-0">
                    <Card.Img variant="top" src={subCard.src} className="mx-auto p-2" style={{ height: '100px', width: '100px' }} />
                    <p className='text-center'>{subCard.title}</p>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Shapes;
