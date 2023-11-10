import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEnvelopeFill, BsLockFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  openSignupModal,
  closeModal,
  openLoginModal,
} from "../../redux/actions/modalActions";
import { resetMessage, signUp } from "../../redux/actions/authAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const showSignupModal = useSelector((state) => state.modal.showSignupModal);
  const message = useSelector((state) => state.auth.message);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [validMessage, setValidMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmpassword) {
      setValidMessage("Please fill in all fields");
    } else if (formData.password !== formData.confirmpassword) {
      setValidMessage("Password and Confirm Password do not match");
    } else {
      dispatch(signUp(formData));
    }
  };

  useEffect(() => {
    if (message === "User registered successfully") {
      navigate("/app");
      dispatch(resetMessage());
    }
  }, [message, navigate, dispatch]);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const openLogin = () => {
    dispatch(openLoginModal());
  };

  return (
    <Modal show={showSignupModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <div className="text-center w-100">
          <h3>Sign Up</h3>
        </div>
      </Modal.Header>

      <div className="mt-5">
        <Form method="post" name="formData" onSubmit={handleSubmit}>
          <Form.Group className="w-75 mx-auto">
            <div className="mb-2">
              <div className="d-flex align-items-center">
                <BsEnvelopeFill
                  style={{ fontSize: "24px", color: "gray" }}
                ></BsEnvelopeFill>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-100"
                  style={{
                    border: "none",
                    boxShadow: "none",
                  }}
                  onChange={handleChange}
                ></Form.Control>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
            <div className="my-2">
              <div className="d-flex align-items-center">
                <BsLockFill
                  style={{ fontSize: "24px", color: "gray" }}
                ></BsLockFill>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-100"
                  style={{
                    border: "none",
                    boxShadow: "none",
                  }}
                  onChange={handleChange}
                ></Form.Control>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
            <div className="my-2">
              <div className="d-flex align-items-center">
                <BsLockFill
                  style={{ fontSize: "24px", color: "gray" }}
                ></BsLockFill>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmpassword"
                  className="w-100"
                  style={{
                    border: "none",
                    boxShadow: "none",
                  }}
                  onChange={handleChange}
                ></Form.Control>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
          </Form.Group>
          {validMessage ? (
            <p className="text-center" style={{ color: "red" }}>
              {validMessage}!!
            </p>
          ) : (
            ""
          )}
          <Form.Group className="w-75 mx-auto my-4">
            <Button
              className="w-100"
              type="submit"
              style={{
                fontWeight: "500",
                border: "2px solid #fa7b05",
                borderRadius: "50px",
                padding: "10px 20px",
                backgroundColor: "#fa7b05",
                color: "#ffffff",
              }}
            >
              Sign Up
            </Button>
            <p className="mt-4 text-center">
              Already have an account?
              <NavLink
                style={{ color: "#fa7b05" }}
                onClick={openLogin}
                className="ms-1"
              >
                Login
              </NavLink>
            </p>
            <p className="text-center" style={{ color: "#999999" }}>
              By logging in, you agree to our Terms of Use and<br></br> Privacy
              Policy
            </p>
          </Form.Group>
        </Form>
      </div>
    </Modal>
  );
};

export default SignUp;
