import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  openSignupModal,
  closeModal,
  openLoginModal,
} from "../../redux/actions/modalActions";
const SignUp = () => {
  const dispatch = useDispatch();
  const showSignupModal = useSelector((state) => state.modal.showSignupModal);

  const handleClose = () => {
    dispatch(closeModal()); // Close the login modal
  };

  const openLogin = () => {
    dispatch(openLoginModal());
  };
  return (
    <>
      <Modal show={showSignupModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <div className="text-center w-100">
            <h3>Sign Up</h3>
          </div>
        </Modal.Header>
        <div className="d-flex justify-content-center my-3">
          <Button
            className="w-75 p-2"
            style={{
              border: "1px solid black",
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
            }}
          >
            SignUp with Google
          </Button>
        </div>
        <p className="text-center fs-4" style={{ color: "#999999" }}>
          - or -
        </p>
        <div>
          <Form>
            <Form.Group className="w-75 mx-auto">
              <div className="mb-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ fontSize: "28px", color: "#999999" }}
                  />
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="w-100"
                    style={{
                      border: "none",
                      boxShadow: "none",
                    }}
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
              <div className="my-3">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    style={{ fontSize: "28px", color: "#999999" }}
                  />
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="w-100"
                    style={{
                      border: "none",
                      boxShadow: "none",
                    }}
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
            <Form.Group className="w-75 mx-auto my-4">
              <div className="d-flex justify-content-between">
                <Form.Check label="Remember me"></Form.Check>
                <NavLink style={{ color: "black" }}>Forgot Password</NavLink>
              </div>
            </Form.Group>
            <Form.Group className="w-75 mx-auto my-4">
              <Button
                className="w-100"
                style={{
                  fontWeight: "500",
                  border: "2px solid #fa7b05",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  backgroundColor: "#fa7b05",
                  color: "#ffffff",
                }}
              >
                Login
              </Button>
              <p className="mt-4 text-center">
                Already have an account?
                <NavLink
                  style={{ color: "#fa7b05" }}
                  to={"/"}
                  onClick={openLogin}
                  className="ms-1"
                >
                  Login
                </NavLink>
              </p>
              <p className="text-center" style={{ color: "#999999" }}>
                By logging in, you agree to our Terms of Use and<br></br>{" "}
                Privacy Policy
              </p>
            </Form.Group>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
