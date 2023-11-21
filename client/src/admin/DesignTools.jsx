import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Text from './TextEditor';
import Image from './Image';
import Shapes from "./Shapes";
const DesignTools = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('text');

  return (
    <Container fluid className='p-0'>
      <Navbar variant="dark" style={{background:"rgb(255,123,0)",color:"white"}}>
        <Nav className="px-2 ">
          <Nav.Link onClick={() => setSelectedNavItem('text')}>Text</Nav.Link>
          <Nav.Link  onClick={() => setSelectedNavItem('images')}>Images</Nav.Link>
        </Nav>
      </Navbar>

      <Container className="main-content p-4">
        {selectedNavItem === 'text' && (
          <div>
            {/* Text component content */}
            <Text></Text>
            {/* Add text-related functionality here */}
          </div>
        )}

        {selectedNavItem === 'images' && (
          <div>
            {/* Images component content */}
           <Image></Image>
            {/* Add image-related functionality here */}
          </div>
        )}

       

       
      </Container>
    </Container>
  );
};

export default DesignTools;
