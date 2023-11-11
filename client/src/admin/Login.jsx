import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Form, Button,Spinner} from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SyncLoader} from "react-spinners";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import { adminLogin } from "../clientSide/redux/actions/adminAuthAction";

const LoginContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4a90e2, #8253de);
`;

const LoginCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  margin: 10px;
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
  background: linear-gradient(to right, #4a90e2, #8253de);
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        setLoading(false);      }, 5000);

      return () => clearTimeout(delay);
    }
  }, [loading, navigate]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newErrors = {};

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
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password & Confirm Password are not matched";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        setSubmitting(true);
        const response = await axios.post("http://localhost:3000/admin/login", {
          email: formData.email,
          password: formData.password,
        });
        
        if (response.status === 200) {
          setLoading(true);
          // Assuming a successful login might redirect to a dashboard
          toast.success("Login successful!");
          dispatch(adminLogin(formData));
          // Redirect to the dashboard after 4 seconds
          setTimeout(() => {
            setLoading(false);
            navigate("/admin/dashboard");
          }, 4000);
        }
      } catch (error) {
        // Handle different login error scenarios here
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message); // Show the specific error message from the backend
        } else {
          toast.error("Failed to log in. Please try again.");
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
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </StyledFormGroup>

            <StyledFormGroup>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <ErrorText>{errors.password}</ErrorText>}
            </StyledFormGroup>

            <StyledFormGroup>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {errors.confirmPassword && (
                <ErrorText>{errors.confirmPassword}</ErrorText>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <Form.Check
                type="checkbox"
                label="Show Password"
                onChange={handleShowPassword}
              />
            </StyledFormGroup>

            <StyledButton type="submit" disabled={submitting}>
              {submitting ? <Spinner animation="border" size="sm" role="status" /> : "Log In"}
            </StyledButton>

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
    </>
  );
};

export default Login;
