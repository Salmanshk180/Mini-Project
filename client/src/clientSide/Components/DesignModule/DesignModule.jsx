import React from 'react'
import { Form,Card, Button, Container, CardGroup, Image} from 'react-bootstrap'

const cardData =[
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},
    {title:"logo"},

]

const DesignModule = () => {

    const renderCard = (card, index) => (
        <Card key={index}>
          <Card.Body className='p-0'>
            <Card.Text>{card.title} </Card.Text>
             </Card.Body>
        </Card>
      );
      const rows = [];
      for (let i = 0; i < cardData.length; i ++) {
        const rowCards = cardData.slice(i, i+1);
        rows.push(
          <CardGroup key={i} className='mx-1'>
            {rowCards.map((card, index) => renderCard(card, i + index))}
          </CardGroup>
        );
      }


  return (
    <div className='d-flex flex-column mt-3 ms-2'>
    <Form>
        <Form.Control type='text' placeholder='Search Images' className='border-2'></Form.Control>
    </Form>
    <div className="my-2 d-flex" style={{overflowX:"scroll",width:"300px"}}>
        {rows}
          </div>
    </div>
  )
}

export default DesignModule