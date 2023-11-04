import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const SignupPageContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;

const SignupCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-top: -20px;
  margin-bottom: 30px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      console.log(formData);
    } else {
      // Form is invalid, display errors
      setErrors(newErrors);
    }
  };

  return (
    <SignupPageContainer fluid>
      <SignupCard>
        <Title>Admin Sign Up</Title>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </StyledFormGroup>

          <StyledFormGroup>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <small className="text-danger">{errors.email}</small>
            )}
          </StyledFormGroup>

          <StyledFormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <small className="text-danger">{errors.password}</small>
            )}
            <NavLink
              to="/admin/login"
              style={{ fontSize: "14px", color: "rgb(255,123,0)" }}
            >
              Login
            </NavLink>
          </StyledFormGroup>

          <Button
            variant="primary"
            type="submit"
            block
            style={{ background: "rgb(255,123,0)" }}
            className="border-0 outline-0"
          >
            Sign Up
          </Button>
        </StyledForm>
      </SignupCard>
    </SignupPageContainer>
  );
};

export default Signup;
