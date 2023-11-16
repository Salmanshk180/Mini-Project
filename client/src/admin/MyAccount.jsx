import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Card, Button, Form } from "react-bootstrap";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const ProfileContainer = styled(Container)`
  height: 100vh;
  padding: 20px;
  display: flex;
  align-items: start;
  justify-content: center;
  background: linear-gradient(to left, #4a90e2, #8253de);
`;

const MyAccount = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [editedInfo, setEditedInfo] = useState({
    name: "",
    email: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!validateEmail(editedInfo.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (editedInfo.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/myaccount"
        );
        setAdminInfo(response.data[0]);
        setEditedInfo(response.data[0]);
      } catch (error) {
        console.error("Error fetching admin info:", error);
      }
    };

    fetchAdminInfo();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const { name, email, gender } = editedInfo;
      const response = await axios.put(
        `http://localhost:3000/admin/my-account/${adminInfo._id}`,
        { name, email, gender }
      );
      toast.success("Admin Details Updated");
      setTimeout(() => {
        setAdminInfo(editedInfo);
        setIsEditing(false);
        setLoading(false);
        console.log("Updated user info:", response.data);
      }, 5000);
    } catch (error) {
      console.error("Error updating admin info:", error);
      toast.error("Something went wrong updating admin info!!!");
    }
  };

  const handleCancel = () => {
    setLoading(false); // Ensure loading state is reset on cancel
    setEditedInfo(adminInfo);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedInfo({ ...editedInfo, [name]: value });
  };
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        setLoading(true);
        await axios.delete(
          `http://localhost:3000/admin/my-account/${adminInfo._id}`
        );
        console.log("Account deleted.");
        // Adding a delay of 2 seconds to simulate the loading state after deletion
        setTimeout(() => {
          toast.success("Account deleted successfully!");
          navigate("/admin/signup");
          setLoading(false);
        }, 5000);
      } catch (error) {
        console.error("Error deleting account:", error);
        toast.error("Error deleting account!");
        setLoading(false);
      }
    }
  };

  return (
    <ProfileContainer fluid>
      <Card>
        <Card.Body>
          <h3 className="text-center">My Account</h3>
          {loading ? (
            <div className="sweet-loading">
              <ClipLoader loading={loading} css={override} size={150} />
            </div>
          ) : (
            <>
              {!isEditing ? (
                <div className="mt-3">
                  <div className="text-center my-2">
                    <img src={adminInfo.profilePicture} alt="" srcset="" />
                  </div>
                  <p>
                    <strong>Name:</strong> {adminInfo.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {adminInfo.email}
                  </p>
                  <p>
                    <strong>Gender:</strong> {adminInfo.gender}
                  </p>
                  <div className="d-flex justify-content-between">
                    <Button onClick={handleEdit}>Edit</Button>
                    <Button variant="danger" onClick={handleDelete}>
                      Delete
                    </Button>
                  </div>
                </div>
              ) : (
                <Form className="px-4">
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={editedInfo.name}
                      name="name"
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={editedInfo.email}
                      name="email"
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      as="select"
                      value={editedInfo.gender}
                      name="gender"
                      onChange={handleInputChange}
                    >
                      <option value="not specified">Not Specified</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                  <div className="d-flex justify-content-between">
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </div>
                </Form>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </ProfileContainer>
  );
};

export default MyAccount;
