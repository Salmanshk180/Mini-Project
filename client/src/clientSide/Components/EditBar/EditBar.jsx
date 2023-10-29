import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import TextEdit from './TextEdit/TextEdit';
import ImageEdit from './ImageEdit/ImageEdit';
import ShapeEdit from './ShapeEdit/ShapeEdit';
const EditBar = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary w-100"style={{ padding: 0}}>
      <Container fluid className=' p-0' style={{backgroundColor:"#ffffff"}} >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <TextEdit></TextEdit>
            {/* <ImageEdit></ImageEdit> */}
            {/* <ShapeEdit></ShapeEdit> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    
  )
}

export default EditBar