// components/Signup.js

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import styled from "styled-components";
import { adminSignUp } from "../clientSide/redux/actions/adminAuthAction";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { css } from "@emotion/react";
import { SyncLoader } from "react-spinners";
import axios from "axios";
const SignupContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4a90e2, #8253de);
`;

const SignupCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  margin: 10px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-size: 30px;
  font-weight: bold;
`;

const SignupForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  background: linear-gradient(to right, #4a90e2, #8253de);
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(to left, #8253de, #4a90e2);
  }
`;

const ErrorText = styled.small`
  color: red;
`;

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return passwordRegex.test(password);
  };

  const isEmailValid = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?![a-zA-Z.]{2,})$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (loading) {
      const delay = setTimeout(() => {
        setLoading(false);
        navigate("/admin/login");
      }, 5000);

      return () => clearTimeout(delay);
    }
  }, [loading, navigate]);

  const handleSendEmail = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/admin/send-otp",
        {
          email: formData.email,
        }
      );

      if (response.status === 200) {
        toast.success("OTP sent to your email for verification.");
        navigate("/admin/verify", { state: { email: formData.email } });
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isEmailValid(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isPasswordValid(formData.password)) {
      newErrors.password =
        "Password should be at least 8 characters long and contain one symbol, one capital letter, one small letter, and one number";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        setSubmitting(true);

        const response = await axios.post(
          "http://localhost:3000/admin/signup",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );
        if (response.status === 201) {
          setLoading(true);
          toast.success("OTP sent to your email for verification.");
          setTimeout(() => {
            setLoading(false);
            navigate("/admin/verify", { state: { email: formData.email } });
          }, 4000);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message); // Show the specific error message from the backend
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } finally {
        setSubmitting(false);
      }
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {loading && (
        <LoaderContainer>
          <SyncLoader color={"#4a90e2"} loading={loading} />
        </LoaderContainer>
      )}
      <SignupContainer fluid>
        <SignupCard>
          <Title>Admin Sign Up</Title>
          <SignupForm onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </FormGroup>

            <FormGroup>
              <Form.Check
                type="checkbox"
                label="Show Password"
                onChange={handleShowPassword}
              />
            </FormGroup>

            <StyledButton type="submit" disabled={submitting}>
              {submitting ? (
                <Spinner animation="border" size="sm" role="status" />
              ) : (
                "Sign Up"
              )}
            </StyledButton>

            <NavLink
              to={"/admin/login"}
              style={{
                fontSize: "14px",
                color: "#4a90e2",
                margin: "10px auto",
                textDecoration: "none",
              }}
            >
              Already have an Account? Login
            </NavLink>
          </SignupForm>
        </SignupCard>
      </SignupContainer>
    </>
  );
};

export default Signup;
