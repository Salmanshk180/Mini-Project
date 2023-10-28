import React from 'react'
import { Form,Card, Button, Container, CardGroup, Image} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi';
import PerfectScrollbar from 'react-perfect-scrollbar';
const cardData =[
    {src:"https://www.designcap.com/res/template/small/ce395476d151419a3cc51d389029cb55/page0.jpg?v=1602654196"},
    {src:"https://www.designcap.com/res/template/small/cd499c27e70db79ab9d3377f660bcfa7/page0.jpg?v=1602654200"},
    {src:"https://www.designcap.com/res/template/small/771dc0c5a690205f92c9743c78bad6d7/page0.jpg?v=1602654202"},
    {src:"	https://www.designcap.com/res/template/small/8e841c3aeb03af11025b170ee361cc6e/page0.jpg?v=1602654196"},
    {src:"https://www.designcap.com/res/template/small/2ac4f172ee3a7b63cd8364ff738e7d3e/page0.jpg?v=1602654195"},
    {src:"	https://www.designcap.com/res/template/small/1f94ab13c646615a1ffde0df88593809/page0.jpg?v=1602654195"},
    {src:" https://www.designcap.com/res/template/small/93b7eefba1654be58cef00e3abb271cb/page0.jpg?v=1602654199"},
    {src:"https://www.designcap.com/res/template/small/78e8698eae5b290b90426c71aacd3aba/page0.jpg?v=1602654200"},
    {src:"https://www.designcap.com/res/template/small/dbd0b5a4a57e280a0069f7ac2800610d/page0.jpg?v=1602654199"},
    {src:"https://www.designcap.com/res/template/small/a905acd5a166084dcbef769cde0c2f49/page0.jpg?v=1602654200"},
    

]

const DesignModule = () => {

  const renderCards = (data) => {
    return data.map((card, index) => (
      <Card key={index} className='p-0 mx-1' style={{borderRadius:"20px"}}>
        <Card.Img src={card.src} alt={`Image ${index}`} style={{ width: '100%', height: 'auto' }}/>
      </Card>
    ));
  };

  const rows = [];
  for (let i = 0; i < cardData.length; i += 2) {
    const rowCards = cardData.slice(i, i + 2);
    rows.push(
      <CardGroup key={i} className='my-2'>
        {renderCards(rowCards)}
      </CardGroup>
    );
  }


  return (
    <div className='d-flex flex-column mx-2 mt-3'>
      <Form className='d-flex align-items-center   bg-white p-1 mx-1 w-100' style={{ border: 'none' }}>
        <BiSearch style={{ fontSize: "16px" }}></BiSearch>
        <input type="text" className='border-0' placeholder='Search Templates' style={{ outline: 'none' }} />
      </Form>
      <p style={{fontSize:"14px",color:"#999999"}} className='mx-3 mt-2 mb-0'>{cardData.length} Templates</p>
      <PerfectScrollbar style={{ height: "100vh",overflowY:"scroll" }}>
        <div className='d-flex flex-column mx-2'>
          <div style={{ maxWidth: "600px" }}>
            {rows}
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  )
}

export default DesignModule