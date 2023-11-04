import React, { useState } from "react";
import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginPageContainer = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;

const LoginCard = styled.div`
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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
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
    <LoginPageContainer fluid>
      <LoginCard>
        <Title> Admin Login</Title>
        <StyledForm onSubmit={handleSubmit}>
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
          </StyledFormGroup>

          <StyledFormGroup>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <small className="text-danger">{errors.confirmPassword}</small>
            )}
        <NavLink to="/admin/register" style={{fontSize:"14px",color:"rgb(255,123,0)"}}>Register</NavLink>
          </StyledFormGroup>
          <Button
            variant="primary"
            type="submit"
            block
            style={{ background: "rgb(255,123,0)" }}
            className="border-0 outline-0"
          >
            Login
          </Button>
        </StyledForm>
      </LoginCard>
    </LoginPageContainer>
  );
};

export default Login;
