import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right,
    #4a90e2,
    #8253de
  ); /* Background colors */
`;

const LoginCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin:10px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 30px;
  font-weight: bold;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  background: linear-gradient(
    to right,
    #4a90e2,
    #8253de
  ); /* Button background colors */
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(
      to left,
      #8253de,
      #4a90e2
    ); /* Button background on hover */
  }
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // The form is valid; you can proceed with the login logic here
      // For example, you can dispatch an action to log in the user
      // dispatch(login(formData));
    }
  };

  return (
    <LoginContainer fluid>
      <LoginCard>
        <Title>Admin Login</Title>
        <StyledForm onSubmit={handleSubmit}>
          <StyledFormGroup>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </StyledFormGroup>

          <StyledFormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </StyledFormGroup>

          <StyledFormGroup>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </StyledFormGroup>

          <StyledButton type="submit">Log In</StyledButton>
          <NavLink
            to="/admin/signup"
            style={{
              fontSize: "14px",
              color: "#4a90e2",
              margin: "10px auto",
              textDecoration: "none",
            }}
          >
            New Admin? Create Account
          </NavLink>
        </StyledForm>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
