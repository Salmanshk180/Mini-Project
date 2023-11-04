import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from 'styled-components';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const data = [
    { name: "August", value: 3 },
    { name: "September", value: 9 },
    { name: "Octomber", value: 3 },
   
    
  ];

  const cardGradientColors = [
    "linear-gradient(to bottom, #FF6B6B, #FFD166)",
    "linear-gradient(to bottom, #85C1E9, #3E4095)",
    "linear-gradient(to bottom, #77DD77, #A3CB38)",
  ];

  const cardHoverColors = ["#FF8C8C", "#6FABFF", "#6FFF6F"];
  const defaultTextColor = "#fff";
  const hoverTextColor = "#000";

  const [hoveredCard, setHoveredCard] = useState(-1);

  const handleCardMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(-1);
  };

  const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledCard = styled.div`
  width: 48%;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 0 1%;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const CardValue = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: rgb(255,123,0);
`;

  return (
    <Container fluid>
      <div className="d-flex justify-content-between mt-3"> 
      <CardContainer>
      <StyledCard>
        <CardTitle>No Of Users</CardTitle>
        <CardValue>3</CardValue>
      </StyledCard>
      <StyledCard>
        <CardTitle>No Of Designs</CardTitle>
        <CardValue>10</CardValue>
      </StyledCard>
    </CardContainer>
      </div>
      <Row className="my-4"></Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Montly Report</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="rgb(255,123,0)" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
