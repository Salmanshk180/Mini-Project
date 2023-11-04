// NotFound.js

import React from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";

const NotFoundContainer = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #555;
  margin: 10px 0;
`;

const NotFoundMessage = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
`;

const GoBackButton = styled.button`
  background: rgb(255,123,0);
  color: white;
  border: 1px solid ;
  padding: 10px 20px;
  outline: none;
  font-size: 1.2rem;
  transition: background 0.3s;
  &:hover {
    background: white;
    color: rgba(255,123,0);
    border: 1px solid rgba(255,123,0);
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer fluid>
      <NotFoundTitle>404 - Not Found</NotFoundTitle>
      <NotFoundMessage>The page you are looking for does not exist.</NotFoundMessage>
      <GoBackButton onClick={() => window.history.back()}>Go Back</GoBackButton>
    </NotFoundContainer>
  );
};

export default NotFound;
