import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

const ProfileContainer = styled(Container)`
  p {
    margin: 1rem 0;
  }
`;

const ProfileCard = styled(Card)`
  width: 50%;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 1px solid rgb(255, 123, 0);
  max-width: 100%;
  max-height: 100%;
`;

const MyAccount = () => {
  const [userProfile, setUserProfile] = useState({
    name: "Salman",
    email: "salmanshaik7118@gmail.com",
    password: "password123",
    profilePicture: "https://www.designcap.com/media/users/images/avatar.png",
  });

  const [updatedProfile, setUpdatedProfile] = useState({ ...userProfile });
  const [isEditing, setIsEditing] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Add validation checks before saving
    if (!updatedProfile.name.trim()) {
      setValidationErrors({ name: "Name is required" });
    } else if (!isValidEmail(updatedProfile.email)) {
      setValidationErrors({ email: "Invalid email format" });
    } else {
      setUserProfile({ ...updatedProfile, profilePicture: newProfilePicture });
      setIsEditing(false);
    }
  };

  const handleCancelClick = () => {
    setUpdatedProfile({ ...userProfile });
    setIsEditing(false);
    setValidationErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
    // Clear validation error when the input changes
    setValidationErrors({ ...validationErrors, [name]: null });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  return (
    <ProfileContainer fluid className="p-1 h-100">
      <p className="mt-3 fs-3 text-center fw-bold ms-4 fst-italic" style={{color:"rgb(255,123,0)"}}>My Account</p>
      <ProfileCard className="shadow">
        <Col lg={4} className="text-center mx-auto px-2">
          <ProfileImage
            src={newProfilePicture || userProfile.profilePicture}
            alt="User Profile"
          />
          {isEditing && (
            <Form.Group className="mt-3">
              <Form.Label>Change Profile Picture</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
              />
            </Form.Group>
          )}
        </Col>
        <Col lg={1}>
          <div
            style={{
              height: "100%",
              width: "2px",
              backgroundColor: "rgb(255,123,0)",
            }}
          ></div>
        </Col>
        <Col className="mx-0">
          <Card.Text>
            {isEditing ? (
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3" className="text-start">
                    Name:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="text"
                      name="name"
                      value={updatedProfile.name}
                      onChange={handleInputChange}
                    />
                    {validationErrors.name && (
                      <small className="text-danger">
                        {validationErrors.name}
                      </small>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3" className="text-start">
                    Email:
                  </Form.Label>
                  <Col sm="9">
                    <Form.Control
                      type="email"
                      name="email"
                      value={updatedProfile.email}
                      onChange={handleInputChange}
                    />
                    {validationErrors.email && (
                      <small className="text-danger">
                        {validationErrors.email}
                      </small>
                    )}
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm="3" className="text-start">
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
                <div className="d-grid gap-2 w-25 d-flex mx-auto">
                  <Button variant="success" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button variant="danger" onClick={handleCancelClick}>
                    Cancel
                  </Button>
                </div>
              </Form>
            ) : (
              <div className="mx-auto text-start w-75">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{userProfile.name}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>{userProfile.email}</td>
                    </tr>
                    <tr>
                      <td>Password:</td>
                      <td>********</td>
                    </tr>
                  </tbody>
                </table>

                <Button
                  variant="primary"
                  onClick={handleEditClick}
                  style={{ background: "rgb(255,123,0)" }}
                  className="border-0"
                >
                  Edit Profile
                </Button>
              </div>
            )}
          </Card.Text>
        </Col>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default MyAccount;
