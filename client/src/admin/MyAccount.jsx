import React, { useState } from "react";
import {
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
  CardImg,
  Image,
} from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
const MyAccount = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
  });

  const [updatedProfile, setUpdatedProfile] = useState({ ...userProfile });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUserProfile({ ...updatedProfile });
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setUpdatedProfile({ ...userProfile });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  return (
    <Container fluid className="p-0 h-100">
      <h2 className="mt-3">My Account</h2>
      <Card className="mx-auto w-75 p-5 my-auto">
        <Card.Body className="d-flex">
          <Col lg={4} className="text-center">
          <img src="https://www.designcap.com/media/users/images/avatar.png" style={{borderRadius:"50%",border:"1px solid rgb(255,123,0)"}}></img>
          </Col>
          <Col lg={1}>
          <div style={{height:"100%",width:"2px",backgroundColor:"rgb(255,123,0)"}}></div>
          </Col>
          <Col>
        <Card.Text>
  {isEditing ? (
    <Form>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3" className="text-end">
          Name:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="text"
            name="name"
            value={updatedProfile.name}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3" className="text-end">
          Email:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm="3" className="text-end">
          Password:
        </Form.Label>
        <Col sm="9">
          <Form.Control
            type="password"
            name="password"
            value={updatedProfile.password}
            onChange={handleInputChange}
          />
        </Col>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="danger" onClick={handleCancelClick}>
          Cancel
        </Button>
      </div>
    </Form>
  ) : (
    <div>
      <p className="mb-2">
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p className="mb-2">
        <strong>Password:</strong> ********
      </p>
      <Button variant="primary" onClick={handleEditClick}>
        Edit Profile
      </Button>
    </div>
  )}
</Card.Text>

                </Col>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MyAccount;
