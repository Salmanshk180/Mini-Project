import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Profile = () => {
  return (
    <>
      <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-2">
          <div className="text-center mb-4">
            <BsFillPersonFill style={{ fontSize: '90px', color: '#007bff' }} />
            <h3>dhrutandel508@gmail.com</h3>
           
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" id="exampleInputPassword1" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" id="exampleCheck1" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>


    </>
  )
}

