import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
    { name: "January", value: 12 },
    { name: "February", value: 19 },
    { name: "March", value: 3 },
    { name: "April", value: 5 },
    { name: "May", value: 2 },
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

  return (
    <Container fluid>
      <h1 className="mt-4">Admin Dashboard</h1>

      <Row className="my-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Col md={4} key={index}>
            <Card
              className="h-100"
              style={{
                background: hoveredCard === index
                  ? cardHoverColors[index]
                  : cardGradientColors[index],
                borderRadius: "10px",
                padding: "15px",
                transition: "background 0.2s",
                color: hoveredCard === index ? hoverTextColor : defaultTextColor,
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              onMouseLeave={handleCardMouseLeave}
            >
              <Card.Body>
                <Card.Title>Card {index + 1}</Card.Title>
                <Card.Text>This is card {index + 1}.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title className="mb-4">Chart</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
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
