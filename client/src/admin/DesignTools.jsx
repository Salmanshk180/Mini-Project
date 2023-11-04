import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Text from './TextEditor';

const DesignTools = () => {
  const [selectedNavItem, setSelectedNavItem] = useState('text');

  return (
    <Container fluid className='p-0 vh-100'>
      <Navbar variant="dark" style={{background:"rgb(255,123,0)",color:"white"}}>
        <Nav className="px-2 ">
          <Nav.Link onClick={() => setSelectedNavItem('text')}>Text</Nav.Link>
          <Nav.Link  onClick={() => setSelectedNavItem('images')}>Images</Nav.Link>
          <Nav.Link  onClick={() => setSelectedNavItem('shapes')}>Shapes</Nav.Link>
          <Nav.Link  onClick={() => setSelectedNavItem('background')}>Background</Nav.Link>
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
            <h2>Images Component</h2>
            {/* Add image-related functionality here */}
          </div>
        )}

        {selectedNavItem === 'shapes' && (
          <div>
            {/* Shapes component content */}
            <h2>Shapes Component</h2>
            {/* Add shape-related functionality here */}
          </div>
        )}

        {selectedNavItem === 'background' && (
          <div>
            {/* Background component content */}
            <h2>Background Component</h2>
            {/* Add background-related functionality here */}
          </div>
        )}
      </Container>
    </Container>
  );
};

export default DesignTools;
