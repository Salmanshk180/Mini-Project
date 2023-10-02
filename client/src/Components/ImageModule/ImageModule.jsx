import React from 'react'
import { Form,Card, Button, Container, CardGroup, Image} from 'react-bootstrap'

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
const ImageModule = () => {

    const renderCard = (card, index) => (
        <Card key={index} className="m-2 border-3">
          <Card.Body>
            <Image src={card.src} style={{width:"100%"}}></Image>
          </Card.Body>
        </Card>
      );
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
    <div className='d-flex flex-column mt-3 ms-2'>
    <Form>
        <Form.Control type='text' placeholder='Search Images' className='border-2'></Form.Control>
    </Form>
    <div className="my-2" style={{ overflowY: 'scroll', maxHeight: '500px' }}>
        {rows}
          </div>
    </div>
    </>
  )
}

export default ImageModule