import React from 'react'
import { Form,Card, Button, Container, CardGroup, Image} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { addImage } from "../../redux/actions/imageAction";
const cardData = [
    { src:"https://pixabay.com/get/g8b7f12ed5dab2a6ba7726ff3143961e4c687605165c46a244b6a9df520d3e923029f181dc083c04afec1e8a686d71622_150.jpg" },
    { src:"https://pixabay.com/get/gec39828db4451d91772e7bc4ed869aec3b2791dfb84b77d9ecd146abb98a1a8bab7dc7228a8508bd15e96eb63fc1e9e1da4a93dc600c053480b695c15c58e421_150.jpg" },
    { src:"https://pixabay.com/get/ga503050e96abd7c4104d2a514cba0054e1338d942d858eb5c9481586ef8817aaa4f458c75426f01f039a16f29033504c5441d0f436da8eec11db728d9df8a710_150.jpg" },
    { src:"https://pixabay.com/get/g0f43aa7277f39a32c7410154ba35c31b4b90a02537c7bfcd3c9816b5bc14a2c589f9b7c0d616cc2de3f66df803072f81480402409d015446449b399642f12efd_150.jpg" },
    { src:"https://pixabay.com/get/g3c961e0a0511b43bb524725dd6ab32366ebfc9a7b18d1a09e2b9f7a88daf98e90b25b049d533a453c5425fda76745fcb_150.jpg" },
    { src:"https://pixabay.com/get/g18f179bc149f30ebc88a48d0d985fa46c4c7dba35ba2e57f480390b9a9fe3c9031154d75726cc2dee591091d038bd3893fe99c9fd650b5b1b0487aae2547fce3_150.jpg" },
    { src:"https://pixabay.com/get/g6c37e69a4bc0d01cf76d7906bba1c836fe111fe503cfecd9371ef6cdcd57661360ea2a2e5e86a73a9593cedea770b73b8db2e801d3c8fa0f6b8aafc653bbc0bb_150.jpg" },
    { src:"https://pixabay.com/get/g9597a8678cb94a5156b94b186470f0b8e43d16fad83bfcb70592a62f7acdcfdc029cac7d3e1beb07fa9d456b5c9d7312_150.jpg" },
    // Add more card data as needed
  ];
const ImageModule = () => {

    const renderCard = (card, index) => (
        <Card key={index} className="m-1 border-0 p-0 w-100 h-100">
          <Card.Body className='p-0'>
            <Image src={card.src} style={{width:"100%",height:"100%"}} onClick={()=>addImages()}></Image>
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

 const dispatch = useDispatch();
 const addImages=()=>{
  const newImage = {
   img : "https://konvajs.github.io/assets/yoda.jpg",
  };

  dispatch(addImage(newImage));
 }

  return (
    <>
    <div className='d-flex flex-column p-1 mx-1 my-1 ' style={{height:"540px"}}>
    <Form>
        <Form.Control type='text' placeholder='Search Images' className='border-2'></Form.Control>
    </Form>
    <div className="my-2" style={{ overflowY: 'auto', height: '470px' }}>
        {rows}
          </div>
    </div>
    </>
  )
}

export default ImageModule