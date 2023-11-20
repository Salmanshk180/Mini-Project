import React, { useState } from "react";
import { FaTrash, FaBan, FaCheck } from "react-icons/fa";

import styled from "styled-components";

const UserProfilesWrapper = styled.div`
  height: 491px;
  display: flex;
  flex-direction: column;
  margin:8px 2px;
  background-color: #f0f0f0;
  border-radius:10px;
`;

const UserProfilesContainer = styled.div`
  padding:10px 20px;
  border-radius: 10px;
  flex-grow: 1;
  overflow-y: auto;
  
`;

const UserProfile = styled.div`
  background-color: #ffffff;
  margin: 7px 0;
  margin: 15px 0px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f7f7f7;
    background: linear-gradient(to bottom, rgb(250, 123, 5), #FF6B47);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const UserInfo = styled.div`
  flex: 1;
  color: #333;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 400;
  text-align: justify;
  strong {
    font-weight: 600;
  }

  p {
    margin: 0;
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

const UserAction = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  color: #fff;
  transition: background-color 0.3s ease;

  svg {
    margin-right: 5px;
  }
`;

const DeleteButton = styled(UserAction)`
  background-color: #ff6b6b;
  &:hover {
    background-color: #ff5252;
  }
`;

const BlockButton = styled(UserAction)`
  background-color: #85c1e9;
  &:hover {
    background-color: #77dd77;
  }
`;

const UnblockButton = styled(UserAction)`
  background-color: #ffd166;
  &:hover {
    background-color: #ffc107;
  }
`;

const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 1px 0px;
  padding: 0;
  li {
    margin: 0 10px;
    cursor: pointer;
    padding:0px 10px;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #0078d4;
    }

    &.active {
      color: #fff;
      background-color: rgb(250, 123, 5);
    }
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const UserProfiles = () => {
  // Sample array of user data (you can replace it with actual user data)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      blocked: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith456",
      email: "janesmith@example.com",
      blocked: false,
    },
    {
      id: 3,
      name: "John Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      blocked: false,
    },
    {
      id: 4,
      name: "Jane Smith",
      username: "janesmith456",
      email: "janesmith@example.com",
      blocked: false,
    },
    {
      id: 5,
      name: "John Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      blocked: false,
    },
    {
      id: 6,
      name: "Jane Smith",
      username: "janesmith456",
      email: "janesmith@example.com",
      blocked: false,
    },
    {
      id: 7,
      name: "John Doe",
      username: "johndoe123",
      email: "johndoe@example.com",
      blocked: false,
    },
    {
      id: 8,
      name: "Jane Smith",
      username: "janesmith456",
      email: "janesmith@example.com",
      blocked: false,
    },
    // Add more user objects here
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleBlockUser = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, blocked: !user.blocked };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / itemsPerPage); i++) {
    pageNumbers.push(
      <li
        key={i}
        id={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "active" : ""}
      >
        {i}
      </li>
    );
  }

  return (
    <UserProfilesWrapper className="vh-100">
      <UserProfilesContainer>
        <h2>User Profiles</h2>
        <SearchInput
          type="text"
          placeholder="Search by name, username, or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {currentItems.map((user) => (
          <UserProfile key={user.id}>
            <UserInfo>
              <p>
                <strong>Name:</strong> {user.name} | <strong>Username:</strong>{" "}
                {user.username} | <strong>Email:</strong> {user.email} |{" "}
                <strong>Blocked:</strong> {user.blocked ? "Yes" : "No"}
              </p>
            </UserInfo>
            <UserActions>
              <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                <FaTrash /> Delete
              </DeleteButton>
              {user.blocked ? (
                <UnblockButton onClick={() => handleBlockUser(user.id)}>
                  <FaCheck /> Unblock
                </UnblockButton>
              ) : (
                <BlockButton onClick={() => handleBlockUser(user.id)}>
                  <FaBan /> Block
                </BlockButton>
              )}
            </UserActions>
          </UserProfile>
        ))}
      </UserProfilesContainer>
      <PaginationList>{pageNumbers}</PaginationList>
    </UserProfilesWrapper>
  );
};

export default UserProfiles;
