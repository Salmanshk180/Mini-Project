import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SketchPicker } from 'react-color'
const TextEdit = () => {
  return (
    <div>
        <Navbar>
        <Container>
            <Nav>
                <NavDropdown title="Font Style" className='fw-bold'>
                    <NavDropdown.Item>Roboto Sans</NavDropdown.Item>
                    <NavDropdown.Item>Times New Roman</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="24" className='fw-bold'>
                    <NavDropdown.Item>24</NavDropdown.Item>
                    <NavDropdown.Item>35</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Color">
                    <NavDropdown.Item>
                <SketchPicker />
                    </NavDropdown.Item>
                </NavDropdown>
                <div className='d-flex align-items-baseline'>
                    <Button className=' mx-1 '>B</Button>
                    <Button className='mx-1'>I</Button>
                    <Button className='mx-1'>U</Button>
                </div>
                <NavDropdown title="align" className='d-flex'>
                    <NavDropdown.Item>left</NavDropdown.Item>
                    <NavDropdown.Item>center</NavDropdown.Item>
                    <NavDropdown.Item>right</NavDropdown.Item>
                </NavDropdown>
                <Button>Delete</Button>
            </Nav>
        </Container>
        </Navbar>
    </div>
  )
}

export default TextEdit